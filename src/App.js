import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <h1 className="mainHeading">Congratulations</h1>
        <div className="detailsContainer">
          <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className="congratsProfile" alt="congratsProfile"/>
          <h1 className="profileName">Hari Gadi</h1>
          <p className="collegeName">Dr.Lankapalli Bullaya Degree College, Visakhapatnam</p>
          <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt="congratsWatch" className="congratsWatch"/>

        </div>

      </div>
    </div>
  );
}

export default App;
