function SkillCard({ name, image }) {
    return (
        <div className="skill-icon">
            <img src={image} alt={`${name} logo`}></img>
            <h3 className="skill-title">{name}</h3>
        </div>
    )
}

export default SkillCard;