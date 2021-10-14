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
        let first25 = splitNode.slice(0, 25);
        console.log(first25);

        // find first index of word and actual word that end in uppercase letter and
        // are preceded by lowercase letter
        const regExp = new RegExp(/\w[a-z][A-Z]/);
        const potentialImproperWords = first25.filter(element => element.match(regExp))
        const potentialImproperWord = potentialImproperWords.filter(element => {
            if (element !== "JavaScript" && element !== "PostgreSQL") {
                return element
            }
        })
        
        const improperWordIndex = first25.findIndex(element => element.match(potentialImproperWord))

        console.log(potentialImproperWord)
        console.log(improperWordIndex)

        let improperWord;

        if (improperWordIndex !== 0) {
            const capLetterRegex = new RegExp(/[A-Z]/);
            const word = potentialImproperWord[0].split("");
            const capLetter = word.find(element => element.match(capLetterRegex))
            const capLetterIndex = word.findIndex(element => element.match(capLetter))
            const splicedWord = word.slice([capLetterIndex])
            const correctWord = splicedWord.join("");
            
            console.log("to string: ", word)
            console.log("cap letter: ", capLetter)
            console.log("capLetterIndex: ", capLetterIndex)
            console.log("correct word: ", correctWord)

            const captionGone = splitNode.splice([improperWordIndex + 1], maxLength);

            captionGone.splice(0, 0, correctWord);
            text = captionGone.join(" ")

            // return the text content parred down
            return text.length > maxLength ?
                text.slice(startingPoint, maxLength) :
                text

        } else {
            return text.length > maxLength ?
                text.slice(startingPoint, maxLength) :
                text
        }

        // ensure any found improper word starts with a lowercase letter (e.g., "CodeX" is proper)
        // if (potentialImproperWord) {
        //     const improperWordSplit = potentialImproperWord.split("")
        //     if (improperWordSplit[0] === improperWordSplit[0].toLowerCase()) {
        //         improperWord = potentialImproperWord
        //     }
        // }

        // if such a word is found
    //     if (improperWord) {
            
    //         // split the word, save the last uppercase letter
    //         const improperWordSplit = improperWord.split("")
    //         const lastOkLetter = improperWordSplit[improperWordSplit.findIndex(element => element.match(new RegExp(/[A-Z]/)))];

    //         // remove everything (including the found word) that comes before the found word
    //         const captionGone = splitNode.splice([improperWordIndex + 1], maxLength);
            
    //         // add back in the saved uppercase letter, join the words back into string of text
    //         captionGone.splice(0, 0, lastOkLetter);
    //         text = captionGone.join(" ")

    //         // return the text content parred down
    //         return text.length > maxLength ?
    //             text.slice(startingPoint, maxLength) :
    //             text
        
    //     // if no such word is found that ends in uppercase letter and preceded by lowercase letter
    //     // just return parred-down text content
    //     } else {
    //         return text.length > maxLength ?
    //             text.slice(startingPoint, maxLength) :
    //             text
    //     }
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