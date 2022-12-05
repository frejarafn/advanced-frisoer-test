// Freja

import "../styles/Produkter.css";
import Header from "../components/Header";
import Overskrift from "../components/Overskrift";

export default function Produkter() {

    return (
        <section>
            <Header />

            <p>
                Jeg forhandler professionelle hårprodukter til forbrugervenlige priser.
            </p>
            <div>
                <Overskrift overskrift="Kontakt salonen" />
            </div>



        </section>
    )
}