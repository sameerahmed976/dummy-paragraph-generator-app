import "./styles.css";
import { useState } from "react";
import array from "./data";
import { FaCaretRight } from "react-icons/fa";
export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count, 10);
    setText(array.slice(0, amount));
  };

  return (
    <>
      <h1 className="heading">Dummy Paragraph generator</h1>
      <main className="center">
        <form onSubmit={handlesubmit} className="flex">
          <label htmlFor="number">Number of Paragraphs:</label>
          <input
            type="number"
            placeholder="Enter the value"
            min="0"
            max="9"
            id="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
        <article>
          {text.map((e, index) => {
            return (
              <p className="paragraph" key={index}>
                <FaCaretRight className="arrow" />
                {e}
              </p>
            );
          })}
        </article>
      </main>
    </>
  );
}
