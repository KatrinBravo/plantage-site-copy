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
                        <br />
                        <button className="buttonLogo"><b>Bli medlem / Logga In</b></button>
                        <br /><br /><br />
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="footerSection">
                    <hr className="horisontal-line" />
                    <ul className="footerListUL"><b>Om Plantagen</b></ul>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Om Plantagen</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Om produkterna</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Hållbarhet</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Lediga jobb</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Pressrum</a></li>
                </div>
            </div>
            <div className="section">
                <div className="footerSection">
                    <hr className="horisontal-line" />
                    <ul className="footerListUL"><b>Kundservice</b></ul>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Kontakta oss</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Handla online</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Frågor & svar</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Kundklubb</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Presentkortssaldo</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Önskelista</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Kontrollera din order</a></li>
                </div>
            </div>
            <div className="section">
                <div className="footerSection">
                    <hr className="horisontal-line" />
                    <ul className="footerListUL"><b>Butiker & öppettider</b></ul>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Butiker & Öppettider</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Om webbplatsen</a></li>
                </div>
            </div>
            <div className="section">
                <div className="footerSection">
                    <hr className="horisontal-line" />
                    <ul className="footerListUL"><b>Garantier & villkor</b></ul>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Garantier</a></li>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Köpvillkor</a></li>
                </div>
            </div>
            <div className="section">
                <div className="footerSection">
                    <hr className="horisontal-line" />
                    <ul className="footerListUL"><b>Företag</b></ul>
                    <li className="footerList"><a className="footerLink" href="#" target="_blank">Plantagen Företag</a></li>
                </div>
            </div>
            <hr className="horisontal-line" />
            <div className="footerColor">
                <div className="personTipsText">
                    <p className="txtFooter">På Plantagen finns allt som behövs för ett växande liv. Hos oss kan du hitta
                        <a href="#" target="_blank"> inneväxter</a>,
                        <a href="#" target="_blank"> uteväxter</a>,
                        <a href="#" target="_blank"> möbler</a>,
                        <a href="#" target="_blank"> redskap</a> och
                        <a href="#" target="_blank"> inspiration till nästa projekt</a>. Med 120 butiker runt om i Sverige, Norge och Finland och en e-handel som alltid har öppet hjälper vi dig att komma närmare naturens positiva kraft. Välkommen till Nordens härligaste växthus.
                    </p>
                </div>
            </div>
            <hr className="horisontal-line" />
            <div className="InstTextBox">
                <div className="InstText">
                    <div className="FoterMedia">
                        <img src={require("../img/Klarna.png")} alt="Klarna" className="FooterImgPay" />
                        <img src={require("../img/Visa.png")} alt="Visa" className="FooterImgPay" />
                        <img src={require("../img/Mastercard.jpg")} alt="MasterCard" className="FooterImgPay" />
                        <img src={require("../img/AmericanExpress.png")} alt="AmericanExpres" className="FooterImgPay" />
                        <img src={require("../img/postnord.png")} alt="PostNord" className="FooterImgPay" />
                        <img src={require("../img/swish.png")} alt="Swish" className="FooterImgPay" />
                    </div>
                    <hr className="horisontal-line" />
                    <div className="FoterMedia">
                        <span><a className="footerList">Cookie-inställningar</a></span>
                        <span><a className="footerList">Integritetspolicy</a></span>
                        <span><a className="footerList">© Plantagen AB 2024</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}