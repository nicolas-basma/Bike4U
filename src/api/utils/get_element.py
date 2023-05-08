from api.models import BikePart, Bike


#funcion para obtener bicicleras de diferentes tipos de terreno y tamaños, recibe como parametros el tipo de terreno y el tamaño
def get_bike(terrain):
    bikes = []
    bike = Bike.query.filter_by(terrain=terrain).all()
    for b in bike:
        bikes.append(b.serialize())
    return bikes

#funcion para obtener partes de bicicletas de diferentes tipos de terreno y tamaños, recibe como parametros el tipo de parte, el tipo de terreno y el tamaño

def get_part(part, terrain, size):
    parts = []
    element = BikePart.query.filter_by(part=part, terrain=terrain, size=size).all()
    for p in element:
        parts.append(p.serialize())
    return parts