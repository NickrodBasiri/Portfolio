import '../styles/project.css'

export default function Project({ title, image, description, tech}) {
    return (
        <>
        <div id="project-card">
            <img id="project-image" src={image}/>
            <div id="project-title" className='project-box'>{title}</div>
            <div id="project-info" className='project-box'>
                <div id="project-description">{description}</div>
                <div id="project-tech">{tech}</div>
            </div>
        </div>
        </>
    )
}