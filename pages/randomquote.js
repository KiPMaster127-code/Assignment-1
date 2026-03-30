import Navbar from "../components/navbar";
import RandomQuoteBox from "../components/randomquotebox";

export default function randomquote() {                         // Page displaying my navbar and Random Quote Generator
  return (
    <div className="container">
      <Navbar />
      <h1>Random Quote Generator</h1>
      <RandomQuoteBox />
    </div>
  );
}
