import '../styles/about.css';
import githubPFP from '../assets/githubPFP.png'
import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/css.png'
import javascriptIcon from '../assets/icons/javascript.png'
import typescriptIcon from '../assets/icons/typescript.png'
import javaIcon from '../assets/icons/java.png'
import gitIcon from '../assets/icons/git.png'
import pythonIcon from '../assets/icons/python.png'
import reactIcon from '../assets/icons/react.png'
import tailwindIcon from '../assets/icons/tailwind.png'

export default function About() {
    return (
        <>
            <div id="info-grid">
                <div id="personal" className="grid-box">
                    <img id="profile" src={githubPFP}></img>
                    <h1>Nickrod Basiri</h1>
                </div>
                <div id="info-card" className="grid-box">
                    <p>Full Stack Developer</p>
                </div>
                <div id="tech" className="grid-box">
                    <h1>Tech I Use</h1>
                    <div id="tech-box">
                        <img className="icon" src={htmlIcon}></img>
                        <img className="icon" src={cssIcon}></img>
                        <img className="icon" src={gitIcon}></img>
                        <img className="icon" src={javascriptIcon}></img>
                        <img className="icon" src={typescriptIcon}></img>
                        <img className="icon" src={reactIcon}></img>
                        <img className="icon" src={javaIcon}></img>
                        <img className="icon" src={pythonIcon}></img>
                        <img className="icon" src={tailwindIcon}></img>
                    </div>
                </div>
                <div id="contact" className="grid-box">
                    <h2>Contact</h2>
                    <i className="contact-icon fa-brands fa-square-github"/>
                    <i className="contact-icon fa-brands fa-linkedin"/>
                    <i className="contact-icon fa-envelope fa-solid"/>
                    <h2>Resume <i className="fa-file fa-regular"/></h2>
                </div>
                <div id="about" className="grid-box">about me</div>
            </div>
        </>
    )
}