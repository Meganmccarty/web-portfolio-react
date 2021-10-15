import { Card, Icon, Image } from 'semantic-ui-react'

function ProjectCard({ id, name, image, text, url, demo, likes, tags, onPatch }) {

    function handleClick(e) {
        let likesToPatch = parseInt(e.target.nextSibling.innerText, 10) + 1;
        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'likes': parseInt(likesToPatch)
            })
        }
        fetch(`http://localhost:9393/projects/${id}`, configObj)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                onPatch(data)
            })
            .catch(error => console.log(error))
    }

    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>{text}</Card.Description>
                <Card.Meta>
                    <div className="tag-list">
                        {tags.map(tag => {
                            return (
                                <span key={tag.name} className="tag">{tag.name}</span>
                            )
                        })}
                    </div>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='like' onClick={(e) => handleClick(e)} />
                <span>{likes}</span>
                <a href={url}><button className="ui button blue-button">Live Website</button></a>
                {demo ? <a href={demo}><button className="ui button blue-button">Demo</button></a> : null}
            </Card.Content>
        </Card>
    )
}

export default ProjectCard;