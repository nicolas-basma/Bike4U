from flask_sqlalchemy import SQLAlchemy
import bcrypt
import string
import random
from api.utils.utils import pass_to_string_for_Postgress

db = SQLAlchemy()


favorites_parts = db.Table('favorites_parts',
                           db.Column('user_id',
                                     db.Integer,
                                     db.ForeignKey('user.id'), primary_key=True), db.Column('bike_part_id', db.Integer, db.ForeignKey('bike_part.id'), primary_key=True))

favorites_bikes = db.Table('favorites_bikes',
                            db.Column('user_id',
                                        db.Integer,
                                        db.ForeignKey('user.id'), primary_key=True), db.Column('bike_id', db.Integer, db.ForeignKey('bike.id'), primary_key=True))

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    size = db.Column(db.String(120), nullable=False)
    weight = db.Column(db.String(120), nullable=False)
    bike_type = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    favorites_parts = db.relationship(
        'BikePart', backref="users", secondary=favorites_parts)
    favorites_bikes = db.relationship(
        'Bike', backref="users", secondary=favorites_bikes)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def verify(self, password):
        # comprobar si la contraseña es correcta
        
        # SQL Database
        # hash_password = bcrypt.hashpw(password, self.password)
        # return self.password == hash_password
        
        # Postgress Database
        casted_to_byte_db_pass = bytes(self.password,'utf-8')
        hash_password = bcrypt.hashpw(password, casted_to_byte_db_pass)
        return casted_to_byte_db_pass == hash_password

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "size": self.size,
            "weight": self.weight,
            "email": self.email,
            "bike_type": self.bike_type,
            # "favorites": [f'{bike_part}' for bike_part in self.favorites],
            "favorites": {
                "bikes": [bike.serialize() for bike in self.favorites_bikes],
                "parts": [part.serialize() for part in self.favorites_parts]
                }
        }
    
    def serialize_favorites(self):
        return {
            "name": self.name,
            "favorites": {
                "bikes": [bike.serialize() for bike in self.favorites_bikes],
                "parts": [part.serialize() for part in self.favorites_parts]
                }
        }
            
    
    def serialize_token_info(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "size": self.size,
            "weight": self.weight,
            "email": self.email,
            "bike_type": self.bike_type,           
        }
    
    def restore_password(self):
        # Generate random password:
        length_of_string = 8
        my_random_pass=(''.join(random.SystemRandom().choice(string.ascii_letters + string.digits) for _ in range(length_of_string)))
        # Encrypt pass
        new_password = bcrypt.hashpw(
            my_random_pass.encode("utf-8"), bcrypt.gensalt())
        # Assign pass to user
        # SQL Database
        # self.password = new_password
        # Postgress Database
        self.password = pass_to_string_for_Postgress(new_password)
        db.session.commit()

        return my_random_pass

    
class BikePart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    part = db.Column(db.String(120), nullable=False)
    terrain = db.Column(db.String(120), nullable=False)
    size = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(120), nullable=False)
    image = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(300), nullable=True)
    link = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<BikePart {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "part": self.part,
            "terrain": self.terrain,
            "size": self.size,
            "title": self.title,
            "image": self.image,
            "description": self.description,
            "link": self.link,
        }
    
class Bike(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    image = db.Column(db.String(120), nullable=False)
    link = db.Column(db.String(120), nullable=False)
    terrain = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<Bike {self.title}>'
     
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "image": self.image,
            "link": self.link,
            "terrain": self.terrain,
            "description": self.description,
        }