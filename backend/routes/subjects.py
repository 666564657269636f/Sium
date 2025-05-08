import logging

from flask import jsonify
from database.db import cursor

from typing import List

class SubjectError(Exception):
    pass

class SubjectsNotFoundError(SubjectError):
    pass

class SubjectCreationError(SubjectError):
    pass

class SubjectVerificationError(SubjectError):
    pass

class Subject:
    def __init__(self, id: int = None, name: str = None, create: bool = True):
        if not create:
            self.id = id
            self.name = name
            return

        # Se passo l'id vuol dire che vorrei il Subject
        if id and not name:
            self._get_name_by_id()  
            return          
        
        # Se non passo un id ma passo un name vuol dire che voglio creare il Subject
        if not id and name:
            self.name = name
            self._create()
            return
        
        # Se passo entrambi voglio verificare che i dati siano tutti corretti
        if id and name:
            self.id = id
            self.name = name
            self._verify()

    # Modifcare in modo da gestire meglio l'errore di creazione del soggetto con un eventuale errore di db
    def _create(self):
        try:
            cursor.execute('INSERT INTO Subjects (name) VALUES (%s);', (self.name, ))
            cursor._connection.commit()
            self.id = cursor.lastrowid
        except Exception as e:
            logging.error(f'Database error creating Subject(name = { self.name }): {e}')
            raise SubjectCreationError(f'Failed to create Subject(name = { self.name })') from e

    def _verify(self):
        try:
            cursor.execute('SELECT id, name FROM Subjects WHERE id = %s and name = %s;', (self.id, self.name, ))
            if not cursor.fetchone():
                raise SubjectVerificationError(f'Subject(id={self.id}, name="{self.name}") not found in database')
        except SubjectVerificationError:
            raise
        except Exception as e:
            logging.error(f'Database error while verifying Subject(id={ self.id }, name="{ self.name }"): { e }')
            raise SubjectVerificationError('Failed to verify subject due to a database error') from e

    def _get_name_by_id(self) -> None:
        try:
            cursor.execute('SELECT name FROM Subjects WHERE id = %s;', (self.id, ))
            name = cursor.fetchone()
            if not name:
                raise SubjectsNotFoundError(f'Subject(id={ self.id }) not found in database')
            else:
                self.name = name[0]
        except SubjectCreationError:
            raise
        except Exception as e:
            logging.error(f'Database error while fetching Subject(id={self.id}): {e}')
            raise SubjectVerificationError(f'Failed to fetch Subject(id={self.id}) due to a database error.') from e 

    @staticmethod
    def get_subjects() -> List['Subject']:
        try:
            cursor.execute('SELECT * from Subjects;')      
            return [Subject(id = subject[0], name = subject[1], create=False) for subject in cursor.fetchall()]
        except Exception as e:
            raise e

    @staticmethod
    def get_ids() -> List[int]:
        try:
            cursor.execute('SELECT id FROM Subjects;')
            return [id[0] for id in cursor.fetchall()]
        except Exception as e:
            raise e

    @staticmethod
    def get_names() -> List[str]:
        try:
            cursor.execute('SELECT name FROM Subjects;')
            return [name[0] for name in cursor.fetchall()]
        except Exception as e:
            raise e

    def delete(self):
        try:
            cursor.execute('DELETE FROM Subjects WHERE id = %s;', (self.id, ))
            cursor._connection.commit()
        except Exception as e:
            raise e

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def get_id(self) -> int:
        return self.id
    
    def get_name(self) -> str:
        return self.name
