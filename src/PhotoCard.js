import Photo from './images/mccarty-photo.jpeg';

function PhotoCard() {
    return (
        <section>
            <img src={Photo}></img>
            <h1>Megan McCarty</h1>
            <h2>Software Engineer</h2>
        </section>
    )
}

export default PhotoCard;