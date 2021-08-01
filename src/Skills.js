import { useEffect, useState } from 'react';

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

    console.log(skills);

    const displaySkills = skills.map(skill => {
        return (
            <SkillCard
                key={skill.id}
                id={skill.id}
                name={skill.name}
                image={skill.image}
            />
        )
    })

    return (
        <>
            <h1 id="Skills">Skills</h1>
            <div class="skills">
                {displaySkills}
            </div>
        </>
    )
}

export default Skills;