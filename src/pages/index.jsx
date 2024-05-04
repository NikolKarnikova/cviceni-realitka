import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header/Header";

document.querySelector("#root").innerHTML = render(
  <div className="container">
    <Header />
  </div>
);
