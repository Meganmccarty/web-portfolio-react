import { useEffect, useState } from 'react';

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
            <div key={project.id}>
                <h1>{project.name}</h1>
                <img className="project-image" src={project.image} alt={project.text}></img>
                <h4>{project.text}</h4>
                <a href={project.url}><button>Live Website</button></a>
                <span>Likes: {project.likes}</span>
                {project.tags.map(tag => {
                    return (
                        <div key={tag.id}>
                            <span>{tag.name}</span>
                        </div>
                    )
                })}
            </div>
        )
    })
    
    return (
        <main>
            {displayProjects}
        </main>
    )
}

export default Body;