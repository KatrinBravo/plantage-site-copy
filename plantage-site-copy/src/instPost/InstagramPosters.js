export default function InstPost(props) {
    return (
        <div className="">
            <div>
                <a href={props.linkURl} target="_blank" className="">
                    <img src={props.img} alt="InstagramPhoto" className="" />
                </a>
            </div>
        </div>
    )
}