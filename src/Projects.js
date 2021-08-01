import { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react'

import ProjectCard from './ProjectCard';

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:9393/projects')
            .then(response => response.json())
            .then(data => {
                console.log(data.projects)
                setProjects(data.projects)
            })
            .catch(error => console.log(error))
    }, [])

    function handlePatch(updatedProject) {
        const newProjectArray = projects.map(project => {
            if (project.id === updatedProject.project.id) {
                return updatedProject.project
            } else {
                return project
            }
        })
        console.log(newProjectArray);
        setProjects(newProjectArray);
    }

    const displayProjects = projects.map(project => {
        return (
            <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                image={project.image}
                text={project.text}
                url={project.url}
                likes={project.likes}
                tags={project.tags}
                onPatch={handlePatch}
            />
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