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
                <Overskrift overskrift="Milkshake" />
            </div>
            <p>
                Går du op i omtanke for miljøet, men ikke vil gå på kompromis med dit hår.
                <br></br>
                <br></br>
                Milkshakes produkter er fremstillet af naturlige ingredienser som styrker dit hår og sikre et glansfuldt look.
            </p>

            <img className="produkt" src="/images/spa2.jpg" alt="Fejl 404"></img>



            <div>
                <Overskrift overskrift="L'Oreal " />
            </div>
            <p>
                Hvis du går op i den nyeste beauty teknologi, hvor produkterne har fokus på at finde en løsning til netop din hårtype uden at skulle gå på kompromis med miljøet.
            </p>

            <img className="produkt" src="/images/spa2.jpg" alt="Fejl 404"></img>



        </section>
    )
}