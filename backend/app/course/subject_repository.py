from abc import *
from subject import Subject
from typing import List

class SubjectRepository(ABC):

    @abstractmethod
    @staticmethod
    def get(id: int) -> 'Subject':
        pass

    @abstractmethod
    def save(self) -> None:
        pass

    @abstractmethod
    def delete(self) -> None:
        pass

    @abstractmethod
    def check(self) -> bool:
        pass

    @abstractmethod
    def count(self) -> int:
        pass

    @abstractmethod
    def all(self) -> List['Subject']:
        pass