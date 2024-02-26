import Product from "./product";
import img1 from "../img/product1.jpg";
import img2 from "../img/product2.jpg";
import img3 from "../img/product3.jpg";
import img4 from "../img/product4.jpg";
import img5 from "../img/product5.jpg";

export default function Text() {
    return (
        <div className="Product">
            <a href="" className="LinkProduct"><b>Förgull hemmet med gröna växter</b></a>
            <br />
            <Product
                img={img1}
                name="Guldpalm"
                discription="Höjd 120 cm, Grön"
                price="399:-"
            />
            <Product
                img={img2}
                name="Fiolfikus"
                discription="Höjd 100 cm, Grön"
                price="799:-"
            />
            <Product
                img={img3}
                name="Banddracena 'Janet Lind'"
                discription="Höjd 100 cm, Grön"
                price="799:-"
            />
            <Product
                img={img4}
                name="Jättepalmlilja"
                discription="Höjd 45 cm, Grön"
                price="499:-"
            />
            <Product
                img={img5}
                name="Murgröna långa rankor"
                discription="Höjd 80 cm, Grön"
                price="99.90"
            />
        </div>
    )
}