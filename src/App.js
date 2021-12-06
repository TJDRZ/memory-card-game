import GameController from "./components/GameController";
import "./styles/App.css";

function App() {
  return (
    <main className="App">
      <header>
        <h1>The many shades of George Costanza</h1>
        <p>16 independent Georges gets you royal...</p>
        <p>...Click the same one twice gets you mohel</p>
        <hr />
      </header>
      <GameController />
    </main>
  );
}

export default App;
