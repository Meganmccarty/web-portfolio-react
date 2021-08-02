import { useEffect, useState } from 'react';

import loadingGIF from './images/loading.gif';
import SkillCard from './SkillCard';

function Skills() {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch('http://localhost:9393/skills')
            .then(response => response.json())
            .then(data => {
                setSkills(data.skills)
            })
            .catch(error => console.log(error))
    }, [])

    const displaySkills = skills.map(skill => {
        return (
            <SkillCard
                key={skill.id}
                name={skill.name}
                image={skill.image}
            />
        )
    })

    return (
        <>
            <h1 id="Skills">Skills</h1>
            {skills[0] === undefined ?
                <div className="gif-container">
                    <img className="loading-gif" src={loadingGIF} alt="loading GIF"></img>
                </div>
                :
                <div className="skills">
                    {displaySkills}
                </div>
            }
        </>
    )
}

export default Skills;