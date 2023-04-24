from flask_sqlalchemy import SQLAlchemy
import bcrypt

db = SQLAlchemy()


favorites_parts = db.Table('favorites_parts',
                           db.Column('user_id',
                                     db.Integer,
                                     db.ForeignKey('user.id'), primary_key=True), db.Column('parts_id', db.Integer, db.ForeignKey('parts.id'), primary_key=True))


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String, unique=False, nullable=False)
    favorites = db.relationship(
        'Parts', backref="users", secondary=favorites_parts)
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
            "email": self.email,
            "favorites": [f'{parts}' for parts in self.favorites],
        }


class Parts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    model = db.Column(db.String, unique=True, nullable=False)
    marca = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    category = db.Column(db.String, nullable=False)
    part = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'<Parts {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "model": self.model,
            "marca": self.marca,
            "description": self.description,
            "category": self.category,
            "part": self.part,
        }
