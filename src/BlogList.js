import { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react'

import BlogCard from './BlogCard';

function BlogList() {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@megan-mccarty')
            .then(response => response.json())
            .then(data => setBlogPosts(data.items))
            .catch(error => console.log(error))
    }, [])

    const displayPosts = blogPosts.map(blogPost => {
        return (
            <BlogCard
                key={blogPost.title}
                title={blogPost.title}
                author={blogPost.author}
                content={blogPost.content}
                categories={blogPost.categories}
                date={blogPost.pubDate}
                image={blogPost.thumbnail}
                url={blogPost.link}
            />           
        )
    })
    
    return (
        <>
            <h1 id="Blog">Blog Posts</h1>
            {/* <Card.Group centered fluid="true"> */}
            <div className="blog-cards">
                {displayPosts}
            {/* </Card.Group> */}
            </div>
        </>
    )
}

export default BlogList;