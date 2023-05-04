import React from "react";
import MyCarousel from "../../component/MyCarousel/MyCarousel.jsx";
import useStore from "../../store/AppContext.jsx";

function ProductView() {
  const { store } = useStore();
  const { carouselHomePhotos } = store;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src="https://actionbmxshop.net/12489-large_default/bicicleta-fairdale-weekender-archer-2023.jpg" />
        </div>
        <div className="col">
          <h1>BICICLETA FAIRDALE WEEKENDER ARCHER 2023 ROJO</h1>
          <h5>$1.599</h5>
          <div className="text-start">
            BICICLETA FAIRDALE WEEKENDER ARCHER 2023 ROJO CORAL MATE Cuadro:
            100% Chromoly, disco, con soportes para cremallera y guardabarros
            (compatible M/L/XL 700c) Horquilla: 100% Chromoly. Tubo de direccion
            mecanizado de una pieza Manillar: Fairdale Archer v3, Aluminio
            Potencia: 70mm, Aluminio forjado (60mm en XS) Juego de dirección:
            FSA, Integrado sellado, 45º/45º Palanca de freno: Promax XL-91
            Freno: Promax DSK-717 Puños: Fairdale Swan Sillín Sillín Fairdale
            Logo Tija de sillín: Microajuste, 27.2mm Abrazadera de sillín:
            Fairdale, 30mm Bielas: FSA Vero Pro 1X NW (XS,S =165mm, M=170mm,
            L,XL=175mm) Plato: 42t Narrow-Wide Piezas BB: FSA Pedales: Odyssey
            Twisted PC Llantas: 27.5"/650b, 32-Hole, Aluminio, Doble Pared,
            Pinned Rim, Compatible Tubeless Buje delantero: Rodamientos
            sellados, 32-H, Alum. Freno de disco, con eje de pinchos Allen Buje
            trasero: Rodamientos sellados, 32-H, carcasa de alum. Shell, montaje
            del freno de disco, con eje de pinchos Allen Neumáticos: Continental
            Dbl Fighter III, 27.5"/650b x 2.0 (27.5" x 1.65" Maxxis Overdrive en
            XS/S) Cadena KMC X9 Casete: MicroShift CS-H093, 11-42T,
            9-Velocidades R. Palanca de cambio: MicroShift Advent Trigger, 9
            velocidades R. Desviador: MicroShift Advent, 9-Velocidades Cable de
            cambio: Fairdale GEOMETRÍA X-Pequeña: 126 - 160 cm Pequeña: 158 -
            170 cm Mediana: 170 - 180 cm Grande 180 - 186 cm X-Grande 186 cm +
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <MyCarousel photos={carouselHomePhotos} />
        </div>
      </div>
    </div>
  );
}

export default ProductView;
