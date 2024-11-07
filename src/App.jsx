import About from "./components/About"
import Project from "./components/Project"

function App() {
  return (
    <>
        <div id="container">
          <section className="flex flex-col justify-center items-center min-h-screen">
            <About/>
          </section>

          <section className="flex flex-col justify-start items-center gap-4 pt-8 min-h-screen">
            <h1 className="mb-8 text-7xl text-white">Projects</h1>
            <Project
              title="Resume Roast"
              description="Resume  Drake, dissing the resume in a personalized and playful manner. Drake will lay down some smooth bars and sharp lyrics highlighting the weaknesses in your resume. After listening to the exceptional track by Toronto's very own, the user is then prompted to fix their resume. They are then treated to yet another musical masterpiece by Drake's biggest rival, Kendrick Lamar. This is where the user gains key insights on specific ways to improve their resume."
              image="/resumeroast.png"
              tech="react"/>
          </section>
        </div>
    </>
  )
}

export default App
