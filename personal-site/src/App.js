import './App.css';


function App() {
  return (
    <div className="App">
      <div id="card">
        <div class="content-container">
          <div>
            <h1 id="title">Avery <LegendaryGray text="Gosselin"/></h1>
            <h3 id="tags">COMPUTER SCIENTIST · NEUROSCIENTIST · LIFETIME LEARNER</h3>
            <hr></hr>
          </div>
            
          <div id="about-container">
            <p>
              <LegendaryText text="Hi!"/> Welcome to my tiny website,
              <br></br><br></br>
              I received my Bachelor's degree in <LegendaryText text="computer science"/> from the University of Maine and today I am pursuing a Masters in <LegendaryText text="interdisciplinary brain science"/> at ETH and UZH in Zurich, Switzerland!
              <br></br><br></br>
              My professional interests include <LegendaryText text="neuro/life sciences"/>, <LegendaryText text="computation"/>, <LegendaryText text="robotics"/>, and working on interdisciplinary projects that impact real people.
              <br></br><br></br>
              Please feel free to <LegendaryText text="connect with me"/> to chat or if you have any questions.
            </p>
          </div>

          <div class="grid-container">
              <a class="grid-box" title="Github" href="https://github.com/averyGosselin" target="_blank">
                  <img src="github.png" class="icon" alt="github"></img>
              </a>

              <a class="grid-box" title="LinkedIn" href="https://www.linkedin.com/in/avery-gosselin-4719b019a" target="_blank">
                  <img src="linkedin.png" class="icon" alt="linkedin"></img>
              </a>

              <a class="grid-box" title="My Resume" href="cv.pdf" target="_blank">
                  <img src="resume.png" class="icon" alt="resume"></img>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegendaryText({text}) {
  return (
    <span style={{color: "#01851e", fontWeight: "bold"}}>
      {text}
    </span>
  )
}
function LegendaryGray({text}) {
  return (
    <span style={{color: "#3d3d3dff", fontWeight: "bold"}}>
      {text}
    </span>
  )
}

export default App;
