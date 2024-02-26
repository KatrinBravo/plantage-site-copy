export default function Product(props) {
    return (
        <div className="sectionProduct">
            <div className="littleSectionProduct">
                <div>
                    <img src={props.img} className="imgProduct" alt="Picture" />
                    <p className="productText"><b>{props.name}</b></p>
                    <p className="textNews">{props.discription}</p>
                    <p className="productText"><b>{props.price}</b></p>
                    <hr className="horisontal-line" />
                    <button className="productButton">Lägg i varukorg</button>
                    <br />
                    <br />
                    <p>Hemleverans           Hämta i butik</p>
                </div>
            </div>
        </div>

    )
}