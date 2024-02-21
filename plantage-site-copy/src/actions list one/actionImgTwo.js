export default function ActionImgTwo() {
    return (
        <><div className="otherActions">
            <div className="otherActions2">
                <a href=""><img src={require("../img/utvalda.jpg")} alt="utvalda" className="imgString1" />
                    <div className="bottom-left"><b>Utvalda odlingsprodukter</b></div>
                    <div className="top-left">Medlempris 30%</div>
                </a>
            </div>
            <div className="otherActions2">
                <a href=""><img src={require("../img/vase.jpg")} alt="vase" className="imgString1" />
                    <div className="bottom-left"><b>Vaser</b></div>
                    <div className="top-left">50%</div>
                </a>
            </div>
            <div className="otherActions2">
                <a href=""><img src={require("../img/snittblommor.jpg")} alt="snittblommor" className="imgString1" /></a>
                <div className="bottom-left"><b>Snittblommor</b></div>
                <div className="top-left">3 för 2</div>
            </div>
        </div><div className="otherActions">
                <div className="otherActions2">
                    <a href=""><img src={require("../img/lyktor och ljusstakar.jpg")} alt="lyktor och ljusstakar" className="imgString2" />
                        <div className="bottom-left"><b>Lyktor och ljusstakar</b>
                            <p className="imgText">Gäller ej påskprodukter</p>
                        </div>
                    </a>
                </div>
                <div className="otherActions2">
                    <a href=""><img src={require("../img/ljus.jpg")} alt="ljus" className="imgString2" />
                        <div className="bottom-left"><b>Ljus</b>
                            <p className="imgText">Gäller ej gravljus eller påskljus</p>
                        </div>
                    </a>
                </div>
            </div></>
    )
}