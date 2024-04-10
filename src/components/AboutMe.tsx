import Hero from "./Hero";

export default function AboutMe() {
    return(
        <>
            <div className="flex-col items-center justify-center mx-auto w-screen">
                <Hero imgData={'/reliability.jpg'} imgAlt="reliable" title="About Me">
                <div className="flex-col container mx-auto items-center justify-center p-24">
                    <p>I studied Mathematics and Spanish in my undergraduate program at the United States Military Academy. 
                        Upon graduation, I commissioned as an Air Defense Artillery Officer in the United States Army. 
                        Following positions as a Maintenance Technician and Maintenance Manager, Platoon Leader, Executive Officer and Battery Commander I completed my Master’s Degree at 
                        Carnegie Mellon University in the MISM-BIDA program with follow-on assignment at the Army Future's Command Artificial Intelligence Integration Center. </p>
                        <br />
                    <p>I am a husband and father. In my free time I enjoy finding analytical projects to work on that look to explain or answer common questions in today's society. 
                        I also enjoy reading, traveling and studying foreign languages.</p>
                </div>
                </Hero>
            </div>
        </>
    )
}