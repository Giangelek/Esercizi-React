import React from "react";
import { App } from "./app";
import ReactDom from "react-dom"

const appComponent = <App />
const rootSel = document.querySelector("#root");

ReactDOM.render(appComponent, rootSel);