export default function StringTwo() {
    return (

        <nav className="menuString2">
            <div>
                <a className="menuLink" href="#" target="_blank">
                    <img src="https://www.plantagen.se/on/demandware.static/Sites-PlantagenSE-Site/-/default/dw724a0f42/images/plantagen.svg"
                        alt="Logo" href="#" /></a>
            </div>
            <div className="search">
                <input type="text" name="text" className="searchString" placeholder="Testa att söka ..." />
            </div>
            <div className="city">
                <img src={require("../img/house.png")} alt="house" className="menuImg" />
                <div className="cityDropdownBox">
                    <button onclick="dropdownCityContent()" id="cityButton">Stockholm</button>
                    <div id="cityDropdown" className="cityDropdownBox-content">
                        <a href="#" onclick="selectCity('Barcarby')">Barcarby</a>
                        <a href="#" onclick="selectCity('Bromma')">Bromma</a>
                        <a href="#" onclick="selectCity('Enebyberg')">Enebyberg</a>
                        <a href="#" onclick="selectCity('Frescati')">Frescati</a>
                        <a href="#" onclick="selectCity('Hässelby')">Hässelby</a>
                        <a href="#" onclick="selectCity('Kungens Kurva')">Kungens Kurva</a>
                        <a href="#" onclick="selectCity('Länna')">Länna</a>
                        <a href="#" onclick="selectCity('Märsta')">Märsta</a>
                        <a href="#" onclick="selectCity('Sickla')">Sickla</a>
                        <a href="#" onclick="selectCity('Sköndal')">Sköndal</a>
                        <a href="#" onclick="selectCity('Värmdö')">Värmdö</a>
                    </div>
                </div>
                <div className="city">
                    <img src={require("../img/car.png")} alt="car" className="menuImg" />
                    <div className="">
                        <button id="postNum" className="posnumButton">Postnummer</button>
                        <div id="openWin" className="openWin">
                            <div className="openWin-content">
                                <span className="close">&times;</span>
                                <p className="txtOpenWin">Ange postnummer för att se leveransalternativ.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vertical-separator"></div>
                <div className="city">
                    <img src={require("../img/person.png")} alt="person" className="menuImg" />
                    <div className="">
                        <button id="postNum" className="posnumButton">Mina sidor</button>

                    </div>
                </div>
                <div className="city">
                    <img src={require("../img/heart.png")} alt="heart" className="menuImg" />
                    <div className="">
                        <a href="#" target="_blank">
                            <button id="postNum" className="posnumButton"></button>
                        </a>

                    </div>
                </div>
                <div className="city">
                    <img src={require("../img/basket.png")} alt="basket" className="menuImg" />
                    <div className="">

                    </div>
                </div>
            </div>
        </nav>

    );
}