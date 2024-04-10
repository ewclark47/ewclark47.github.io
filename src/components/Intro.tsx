import Hero from "./Hero"

export default function Intro() {
    return(
        <>
        <div className="flex-col items-center justify-center mx-auto w-screen">
            <Hero imgData={'/home.jpg'} imgAlt="car factory" title="Intro">
                <div className="flex-col container mx-auto items-center justify-center p-24">
                    <p>Hi! I'm Elliott Clark, a Data Enthusiast currently working at the Artificial Intelligence Integration Center under Army Future's Command.</p>
                        <br />
                    <p>Interested in Data Science and Analytics and hope to pursue a career in the field following my Army career.</p>
                </div>
            </Hero>
            </div>
        </>
    )
}