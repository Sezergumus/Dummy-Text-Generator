import { useState } from "react"
import './App.css';
import data from "./data"

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0){
      amount = 1;
    }
    setText(data.slice(0, amount))
  }

  return (
    <div className="App-container">
      <h3>Dummy Text Generator</h3>
      <form className="dummy-form" onSubmit={handleSubmit}>
        <label style={{fontSize: "1.25rem"}} htmlFor="amount">Parapgraphs:</label>
        <input 
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="dummy-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </div>
  );
}

export default App;
