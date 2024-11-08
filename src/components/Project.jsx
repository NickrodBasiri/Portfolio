import '../styles/project.css'

export default function Project({ title, image, description, tech, github}) {
    return (
        <>
        <div id="project-card" className='grid lg:grid-cols-2 lg:grid-rows-[auto_1fr_auto] gap-4 pb-8'>
            <div id="project-title" class="project-box flex justify-between text-4xl p-3 lg:col-start-1 lg:row-start-1">
                <h1 className='font-bold'>{title}</h1>
                <a href={github} target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"/></a>
            </div>
            <img id="project-image" src={image} className='rounded-lg lg:row-start-2 lg:row-span-2 lg:col-start-1'/>
            <div id="project-description" className='project-box flex justify-center items-center p-4 lg:row-start-1 lg:row-span-2 lg:col-start-2'>{description}</div>
            <div id="project-tech" className='project-box p-4 flex flex-row flex-wrap gap-4 justify-evenly lg:row-start-3 lg:col-start-2'>
                {tech.map((tech) => (
                    <div id="tech-name"className='text-white rounded-lg border-2 border-gray-300'>
                        <p className='p-1'>{tech}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}