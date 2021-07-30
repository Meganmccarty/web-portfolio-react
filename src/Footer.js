import linkedinIcon from './images/linkedin.png';
import githubIcon from './images/github.png';
import topIcon from './images/top.png';

function Footer() {
    return (
        <footer>
            <p>Created by Megan McCarty</p>
            <div className="icons">
                <div id="github">
                    <a target="_blank" rel="noreferrer" href="https://github.com/Meganmccarty"><img src={linkedinIcon} alt="Github icon"/></a>
                </div>
                <div id="linkedin">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/megan-mccarty-248417a4/"><img src={githubIcon} alt="LinkedIn icon"/></a>
                </div>
                <div id="back-to-top">
                    <a href="#brand"><img src={topIcon} alt="'Back to top' arrow icon"/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;