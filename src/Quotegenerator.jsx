import React, { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("Kanye West");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.kanye.rest");
      const data = await response.json();
      
      setQuote(data.quote); 
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
        <h2>"{quote}"</h2>
        <p>- {author}</p>
        <button onClick={fetchQuote} style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
