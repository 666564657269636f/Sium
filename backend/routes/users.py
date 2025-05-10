import logging

from database.db import cursor

class User:
    def __init__(self, id:int, name: str, surname: str, email: str, course: str, department: str, phone: str, address: str, password: str, username: str):
        self.id = id
        self.name = name
        self.surname = surname
        self.email = email
        self.course = course
        self.department = department
        self.phone = phone
        self.address = address
        self.password = password
        self.username = username

    @staticmethod
    def set_user(name: str, surname: str, email: str, course: str, department: str, phone: str, address: str, password: str, username: str):
        try:
            cursor.execute('''
                INSERT INTO Users (name, surname, email, course, department, phone, address, password, username) 
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);
            ''', (name, surname, email, course, department, phone, address, password, username))
            cursor._connection.commit()

            return User(id=cursor.lastrowid, 
                        name=name, surname=surname, email=email, course=course, 
                        department=department, phone=phone, address=address, 
                        password=password, username=username)
        
        except Exception as e:
            logging.error(f"Errore durante l'inserimento dell'utente: {e}")
            raise

    @staticmethod
    def get_user(identifier: str):
        try:
            cursor.execute('''
                SELECT id, name, surname, email, course, department, phone, address, password, username
                FROM Users
                WHERE (username = %s OR email = %s);
            ''', (identifier, identifier, ))
            
            user_data = cursor.fetchone()
            
            if user_data:
                return User(
                    id=user_data[0],
                    name=user_data[1],
                    surname=user_data[2],
                    email=user_data[3],
                    course=user_data[4],
                    department=user_data[5],
                    phone=user_data[6],
                    address=user_data[7],
                    password=user_data[8],
                    username=user_data[9]
                )
            else:
                logging.error("User not found or password mismatch")
                return None

        except Exception as e:
            logging.error(f"Errore durante il recupero dell'utente: {e}")
            raise

    def update_name(self, name: str):
        try:
            cursor.execute('''
                UPDATE Users 
                SET name = %s 
                WHERE id = %s;
            ''', (name, self.id))
            cursor._connection.commit()
            
            self.name = name
        except Exception as e:
            logging.error(f"Errore durante l'aggiornamento del nome: {e}")
            raise

    def update_surname(self, surname: str):
        try:
            cursor.execute('''
                UPDATE Users 
                SET surname = %s 
                WHERE id = %s;
            ''', (surname, self.id))
            cursor._connection.commit()
            
            self.surname = surname
        except Exception as e:
            logging.error(f"Errore durante l'aggiornamento del cognome: {e}")
            raise

    def update_email(self, email: str):
        try:
            cursor.execute('''
                UPDATE Users 
                SET email = %s 
                WHERE id = %s;
            ''', (email, self.id))
            cursor._connection.commit()

            self.email = email
        except Exception as e:
            logging.error(f"Errore durante l'aggiornamento dell'email: {e}")
            raise

    def update_course(self, course: str):
        try:
            cursor.execute('''
                UPDATE Users 
                SET course = %s 
                WHERE id = %s;
            ''', (course, self.id))
            cursor._connection.commit()

            self.course = course
        except Exception as e:
            logging.error(f"Errore durante l'aggiornamento del corso: {e}")
            raise

    def update_department(self, department: str):
        try:
            cursor.execute('''
                UPDATE Users 
                SET department = %s 
                WHERE id = %s;
            ''', (department, self.id))
            cursor._connection.commit()

            self.department = department
        except Exception as e:
            logging.error(f"Errore durante l'aggiornamento del dipartimento: {e}")
            raise

    def update_phone(self, phone: str):
        try:
            cursor.execute('''
                UPDATE Users 
                SET phone = %s 
                WHERE id = %s;
            ''', (phone, self.id))
            cursor._connection.commit()

            self.phone = phone
        except Exception as e:
            logging.error(f"Errore durante l'aggiornamento del telefono: {e}")
            raise

    def update_address(self, address: str):
        try:
            cursor.execute('''
                UPDATE Users 
                SET address = %s 
                WHERE id = %s;
            ''', (address, self.id))
            cursor._connection.commit()

            self.address = address
        except Exception as e:
            logging.error(f"Errore durante l'aggiornamento dell'indirizzo: {e}")
            raise

    def update_password(self, password: str):
        try:
            cursor.execute('''
                UPDATE Users 
                SET password = %s 
                WHERE id = %s;
            ''', (password, self.id))
            cursor._connection.commit()

            self.password = password
        except Exception as e:
            logging.error(f"Errore durante l'aggiornamento della password: {e}")
            raise

    def update_username(self, username: str):
        try:
            cursor.execute('''
                UPDATE Users 
                SET username = %s 
                WHERE id = %s;
            ''', (username, self.id))
            cursor._connection.commit()

            self.username = username
        except Exception as e:
            logging.error(f"Errore durante l'aggiornamento dello username: {e}")
            raise
