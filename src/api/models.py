from flask_sqlalchemy import SQLAlchemy
import bcrypt

db = SQLAlchemy()


favorites_parts = db.Table('favorites_parts',
                           db.Column('user_id',
                                     db.Integer,
                                     db.ForeignKey('user.id'), primary_key=True), db.Column('bike_part_id', db.Integer, db.ForeignKey('bike_part.id'), primary_key=True))


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    lastname = db.Column(db.String, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    size = db.Column(db.String, nullable=False)
    weight = db.Column(db.String, nullable=False)
    bike_type = db.Column(db.String, nullable=False)
    password = db.Column(db.String, unique=False, nullable=False)
    favorites = db.relationship(
        'BikePart', backref="users", secondary=favorites_parts)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def verify(self, password):
        # comprobar si la contraseña es correcta
        hash_password = bcrypt.hashpw(password, self.password)
        return self.password == hash_password

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "size": self.size,
            "weight": self.weight,
            "email": self.email,
            "bike type": self.bike_type,
            "favorites": [f'{bike_part}' for bike_part in self.favorites],
        }
    
class BikePart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    part = db.Column(db.String, nullable=False)
    terrain = db.Column(db.String, nullable=False)
    size = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    link = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'<BikePart {self.part}>'

    def serialize(self):
        return {
            "id": self.id,
            "part": self.part,
            "terrain": self.terrain,
            "size": self.size,
            "title": self.title,
            "image": self.image,
            "link": self.link,
        }
    
class Bike(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    link = db.Column(db.String, nullable=False)
    terrain = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'<Bike {self.title}>'
     
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "image": self.image,
            "link": self.link,
            "terrain": self.terrain,
        }