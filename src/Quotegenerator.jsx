import React, { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      
      setQuote(data.quote); // Corrected: Use `quote` instead of `en`
      setAuthor(data.author); // Author name from API
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "10px", display: "inline-block" }}>
        <h2 style={{fontFamily :"sans-serif"}}><b>"{quote}"</b></h2>
        <p><b>- {author}</b></p>
        <button onClick={fetchQuote} style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
