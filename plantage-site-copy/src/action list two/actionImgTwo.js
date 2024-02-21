export default function ActionStringImg() {
    return (
        <div className="otherActions">
            <div className="otherActions2">
                <a href=""><img src={require("../img/furniture.jpg")} alt="furniture" className="imgString1" />
                    <div className="bottom-left"><b>Äkta fårskinn</b></div>
                    <div className="top-left">Medlempris 30%</div>
                </a>
            </div>
            <div className="otherActions2">
                <a href=""><img src={require("../img/tulips.jpg")} alt="tulips" className="imgString1" />
                    <div className="bottom-left"><b>Tulpaner</b></div>
                    <div className="top-left">2 för 99,90</div>
                    <div className="top-left-two">59,90/st (7-pack)</div>
                </a>
            </div>
            <div className="otherActions2">
                <a href="" className="linksInImg">
                    <h2 className="textImg1"><b>Erbjudanden och <br /> kampanjer</b><br /><br />Veckans bästa deals hittar du har!</h2>
                </a>
            </div>
        </div>
    )

}