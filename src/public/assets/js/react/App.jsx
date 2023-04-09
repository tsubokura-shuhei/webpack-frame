import React from "react";
import ReactDom from "react-dom";
import Alert from "../react/components/Alert.tsx";

export const App = () => {
  return (
    <>
      <div style={{ backgroundColor: "#e3e3e3", marginBottom: "20px" }}>
        <p style={{ padding: "0px", margin: "0px" }}>Hellow</p>
        <p style={{ padding: "0px", margin: "0px" }}>React!</p>
        <p style={{ padding: "0px", margin: "0px" }}>
          <Alert message="テスト TypeScript" />
        </p>
      </div>
    </>
  );
};

const root = document.getElementById("root");

if (root) {
  ReactDom.render(<App />, root);
} else {
  console.log("No root element found");
}
