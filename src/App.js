import { useState } from "react";
import "./styles.css";

const zodiacDictionary = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♐": "Sagittaris",
  "♑": "Capricorn",
  "♒": "Aquarius",
  "♓": "Pisces"
};

var zodiacList = Object.keys(zodiacDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function zodiacInputHandler(event) {
    var inputzodiac = event.target.value;

    if (inputzodiac in zodiacDictionary) {
      setMeaning(zodiacDictionary[inputzodiac]);
    } else {
      setMeaning("enter valid zodiac");
    }
  }

  function zodiacClickHandler(zodiac) {
    setMeaning(zodiacDictionary[zodiac]);
  }

  return (
    <div className="App">
      <h1>Can you guess the Zodiac Signs?</h1>

      <input placeholder="Enter Zodiac Sign" onChange={zodiacInputHandler} />
      <div className="zodiac-meaning">
        <h2>{meaning}</h2>
      </div>
      <h3>Click below to get your Zodiac</h3>
      <div className="zodiac-signs">
        {zodiacList.map((zodiac) => {
          return (
            <span
              onClick={() => zodiacClickHandler(zodiac)}
              key={zodiac}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              zodiac={zodiac}
            >
              {zodiac}
            </span>
          );
        })}
      </div>
    </div>
  );
}
