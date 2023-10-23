import { useState } from "react";
import qoutes from "./assets/quotes.json";
import "./App.css";

interface Quote {
  qoute: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * qoutes.length)];
};

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  return <>{quote.qoute}</>;
}

export default App;
