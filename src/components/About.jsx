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
            <div id="info-grid" className='grid gap-[1em] w-[60vw]'>
                <div id="personal" className="grid-box opacity-0 text-center">
                    <img id="profile" className='rounded-full object-cover' src={githubPFP}></img>
                    <h1>Nickrod Basiri</h1>
                </div>
                <div id="info-card" className="grid-box opacity-0 text-center">
                    <p>Full Stack Developer</p>
                </div>
                <div id="tech" className="grid-box opacity-0 flex flex-col justify-evenly">
                    <h1>Tech I Use</h1>
                    <div id="tech-box" className='grid place-items-center grid-cols-3 grid-rows-3'>
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
                <div id="resume" className='grid-box opacity-0'>
                    <button onClick={() => window.open('/resume.pdf', '_blank')} className="resume-button bg-none text-white rounded-lg border-2 border-gray-300">
                        Resume
                    </button>
                </div>
                <div id="contact" className="grid-box opacity-0 flex flex-col">
                    <a href="https://github.com/NickrodBasiri" target="_blank"><i className="contact-icon visited:text-white fa-brands fa-square-github"/></a>
                    <a href="https://www.linkedin.com/in/nickrodbasiri/" target="_blank"><i className="contact-icon visited:text-white fa-brands fa-linkedin"/></a>
                    <a href="mailto:basirinickrod@gmail.com"><i className="contact-icon visited:text-white fa-envelope fa-solid"/></a>
                </div>
                <div id="about" className="grid-box opacity-0">Hi! I'm Nickrod Basiri, a second-year Software Engineering student at York University. I'm passionate about continuous learning and using technology to tackle real-world problems, always striving to make a positive impact.</div>
            </div>
        </>
    )
}