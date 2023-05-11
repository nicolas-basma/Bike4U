import fetchLogin from "./fetchLogin";
import fetchSingup from "./fetchSingup";
import fetchDeleteUser from "./fetcDeleteUser";
import fetchEditUser from "./fetchEditUser";
import fetchGetUserInfo from "./fetchGetUserInfo";
import fetchEditUserPassword from "./fetchEditUserPassword";
import fetchGetAllBikesSpecificTerrain from "./fetchGetAllBikesSpecificTerrain";
import fetchGetBikeByTerrainAndByID  from "./fetchGetBikeByTerrainAndByID";
import fetchGetPartByTypeTerrainAndSize from "./fetchGetPartByTypeTerrainAndSize";
import fetchRestorePassword from "./fetchRestorePassword";

//import { stringify } from 'json5';

const utils ={
    fetchLogin,
    fetchSingup,
    fetchDeleteUser,
    fetchEditUser,
    fetchGetUserInfo,
    fetchEditUserPassword,
    fetchGetAllBikesSpecificTerrain,
    fetchGetBikeByTerrainAndByID,
    fetchGetPartByTypeTerrainAndSize,
    fetchRestorePassword
}

export default utils;