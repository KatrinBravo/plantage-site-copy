import NewsSections from "./InformationProps"
import tulipsNews from "../img/tulipsNews.jpg"
import PlantsNews from "../img/PlantsNews.jpg"
import HouseNews from "../img/HouseNews.jpg"
import PodsNews from "../img/PodsNews.jpg"


export default function Information(image, linkURl, text1, text2, text3) {
    return (
        <>
            <NewsSections
                img={tulipsNews}
                linkURl={"https://www.plantagen.se/snittblommor-sa-lyckas-du.html"}
                text1="Snittblommor – så lyckas du"
                text2="Snittblommor är en uppskattad gåva - så här lyckas du med skötsel och dekoration."
                text3="Snittblommor" />
            <NewsSections
                img={PlantsNews}
                linkURl={"https://www.plantagen.se/vaxtbelysning-ger-gronska-aret-runt.html"}
                text1="Belysning Växtbelysning – fakta och tips om växtljus och växtlampor"
                text2="Ge dina växter extra kraft när det inte finns tillgång till naturligt ljus med hjälp av rätt växtbelysning."
                text3="Belysning" />
            <NewsSections
                img={HouseNews}
                linkURl={"https://www.plantagen.se/odlingskalender-02-februari.html"}
                text1="Odlingskalender | Februari"
                text2="Vintern är i full gång. För odlaren är detta en lugnare period, men för den som vill finns det alltid saker att göra!"
                text3="Odlingskalender" />
            <NewsSections
                img={PodsNews}
                linkURl={"https://www.plantagen.se/kom-igang-med-hydroponisk-odling.html"}
                text1="Kom igång med hydroponisk odling"
                text2="Att odla hydroponisk innebär att du odlar utan jord och istället använder dig av vatten och näring som tillförs till plantorna."
                text3="Odla inomhus" />

        </>
    )
}