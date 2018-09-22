import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./components/App";

const root = document.querySelector("#container");

ReactDom.render(<App name="React" />, root);
