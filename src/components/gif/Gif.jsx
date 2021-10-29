
function Gif({
    src,
    link
}) {
    return (
        <div>
            <a href={link} target="_blank">
                <img src={src} />
            </a>
        </div>
    )
}

export default Gif;
