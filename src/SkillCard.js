function SkillCard({ id, name, image }) {
    return (
        <div class="skill-icon">
            <img src={image} alt={`${name} logo`}></img>
            <h3 class="skill-title">{name}</h3>
        </div>
    )
}

export default SkillCard;