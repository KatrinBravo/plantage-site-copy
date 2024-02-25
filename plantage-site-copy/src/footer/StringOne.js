export default function StringOne() {
    return (
        <div className="footerColor">
            <div className="InstTextBox">
                <div className="InstText">
                    <p>Alltid hos oss på Plantagen:</p>
                    <ul class="list2">
                        <a href="" target="_blank" className="linkUl">
                            <li className="li2"><b>Stort sortiment av växter och tillbehör</b></li>
                        </a>
                        <a href="" target="_blank" className="linkUl">
                            <li className="li2"><b>Växtköp med garanti</b></li>
                        </a>
                        <a href="" target="_blank" className="linkUl">
                            <li className="li2"><b>Beställ & hämta inom 24 timmar</b></li>
                        </a>
                    </ul>
                </div>
            </div>
            <hr className="horisontal-line" />
            <div className="footerColor">
                <div className="personTipsText">
                    <div className="content">
                        <div className="FoterMedia">
                            <img src={require("../img/facebook.png")} alt="Facebook" className="FooterImg" />
                            <img src={require("../img/instagram.png")} alt="Instagram" className="FooterImg" />
                            <img src={require("../img/YouTube.png")} alt="YouTube" className="FooterImg" />
                        </div>
                        <div>
                            <a className="menuLink" href="#" target="_blank">
                                <img src="https://www.plantagen.se/on/demandware.static/Sites-PlantagenSE-Site/-/default/dw724a0f42/images/plantagen.svg"
                                    alt="Logo" href="#" />
                            </a>
                        </div>
                        <br />
                        <p><b>Bli medlem i vår kundklubb</b></p>
                        <p>Du får 2% bonus på alla dina köp och exklusiva förmåner. Helt gratis såklart!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}