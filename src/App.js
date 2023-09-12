import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Madrid" />

      <footer>
        This was coded by Lidia Gallardo and is
        <a
          href="https://github.com/LidiaGDC/wfiveweather"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-source{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
