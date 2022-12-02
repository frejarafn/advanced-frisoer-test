//freja

import { useNavigate } from "react-router-dom";
import '../styles/Tilbageknap.css';
import { IoIosArrowBack } from 'react-icons/io';

// Her ses en onClick funktion, hvor navigate bruges til at navigere 1 side tilbage når man trykker på billedet
export const Tilbageknap = () => {
    let navigate = useNavigate();
    return (
        <>
            <button className="backbutton" onClick={() => navigate(-1)}>
                <IoIosArrowBack className="headerback"></IoIosArrowBack>
            </button>
        </>
    );
};