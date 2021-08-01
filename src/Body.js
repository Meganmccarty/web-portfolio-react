import { useEffect, useState } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react'

function Body() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:9393/projects')
            .then(response => response.json())
            .then(data => setProjects(data.projects))
            .catch(error => console.log(error))
    }, [])

    const displayProjects = projects.map(project => {
        return (
            <Card key={project.id}>
                <Image src={project.image} />
                <Card.Content>
                    <Card.Header>{project.name}</Card.Header>
                    <Card.Description>{project.text}</Card.Description>
                    <Card.Meta>
                        <div className="tag-list">
                            {project.tags.map(tag => {
                                return (

                                    <span className="tag">{tag.name}</span>

                                )
                            })}
                        </div>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='like' />
                        {project.likes}
                    </a>
                    <a href={project.url}><Button className="blue-button">Live Website</Button></a>
                </Card.Content>
            </Card>
        )
    })

    return (
        <main>
            <Card.Group centered fluid="true">
                {displayProjects}
            </Card.Group>
        </main>
    )
}

export default Body;