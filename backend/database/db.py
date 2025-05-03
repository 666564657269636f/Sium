import os
import time
from mysql.connector import connect, Error

db = None
cursor = None

time.sleep(5)

try:
    db = connect(
        host = os.environ.get('DB_HOST', '127.0.0.1'),
        user = os.environ.get('DB_USER', 'root'),
        password = os.environ.get('DB_PASSWORD', ''),
        database = os.environ.get('MYSQL_DB', '')
    )

    cursor = db.cursor()

except Error as err:
    print('Errore durante la connessione al database:', err)
