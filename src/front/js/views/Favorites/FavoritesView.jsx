import React, { useEffect, useState } from "react";
import useStore from "../../store/AppContext.jsx";
import BikesCards from "../../component/BikesCards/BikesCards.jsx";
import { deleteFavoriteBike, deleteFavoritePart, getFavorites } from "../../utils/fetchFavorites.js";

function FavoritesView() {
  const {store} = useStore();
  const { userInfo } = store;
  const [userFavorites, setUserFavorites] = useState([]);
  const {favorites} = userFavorites;
  const bikes = favorites ? favorites.bikes : null
  const parts = favorites ? favorites.parts : null


  const favoritos = async () => {
    const listFavorites = await getFavorites(userInfo.id);
    setUserFavorites(listFavorites);
  };
  useEffect (() => {
    if (userInfo) {
      favoritos();
    }
  }, [userInfo, bikes, parts]);

  const handleDeleteFavBike = async (id) => {
    deleteFavoriteBike(userInfo.id, id);
  }
  const handleDeleteFavPart = async (id) => {
    deleteFavoritePart(userInfo.id, id);
  }

  const myRandom = () => {
    return Math.floor(Math.random() * 1000);
  };

  return (
    <>
    <div className="container your-bike">
    <div className="titleCards mt-5 text-center">your bikes</div>
    <div className="d-flex row">{
    bikes ? bikes.map((bike, index) => {
      return (
        <> 
        <div className="col-4" key={bike.id + bike.title + index}>
              <BikesCards
                key={bike.id + bike.title + myRandom()}
                id={bike.id}
                image={bike.image}
                title={bike.title}
                description={bike.description}
                link={bike.link}
              />
            <button className="customizeBikeBtn2"key={bike.id + bike.title + myRandom()} onClick={()=>handleDeleteFavBike(bike.id)}>Quitar</button>
            </div>
            </>
      );
    }) : <div className="container">
        <h1>No tienes favoritos</h1>
      </div>
    }</div>
    <div className="titleCards mt-3 mb-2 text-center">your parts</div>
    <div className="d-flex row">{
      parts ? parts.map((part, index) => {
        return (
          <>
              <div className="col-4" key={part.id + part.title + index}>
                <BikesCards
                  key={part.id + part.title + myRandom()}
                  id={part.id}
                  image={part.image}
                  title={part.title}
                  description={part.description}
                  link={part.link}
                />
                <button className="customizeBikeBtn2" key={part.id + part.title + myRandom()} onClick={()=>handleDeleteFavPart(part.id)}>Quitar</button>
              </div>
              </>
        )
      }) : <div className="container">
        <h1>No tienes favoritos</h1>
      </div>
    }</div>
    </div>
  </>);
}

export default FavoritesView;