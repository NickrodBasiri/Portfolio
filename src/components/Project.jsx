import '../styles/project.css'

export default function Project({ title, image, description, tech}) {
    return (
        <>
        <div id="project-card">
            <img id="project-image" src={image} className='rounded-lg'/>
            <div id="project-title" className='project-box'>{title}</div>
            <div id="project-description" className='project-box'>{description}</div>
            <div id="project-tech" className='project-box'>{tech}</div>
        </div>
        </>
    )
}