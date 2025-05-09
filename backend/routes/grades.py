import logging

from typing import List, Dict
from database.db import cursor

"""
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    subject_id INT NOT NULL,
    mark INT NOT NULL,
    cfu INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES Subjects(id) ON DELETE CASCADE
"""

class DatabaseError(Exception):
    pass

class GradeError(Exception):
    pass

class GradeNotFound(GradeError):
    pass

class GradeValueNotFound(GradeError):
    pass

class GradeCreationError(GradeError):
    pass

class Grades:
    def __init__(self, id: int = None, user_id: int = None, subject_id: int = None, mark: int = None, create: bool = True):
        self.id: int = id
        self.user_id: int = user_id
        self.subject_id: int = subject_id
        self.mark: int = mark

        if not create:
            return

        # Se passo solo l'id voglio un certo status
        if id and not user_id and not subject_id and not mark:
            self._get_status_from_db_by_id()

        # Se passo l'id di un utente voglio tutto il suo status
        elif user_id and not id and not subject_id and not mark:
            pass
        # Se passo l'id dell'utente ed una certa materia voglio lo status di quell'utente e quella materia
        elif user_id and subject_id and not id and not mark:
            self._get_status_from_db_by_user_id_and_subject_id()
        # Se passo l'utente, la materia, il voto vuol dire che voglio creare un nuovo status
        elif user_id and subject_id and mark:
            self._create()
        else:
            raise GradeError('Parametri non validi per l\'inizializzazione di Status') # Modificare il nome dell'eccezione ed aggiungi quali parametri non vanno bene
    
    def to_dict(self) -> Dict[str, int]:
        return {
            'id': self.id,
            'user_id': self.user_id,
            'subject_id': self.subject_id,
            'mark': self.mark
        }

    # Static Methods
    @staticmethod
    def get_grades() -> List['Grades']:
        try:
            cursor.execute('SELECT * FROM Grades;')
            grades = cursor.fetchall()
            return [Grades(id=grade[0], user_id=grade[1], subject_id=grade[2], mark=grade[3], create=False) for grade in grades]
        except Exception as e:
            raise 

    # Getter from DB by id
    def _get_status_from_db_by_id(self) -> None:
        try:
            cursor.execute('SELECT user_id, subject_id, mark FROM Grades WHERE id = %s;', (self.id, ))
            value = cursor.fetchone()
            if not value:
                logging.error(f'No status found for id = { self.id }')
                raise GradeValueNotFound('Valori non validi per la classe')
            self.user_id = value[0]
            self.subject_id = value[1]
            self.mark = value[2]
        except Exception as e:
            raise e

    def _get_status_from_db_by_user_id_and_subject_id(self) -> None:
        try:
            cursor.execute('SELECT id, mark FROM Grades WHERE user_id = %s and subject_id = %s;', (self.user_id, self.subject_id))
            value = cursor.fetchone()
            if not value:
                logging.error(f'No status found for id = { self.id }')
                raise GradeValueNotFound('Valori non validi per la classe')
            self.id = value[0]
            self.mark = value[1]
        except Exception as e:
            raise e

    def _create(self) -> None:
        try:
            cursor.execute('INSERT INTO Grades (user_id, subject_id, mark) VALUES (%s, %s, %s);', (self.user_id, self.subject_id, self.mark, ))
            self.id = cursor.lastrowid
            cursor._connection.commit()
            if not self.id:
                logging.error('Errore nella creazione dello status')
                raise GradeCreationError('Errore nella creazione dello status')
        except Exception:
            raise

    def _delete(self) -> None:
        try:
            cursor.execute('DELETE FROM Grades WHERE id = %s;', (self.id, ))
            cursor._connection.commit()
        except Exception:
            raise

    # Getter
    def get_id(self) -> int:
        return self.id
    
    def get_user_id(self) -> int:
        return self.user_id
    
    def get_subject_id(self) -> int:
        return self.subject_id
    
    def get_mark(self) -> int:
        return self.mark
    
    # Setter
