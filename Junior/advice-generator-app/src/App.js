import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import AdviceCard from "./components/Advice Card/AdviceCard";

const App = () => {
  const [quote, setQuote] = useState("");
  return (
    <div className="body">
      <GlobalStyle />
      <AdviceCard quote={quote} />
    </div>
  );
};

export default App;
