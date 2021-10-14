import { Card, Image } from 'semantic-ui-react'
import moment from 'moment';

function BlogCard({ title, author, content, categories, date, image, url }) {

    // Below 2 functions adapted from https://codepen.io/Konrad29/pen/ZoQRoz by 
    // KoDar: https://medium.com/@KonradDaWo/how-to-display-medium-posts-on-a-website-with-plain-vanilla-js-basic-api-usage-example-865507848c2
    function toText(node) {
        let tag = document.createElement('div')
        tag.innerHTML = node
        node = tag.innerText
        return node
    }

    // the function below pars down text content so the entire blog post isn't shown
    // it also removes the image caption if a post starts with an image
    function shortenText(text, startingPoint, maxLength) {

        // split text content into array of words, grab first 25 words
        let splitNode = text.split(" ");
        let first25 = splitNode.slice(0, 25);

        // bad word and bad word's index
        let improperWord = findBadWord();
        let improperWordIndex = first25.findIndex(word => word.match(improperWord));

        // find the bad word
        function findBadWord() {
            const badWordRegex = new RegExp(/\w[a-z][A-Z]/);
            const improperWords = first25.filter(word => word.match(badWordRegex));
            const improperWord = improperWords.filter(word =>
                (word !== "JavaScript" && word !== "PostgreSQL" ? word : null)
            );

            return improperWord;
        };

        // if a bad word exists, remove the words preceeding it (the image caption)
        if (improperWordIndex !== 0) {
            const capLetterRegex = new RegExp(/[A-Z]/);

            const word = improperWord[0].split("");
            const capLetter = word.find(el => el.match(capLetterRegex));
            const capLetterIndex = word.findIndex(el => el.match(capLetter));
            const correctWord = word.slice([capLetterIndex]).join("");

            const captionGone = splitNode.splice([improperWordIndex + 1], maxLength);

            captionGone.splice(0, 0, correctWord);
            text = captionGone.join(" ");
        };

        // return the text content parred down
        return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
    }

    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author} – {moment(date).fromNow()}</span>
                </Card.Meta>
                <Card.Description>
                    <p>{shortenText(toText(content), 0, 300)}...</p>
                </Card.Description>
                <Card.Meta>
                    <div className="tag-list">
                        {categories.map(category => {
                            return (
                                <span key={category} className="tag">{category}</span>
                            )
                        })}
                    </div>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a href={url}><button className="ui button blue-button">Read More</button></a>
            </Card.Content>
        </Card>
    )
}

export default BlogCard;