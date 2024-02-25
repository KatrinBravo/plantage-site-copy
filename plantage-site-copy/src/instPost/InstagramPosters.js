export default function InstPost(props) {
    return (
        <div className="sectionInst">
            <div className="littleSectionInst">
                <a href={props.linkURl} target="_blank" className="">
                    <img src={props.img} alt="InstagramPhoto" className="imgInst" />
                    <div class="overlay">
                        <p>{props.text}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}