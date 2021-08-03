import { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react'

import loadingGIF from './images/loading.gif'
import ProjectCard from './ProjectCard';

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://dry-chamber-04725.herokuapp.com/projects')
            .then(response => response.json())
            .then(data => setProjects(data.projects))
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
            {projects[0] === undefined ?
                <div className="gif-container">
                    <img className="loading-gif" src={loadingGIF} alt="loading GIF"></img>
                </div>
                :
                <Card.Group centered fluid="true">
                    {displayProjects}
                </Card.Group>
            }
        </>
    )
}

export default Projects;