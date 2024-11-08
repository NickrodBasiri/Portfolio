import About from "./components/About"
import Footer from "./components/Footer"
import Project from "./components/Project"

function App() {
  return (
    <>
        <div id="container">
          <section className="flex flex-col justify-center items-center min-h-screen">
            <About/>
          </section>

          <section className="flex flex-col justify-start items-center gap-16 pt-8 min-h-screen">
            <h1 className="mb-8 text-7xl text-white">Projects</h1>
              <Project
              title="Resume Roast"
              description="Resume dissing the resume in a personalized and playful manner. Drake will lay down some smooth bars and sharp lyrics highlighting the weaknesses in your resume. After listening to the exceptional track by Toronto's very own, the user is then prompted to fix their resume. They are then treated to yet another musical masterpiece by Drake's biggest rival, Kendrick Lamar. This is where the user gains key insights on specific ways to improve their resume."
              image="/resumeroast.png"
              tech={["ElevenLabs", "Google AI Studio", "React", "Tailwind"]}
              github={"https://github.com/NickrodBasiri/IgnitionHacks_ResumeRoast"}/>
              <Project
              title="Express-CV"
              description="Express-CV allows users to quickly input their personal information, education, and work experience to generate a clean, professional looking resume in real time. Simplifying resume creation, Express-CV offers a simple and intuitive interface for building custom CV's."
              image="/expressCV.png"
              tech={["React", "Javascript", "Node.js"]}
              github={"https://github.com/NickrodBasiri/Express-CV"}/>
              <Project
              title="Etch-a-Sketch"
              image="/etchasketch.png"
              description="A web based recreation of the classic Etch-a-Sketch."
              tech={["Javascript", "CSS", "HTML"]}
              github={"https://github.com/NickrodBasiri/Etch-a-Sketch"}/>
          </section>
          <section>
            <Footer/>
        </section>
        </div>
    </>
  )
}

export default App
