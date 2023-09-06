import "./App.css";
import Results from "./components/Results.jsx";
import Summary from "./components/Summary.jsx";

function App() {
  return (
    <>
      <main>
        <div className="resultSummary">
          <Results />
          <Summary />
        </div>
      </main>
    </>
  );
}

export default App;
