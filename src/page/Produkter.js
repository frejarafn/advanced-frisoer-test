// Freja

import "../styles/Produkter.css";
import Header from "../components/headers/HeaderProdukter";
import Underskrift from '../components/Underskrift';
import Navbar from "../components/Navbar";

export default function Produkter() {
    return (
        <section>
            <Navbar />
            <Header />
            <br></br>
            <br></br>
            <p className="broedtekst">
                Jeg forhandler professionelle hårprodukter til forbrugervenlige priser.
            </p>
            <br></br>
            <br></br>
            <div>
                <Underskrift underskrift="Milkshake" />
            </div>
            <p className="broedtekst">
                Går du op i omtanke for miljøet, men ikke vil gå på kompromis med dit
                hår.
                <br></br>
                <br></br>
                Milkshakes produkter er fremstillet af naturlige ingredienser som
                styrker dit hår og sikre et glansfuldt look.
            </p>

            <img className="produkt" src="/images/spa2.jpg" alt="Fejl 404"></img>

            <div>
                <Underskrift underskrift="L'Oreal " />
            </div>
            <p className="broedtekst">
                Hvis du går op i den nyeste beauty teknologi, hvor produkterne har fokus
                på at finde en løsning til netop din hårtype uden at skulle gå på
                kompromis med miljøet.
            </p>

            <img className="produkt" src="/images/spa2.jpg" alt="Fejl 404"></img>
        </section>
    );
}
