import "./App.css";
import Logo from "./img/logo.png";
function App() {
  return (
    <div className="App">
      <h1>Pensou em viajar?
        <img src={Logo} style={{ height: 100, width: 100 }} />
      </h1>
    </div>
  );
}

export default App;
