import Hero from "./Hero";
import ProjectCard from "./ProjectCard";

export default function Portfolio(){

    const project_names = ['E-Commerce', 'House Rental', 'Blockchain', 'Blog', 'Social Media']

    return(
        <>
        <div className="flex-col items-center justify-center mx-auto w-screen">
            <Hero imgData={'/performance.jpg'} imgAlt="performance" title="Portfolio">
                <div className="flex-col container mx-auto items-center justify-center p-24">
                    {project_names.map((proj, idx) => (
                        <ProjectCard key={idx} name={proj} />
                    ))}
                </div>
            </Hero>
        </div>
        </>
    )
}