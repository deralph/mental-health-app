import React from "react";
import Chat from "./components/chat";

function App() {
  return (
    <section style={{ height: "100vh" }}>
      <navbar style={{ width: "100%", display: "fixed" }}>
        <p
          style={{
            color: "#1e42af",
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: "30px",
            padding: "20px 40px",
          }}
        >
          Therapeutic.
        </p>
      </navbar>
      <Chat />
    </section>
  );
}

export default App;
