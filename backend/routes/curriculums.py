import logging

from database.db import cursor
from uuid import uuid4
from typing import Dict

class CurriculumError(Exception):
    pass

class CurriculumValueError(CurriculumError):
    pass

class CurriculumCreationError(CurriculumError):
    pass

class Curriculum:
    def __init__(self, id: int = None, user_id: int = None, check_only = False):
        self.id = id
        self.user_id = user_id
        self.filename = self._random_filename()

        # Verifico se c'è un curriculum associato
        if self.id:
            self._get_curriculum_from_db()
        # Se passo l'user_id vuol dire che voglio creare il curriculum
        elif self.user_id and not check_only:
            self._create()
        # Se passo l'user_id e la flag di verifica, verifico solo se sono presenti i valori
        elif self.user_id and check_only:
            self._verify()
        else:
            raise CurriculumError('Parametri non validi per l\'inizializzazione di Curriculum')

    def _verify(self) -> bool:
        try:
            cursor.execute('SELECT id, user_id, filename FROM Curriculums WHERE user_id = %s;', (self.get_user_id(), ))
            data = cursor.fetchone()
            if not data:
                raise CurriculumValueError('No curriculum found in database')
            self.id = data[0]
            self.filename = data[2]
        except Exception:
            raise

    def to_dict(self):
        return {
            'id': self.get_id(),
            'user_id': self.get_user_id(),
            'filename': self.get_filename()
        }

    def _random_filename(self) -> str:
        return f'file_{ uuid4().hex }.pdf'

    def _get_curriculum_from_db(self) -> None:
        try:
            logging.debug(self.get_id())
            cursor.execute('SELECT user_id, filename FROM Curriculums WHERE id = %s;', (self.get_id(), ))
            data = cursor.fetchone()
            if not data:
                raise CurriculumValueError('No curriculum found in database')
            self.user_id = data[0]
            self.filename = data[1]
        except Exception:
            raise

    def _create(self) -> None:
        try:
            cursor.execute('INSERT INTO Curriculums (user_id, filename) VALUES (%s, %s);', (self.get_user_id(), self.get_filename(), ))
            cursor._connection.commit()
            self.id = cursor.lastrowid
            if not self.id:
                raise CurriculumCreationError('Impossibile creare il curriculum')
        except Exception:
            raise

    def delete(self) -> None:
        try:
            cursor.execute('DELETE FROM Curriculums WHERE id = %s;', (self.get_id(), ))
            cursor._connection.commit()
        except Exception:
            raise

    # Getter
    def get_id(self) -> int:
        return self.id
    
    def get_user_id(self) -> int:
        return self.user_id

    def get_filename(self) -> str:
        return self.filename

    # Setter
    def set_filename(self) -> None:
        filename: str = self._random_filename()
        try:
            cursor.execute('UPDATE Curriculums SET filename = %s WHERE id = %s;', (filename, self.get_id()))
            cursor._connection.commit()
            self.filename = filename
        except Exception:
            raise
