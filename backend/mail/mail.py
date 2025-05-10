from flask_mail import Mail, Message

mail = Mail()

def send_email(subject: str, body: str, email: str):
    msg = Message(
        subject=subject,
        recipients=[email],
        body=body
    )
    mail.send(msg)
