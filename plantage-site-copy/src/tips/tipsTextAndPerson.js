export default function Tips() {
    return (
        <div className="personTipsText">
            <div className="content">
                <h1 classNameName="text1"><b>Tips och råd</b></h1>
                <p classNameName="text2"> Vi ger dig tipsen du behöver för att lyckas. Läs våra guider och få hjälp av våra trädgårdsmästare och växtkunniga.</p>
                <img src={require("../img/tipsPersons.png")} alt="person" classNameName="imgTips" />
                <br />
                <br />
                <button className="personTipsButton">Fråga våra trädgårdsmästare</button>
            </div>
        </div>
    )
}