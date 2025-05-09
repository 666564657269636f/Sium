import logging

from database.db import cursor
from uuid import uuid4

class CurriculumError(Exception):
    pass

class CurriculumValueError(CurriculumError):
    pass

class CurriculumCreationError(CurriculumError):
    pass

class Curriculum:
    def __init__(self, id: int = None, user_id: int = None):
        self.id = id
        self.user_id = user_id
        self.filename = self._random_filename()

        if self.id:
            self._get_curriculum_from_db()
        elif self.user_id:
            self._create()
        else:
            raise CurriculumError('Parametri non validi per l\'inizializzazione di Curriculum')

    def _random_filename(self) -> str:
        return f'file_{ uuid4().hex }.pdf'

    def _get_curriculum_from_db(self) -> None:
        try:
            cursor.execute('SELECT user_id, filename FROM Curriculums WHERE id = %s;', (self.id, ))
            data = cursor.fetchone()
            if not data:
                raise CurriculumValueError('No curriculum found in database')
            self.user_id = data[0]
            self.filename = data[1]
        except Exception:
            raise

    def _create(self) -> None:
        try:
            cursor.execute('INSERT INTO Curriculums (user_id, filename) VALUES (%s, %s);', (self.user_id, self.filename))
            cursor._connection.commit()
            self.id = cursor.lastrowid
            if not self.id:
                raise CurriculumCreationError('Impossibile creare il curriculum')
        except Exception:
            raise

    def delete(self) -> None:
        try:
            cursor.execute('DELETE FROM Curriculums WHERE id = %s;', (self.get_id()))
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
    def set_filename(self, filename: str) -> None:
        try:
            cursor.execute('UPDATE Curriculums SET filename = %s;', (filename))
            cursor._connection.commit()
            self.filename = filename
        except Exception:
            raise
