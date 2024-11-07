import About from "./components/About"
import Project from "./components/Project"

function App() {
  return (
    <>
        <div id="container" className="flex flex-col justify-center items-center">
          <About/>
          <Project
            title="Resume Roast"
            description="Resume Roast takes the user's resume, and uses AI and voice replication systems to generate a track by Drake, dissing the resume in a personalized and playful manner. Drake will lay down some smooth bars and sharp lyrics highlighting the weaknesses in your resume. After listening to the exceptional track by Toronto's very own, the user is then prompted to fix their resume. They are then treated to yet another musical masterpiece by Drake's biggest rival, Kendrick Lamar. This is where the user gains key insights on specific ways to improve their resume."
            image="/resumeroast.png"
            tech="react"/>
        </div>
    </>
  )
}

export default App
