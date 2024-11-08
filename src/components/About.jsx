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
            <div id="info-grid" className='grid gap-4 w-[60vw] mt-6 md:mt-0 grid-rows-[3fr_1fr_2fr_3fr_1fr] grid-cols-[3fr_1fr] md:grid-rows-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[4fr_4fr_1fr]'>
                <div id="personal" className="grid-box opacity-0 text-center p-4 gap-4 row-start-1 row-end-2 col-start-1 col-end-2 md:row-start-1 md:row-end-4 md:col-start-2 md:col-end-3">
                    <img id="profile" className='rounded-full object-cover w-32' src={githubPFP}></img>
                    <h1>Nickrod Basiri</h1>
                </div>
                <div id="info-card" className="grid-box opacity-0 text-center row-start-2 row-end-3 col-start-1 col-span-2 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2">
                    <p>Full Stack Developer</p>
                </div>
                <div id="tech" className="grid-box opacity-0 flex flex-col p-4 text-[2rem] row-start-4 row-end-5 col-start-1 col-span-2 md:row-start-2 md:row-end-5 md:col-start-1 md:col-end-2">
                    <h1 className='mb-4'>Tech I Use</h1>
                    <div id="tech-box" className='grid place-items-center grid-cols-3 grid-rows-3 gap-y-[1.5rem]'>
                        <img className="icon w-10" src={htmlIcon}></img>
                        <img className="icon w-10" src={cssIcon}></img>
                        <img className="icon w-10" src={gitIcon}></img>
                        <img className="icon w-10" src={javascriptIcon}></img>
                        <img className="icon w-10" src={typescriptIcon}></img>
                        <img className="icon w-10" src={reactIcon}></img>
                        <img className="icon w-10" src={javaIcon}></img>
                        <img className="icon w-10" src={pythonIcon}></img>
                        <img className="icon w-10" src={tailwindIcon}></img>
                    </div>
                </div>
                <div id="resume" className='grid-box opacity-0 row-start-5 row-end-6 col-start-1 col-span-2 md:row-start-5 md:row-end-6 md:col-start-1 md:col-end-2'>
                    <button onClick={() => window.open('/resume.pdf', '_blank')} className="resume-button bg-none text-white rounded-lg border-2 border-gray-300 transition-shadow duration-300 ease-in-out shadow-md">
                        Resume
                    </button>
                </div>
                <div id="contact" className="grid-box opacity-0 flex flex-col row-start-1 row-end-2 col-start-2 col-end-3 md:row-start-1 md:row-end-4 md:col-start-3 md:col-end-4">
                    <a href="https://github.com/NickrodBasiri" target="_blank"><i className="contact-icon visited:text-white fa-brands fa-square-github"/></a>
                    <a href="https://www.linkedin.com/in/nickrodbasiri/" target="_blank"><i className="contact-icon visited:text-white fa-brands fa-linkedin"/></a>
                    <a href="mailto:basirinickrod@gmail.com"><i className="contact-icon visited:text-white fa-envelope fa-solid"/></a>
                </div>
                <div id="about" className="grid-box opacity-0 p-4 text-[1.1rem] row-start-3 row-end-4 col-start-1 col-span-2 md:row-start-4 md:row-end-6 md:col-start-2 md:col-span-2">
                    Hi! I'm Nickrod Basiri, a second-year Software Engineering student at York University. I'm passionate about continuous learning and using technology to tackle real-world problems, always striving to make a positive impact.
                </div>
            </div>
        </>
    )
}