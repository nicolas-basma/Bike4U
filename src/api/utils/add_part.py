from api.models import Parts, db
from flask import jsonify


# recorremos el array de partes y lo vamos agregando a la base de datos
def add_part(parts):
    for part in parts:
        new_part = Parts(
            model=part["model"],
            description=part["description"],
            link=part["link"],
            size=part["size"]
        )
        print(new_part.serialize())
        db.session.add(new_part)
        db.session.commit()
    return jsonify({"msg": "parte agregada"}), 200
