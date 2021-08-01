import { useEffect, useState } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react'

function Projects() {
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
                                    <span key={tag.name} className="tag">{tag.name}</span>
                                )
                            })}
                        </div>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='like'/>
                    <span>{project.likes}</span>
                    <a href={project.url}><Button className="blue-button">Live Website</Button></a>
                </Card.Content>
            </Card>
        )
    })
    
    return (
        <>
            <h1 id="Projects">Projects</h1>
            <Card.Group centered fluid="true">
                {displayProjects}
            </Card.Group>
        </>
    )
}

export default Projects;