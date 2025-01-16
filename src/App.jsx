import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <>
      <div id="container">
        <section className="flex flex-col justify-center items-center min-h-screen">
          <About />
        </section>

        <section className="flex flex-col justify-start items-center gap-16 pt-8 min-h-screen">
          <h1 className="mb-8 text-7xl text-white">Projects</h1>
          <Project
            title="Pickle"
            description="In a pickle? Pickle is an emergency response app that uses SMS and AI to keep people connected and safe during crises. It enables location sharing, survival guidance, and tools for first responders, even without internet access. Its innovative design ensures accessibility and reliability when it matters most."
            image="/pickle.png"
            tech={["React", "Flask", "MongoDB", "Auth0", "Cohere AI"]}
            github={"https://github.com/NickrodBasiri/DeltahacksXI_Pickle"}
            winner={true}
          />
          <Project
            title="Resume Roast"
            description="Resume Roast is tool that uses AI and voice replication systems to help improve your resume through an epic rap battle. Drake humorously disses your resume’s weak points, followed by Kendrick Lamar’s motivating track, offering key improvement insights. This unique, playful experience combines entertainment with actionable feedback to help you elevate your resume."
            image="/resumeroast.png"
            tech={["ElevenLabs", "Google AI Studio", "React", "Tailwind"]}
            github={
              "https://github.com/NickrodBasiri/IgnitionHacks_ResumeRoast"
            }
            winner={false}
          />
          <Project
            title="Express-CV"
            description="Express-CV allows users to quickly input their personal information, education, and work experience to generate a clean, professional looking resume in real time. Simplifying resume creation, Express-CV offers a simple and intuitive interface for building custom CV's."
            image="/expressCV.png"
            tech={["React", "Javascript", "Node.js"]}
            github={"https://github.com/NickrodBasiri/Express-CV"}
            winner={false}
          />
          <Project
            title="Etch-a-Sketch"
            image="/etchasketch.png"
            description="A web based recreation of the classic Etch-a-Sketch."
            tech={["Javascript", "CSS", "HTML"]}
            github={"https://github.com/NickrodBasiri/Etch-a-Sketch"}
            winner={false}
          />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
