export default function ActionImg() {
    return (
        <a href="#" target="_blank" className="link">
            <section className="actionSeedsBox">
                <div><img src={require("../img/fireplace.jpg")} alt="openFire" className="actionSeeds" />
                </div>
                <div className="actionText">
                    <h2 className="actionTextP2">Björkved med nöjd kund-garanti!</h2>
                    <p>"99,90/st vid köp av 5 eller fler</p>
                    <a href="#" target="_blank" className="linkButton"><button className="actionButton">Ved och tillbehör</button></a>
                </div>
            </section>
        </a>
    );
};