import useStore from "../../store/AppContext.jsx";
import { useNavigate } from "react-router-dom";

const ProtectedPath = ({children}) => {

    const {store}=useStore();
    const {isUserLogged} = store;

    const navigate = useNavigate();

    if(!isUserLogged){
        navigate("/")
        return null; // Se puede devolver pantalla de carga
    };

    return (children)

}

export default ProtectedPath;   