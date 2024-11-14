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
            <div id="info-grid" className='gap-4 grid grid-cols-[3fr_1fr] md:grid-cols-[4fr_4fr_1fr] grid-rows-[3fr_1fr_2fr_3fr_1fr] md:grid-rows-[1fr_1fr_1fr_1fr_1fr] mt-6 md:mt-0 w-[60vw]'>
                <div id="personal" className="gap-4 grid-box col-start-1 md:col-start-2 col-end-2 md:col-end-3 row-start-1 md:row-start-1 row-end-2 md:row-end-4 opacity-0 p-4 text-center">
                    <img id="profile" className='rounded-full w-32 object-cover' src={githubPFP}></img>
                    <h1>Nickrod Basiri</h1>
                </div>
                <div id="info-card" className="grid-box col-span-2 col-start-1 md:col-start-1 md:col-end-2 row-start-2 md:row-start-1 row-end-3 md:row-end-2 opacity-0 text-center">
                    <p>Full Stack Developer</p>
                </div>
                <div id="tech" className="flex flex-col gap-4 grid-box col-span-2 col-start-1 md:col-start-1 md:col-end-2 row-start-4 md:row-start-2 row-end-5 md:row-end-5 opacity-0 p-4 text-[2rem]">
                    <h1>Tech I Use</h1>
                    <div id="tech-box" className='place-items-center gap-y-[1.5rem] grid grid-cols-3 grid-rows-3'>
                        <img className="w-10 icon" src={htmlIcon}></img>
                        <img className="w-10 icon" src={cssIcon}></img>
                        <img className="w-10 icon" src={gitIcon}></img>
                        <img className="w-10 icon" src={javascriptIcon}></img>
                        <img className="w-10 icon" src={typescriptIcon}></img>
                        <img className="w-10 icon" src={reactIcon}></img>
                        <img className="w-10 icon" src={javaIcon}></img>
                        <img className="w-10 icon" src={pythonIcon}></img>
                        <img className="w-10 icon" src={tailwindIcon}></img>
                    </div>
                </div>
                <div id="resume" className='grid-box col-span-2 col-start-1 md:col-start-1 md:col-end-2 row-start-5 md:row-start-5 row-end-6 md:row-end-6 opacity-0'>
                    <button onClick={() => window.open('/resume.pdf', '_blank')} id="resume-button" className="bg-white shadow-md pr-2 pl-2 rounded-lg font-bold text-[#201e25] text-[2rem] transition-shadow duration-300 ease-in-out">
                        Resume
                    </button>
                </div>
                <div id="contact" className="flex flex-col grid-box col-start-2 md:col-start-3 col-end-3 md:col-end-4 row-start-1 md:row-start-1 row-end-2 md:row-end-4 opacity-0">
                    <a href="https://github.com/NickrodBasiri" target="_blank"><i className="text-[3rem] visited:text-white contact-icon fa-brands fa-square-github"/></a>
                    <a href="https://www.linkedin.com/in/nickrodbasiri/" target="_blank"><i className="text-[3rem] visited:text-white contact-icon fa-brands fa-linkedin"/></a>
                    <a href="mailto:basirinickrod@gmail.com"><i className="text-[3rem] visited:text-white contact-icon fa-envelope fa-solid"/></a>
                </div>
                <div id="about" className="grid-box col-span-2 md:col-span-2 col-start-1 md:col-start-2 row-start-3 md:row-start-4 row-end-4 md:row-end-6 opacity-0">
                    <h1 className='pr-8 pl-8 text-[1rem]'>Hi! I&apos;m Nickrod Basiri, a second-year Software Engineering student at York University. I&apos;m passionate about continuous learning and using technology to tackle real-world problems, always striving to make a positive impact.</h1>
                </div>
            </div>
        </>
    )
}