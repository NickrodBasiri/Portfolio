import '../styles/footer.css';

export default function Footer() {
    return (
        <div className="flex justify-center items-center gap-10 pb-10 h-[10vh]">
            <a href="https://github.com/NickrodBasiri" target="_blank"><i className="text-5xl text-white md:text-6xl visited:text-white fa-brands fa-square-github glow"/></a>
            <a href="https://www.linkedin.com/in/nickrodbasiri/" target="_blank"><i className="text-5xl text-white md:text-6xl visited:text-white fa-brands fa-linkedin glow"/></a>
            <a href="mailto:basirinickrod@gmail.com"><i className="text-5xl text-white md:text-6xl visited:text-white fa-envelope fa-solid glow"/></a>
            <button onClick={() => window.open('/resume.pdf', '_blank')} className="bg-white shadow-md pr-2 pl-2 rounded-lg glow-button font-bold text-[#201e25] text-[2rem] transition-shadow duration-300 ease-in-out">
                Resume
            </button>
        </div>
    )
}