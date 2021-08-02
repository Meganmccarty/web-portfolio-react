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
        
        // split text content into array of words
        let splitNode = text.split(" ");

        // find first index of word and actual word that end in uppercase letter and
        // are preceded by lowercase letter
        const regExp = new RegExp(/[a-z][A-Z]\b/)
        const improperWordIndex = splitNode.findIndex(element => element.match(regExp))
        const improperWord = splitNode.find(element => element.match(regExp))
        
        // if such a word is found
        if (improperWord) {
            
            // split the word, save the last uppercase letter
            const improperWordSplit = improperWord.split("")
            const lastOkLetter = improperWordSplit[improperWordSplit.length - 1]

            // remove everything (including the found word) that comes before the found word
            const captionGone = splitNode.splice([improperWordIndex + 1], maxLength);
            
            // add back in the saved uppercase letter, join the words back into string of text
            captionGone.splice(0, 0, lastOkLetter);
            text = captionGone.join(" ")

            // return the text content parred down
            return text.length > maxLength ?
                text.slice(startingPoint, maxLength) :
                text
        
        // if no such word is found that ends in uppercase letter and preceded by lowercase letter
        // just return parred-down text content
        } else {
            return text.length > maxLength ?
                text.slice(startingPoint, maxLength) :
                text
        }
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