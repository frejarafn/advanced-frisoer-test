// Nadia
import "../styles/SwitchKnap.css";

export default function SwitchKnap() {

    return ( 
        <div>
                <label className="toggle">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                    <span className="labels" data-on="ON" data-off="OFF"></span>
                </label>
        </div>
        
    )
}

                