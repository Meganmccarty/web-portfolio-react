import { Card, Image } from 'semantic-ui-react'

function BlogCard({ title, categories, date, image, url }) {
    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{date}</span>
                </Card.Meta>
                <Card.Meta>
                    <div className="tag-list">
                        {categories.map(category => {
                            return (
                                <span key={category} className="tag">{category}</span>
                            )
                        })}
                    </div>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a href={url}><button className="ui button blue-button">Read More</button></a>
            </Card.Content>
        </Card>
    )
}

export default BlogCard;