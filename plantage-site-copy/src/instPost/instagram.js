import InstPost from "./InstagramPosters";
import InstText from "./instText"
import InstBut from "./instBut";
import img1 from "../img/inst1.png"
import img2 from "../img/inst2.png"
import img3 from "../img/inst3.png"
import img4 from "../img/inst4.png"
import img5 from "../img/inst5.png"
import img6 from "../img/inst6.png"

export default function Instagram(img, linkURl, text) {
    return (
        <>
            <InstText />
            <InstPost
                img={img1}
                linkURl={"https://www.instagram.com/p/CrQzFwINKIw/?img_index=1"}
                text="@indivisualstyle"
            />
            <InstPost
                img={img2}
                linkURl={"https://www.instagram.com/p/Coc1mMbtTv7/?img_index=1"}
                text="@homediyhomestyle"
            />
            <InstPost
                img={img3}
                linkURl={"https://www.instagram.com/p/CorzPccIph5/"}
                text="@houseofhala_"
            />
            <InstPost
                img={img4}
                linkURl={"https://www.instagram.com/p/CqR1MAdK32C/"}
                text="@mariannehagakinder_"
            />
            <InstPost
                img={img5}
                linkURl={"https://www.instagram.com/p/CyYO9_DrR4G/"}
                text="@elisesinterior"
            />
            <InstPost
                img={img6}
                linkURl={"https://www.instagram.com/p/Cv__OXPt-TA/?img_index=1"}
                text="@daniel_holmberg"
            />
            <InstBut />
        </>
    );
};