import PhotoCard from './PhotoCard';
import Projects from './Projects';
import Skills from './Skills';
import BlogList from './BlogList';
import About from './About';

function Body() {
    return (
        <main>
            <PhotoCard />
            <Projects />
            <Skills />
            <BlogList />
            <About />
        </main>
    )
}

export default Body;