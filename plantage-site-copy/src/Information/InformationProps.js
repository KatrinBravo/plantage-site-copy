export default function NewsSections(props) {
    return (
        <div className="section">
            <div className="littleSection">
                <img src={props.img} className="imgNews" alt="Picture" />
                <a href={props.linkURl} target="_blank" className="linkNews">
                    <p className="linkNews"><b>{props.text1}</b></p>
                </a>
                <p className="linkNews">{props.text2}</p>
                <p className="bottom-left-text">{props.text3}</p>
            </div>
        </div>

    );
}