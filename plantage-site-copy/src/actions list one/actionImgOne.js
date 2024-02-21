export default function ActionImgOne() {
    return (
        <a href="#" target="_blank" className="link">
            <section className="actionSeedsBox">
                <div><img src={require("../img/seeds.jpg")} alt="actionSeeds" className="actionSeeds" />
                </div>
                <div className="actionText">
                    <p className="actionTextP1">Över 1500 olika sorter</p>
                    <h2 className="actionTextP2">Så ett frö och se det växa!</h2>
                    <p>Erbjudandet gäller ej Bamse-fröer och Claus Dalbu-fröer</p>
                    <a href="#" target="_blank" className="linkButton"><button className="actionButton">5 för 4 på
                        fröpåsar</button></a>
                </div>
            </section>
        </a>
    );
};