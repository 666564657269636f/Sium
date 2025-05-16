from abc import *

class InvalidCreditsError(ValueError):
    """Lanciata quando i crediti non sono validi (<= 0)."""
    pass

class CourseIDNotSetError(ValueError):
    """Lanciata quando il course_id non è valido o non è impostato."""
    pass

class IDNotSetError(Exception):
    """Lanciata quando si tenta di accedere all'ID ma non è impostato (non salvato nel DB)."""
    pass

class Subject(ABC):
    def __init__(self, name: str, description: str, credits: int, course_id: int):
        self.id: int = None
        self.name: str = name       # Potrebbe essere un problema probabilmente se non metto unique name nel db. Valutare! In caso fare l'eccezione
        self.description: str = description
        self.credits: int = self.set_credits(credits=credits)
        self.course_id: int = self.set_course_id(course_id=course_id)

    def get_id(self) -> int:
        if not self.id:
            raise IDNotSetError('The ID has not been set yet. It seems the object has not been persisted in the database.')
        return self.id
    
    def get_name(self) -> str:
        return self.name
    
    def get_description(self) -> str:
        return self.description
    
    def get_credits(self) -> int:
        return self.credits
    
    def get_course_id(self) -> int:
        return self.course_id
    
    def set_name(self, name: str) -> None:
        self.name = name
    
    def set_description(self, description: str) -> None:
        self.description = description
    
    def set_credits(self, credits: int) -> None:
        if credits <= 0:
            raise InvalidCreditsError(f'Credits must be a positive number greater than 0. Received: { credits }')
        
    def set_course_id(self, course_id: int) -> None:
        self.course_id = course_id  # Lanciare eccezione??