import logo from './logo.svg';
import './App.css';

let gross = "Hi! My name is Avery, and I am a computer scientist turned neuro-studying-person. I received my Bachelor's degree in computer science from the University of Maine, where I had the opportunity to participate in a lot of amazing projects and experiences"

function App() {
  return (
    <div className="App">
      <div id="card">
        <div class="content-container">
          <div>
            <h1 id="title">Avery <LegendaryText text="Gosselin"/></h1>
            <h3 id="tags">Software Development - Neuro Student - Partially Competent</h3>
            <hr></hr>
          </div>
            
          <div id="about-container">
            <p>
              <LegendaryText text="Hi!"/> My name is Avery, and welcome to my tiny website! 
              <br></br><br></br>
              I received my Bachelor's degree in <LegendaryText text="computer science"/> from the University of Maine, 
              where I had the opportunity to participate in a lot of amazing projects and 
              experiences, and today I am pursuing a masters in <LegendaryText text="interdisciplinary brain science"/> at ETH and UZH in Zurich, Switzerland!
              <br></br><br></br>
              My interests include <LegendaryText text="neuroscience"/>, <LegendaryText text="brain computer interfaces"/>, <LegendaryText text="robotics"/>, and getting to work on projects that 
              will impact real people.
              <br></br><br></br>
              Please feel free to <LegendaryText text="connect with me"/>  if you'd like to chat or have any questions or opportunities where I could
              work on something cool (I like doing that)!
            </p>
          </div>

          <div class="grid-container">
              <a class="grid-box" title="Github" href="https://github.com/averyGosselin" target="_blank">
                  <img src="github.png" class="icon" alt="github"></img>
              </a>

              <a class="grid-box" title="LinkedIn" href="https://www.linkedin.com/in/avery-gosselin-4719b019a" target="_blank">
                  <img src="linkedin.png" class="icon" alt="linkedin"></img>
              </a>

              <a class="grid-box" title="My Resume" href="avery-gosselin.pdf" target="_blank">
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
    <span style={{color: "rgb(2,94,176)", fontWeight: "bold"}}>
      {text}
    </span>
  )
}

export default App;
