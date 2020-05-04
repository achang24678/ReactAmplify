import React from "react";
import logo from "./logo.svg";
import "./App.css";

// import { withAuthenticator } from "aws-amplify-react";
import { withAuthenticator } from "@aws-amplify/ui-react";

import { Analytics } from "aws-amplify";

function App() {
  const recordEvent = () => {
    console.log("recording event!");

    Analytics.record({
      name: "test event 1",
      attributes: {
        username: "allen1",
      },
    });
  };

  return (
    <div className="App">
      <button onClick={recordEvent}>Record Event</button>
    </div>
  );
}

export default withAuthenticator(App);
