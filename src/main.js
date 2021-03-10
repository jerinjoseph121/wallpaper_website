import React from "react";
import List from "./components/listComponent/listComponent";
import "./css/main.css";
import ScrollBar from "react-scrollbar";

export default function Main() {
  return (
    <div>
      <div className="container-fluid" id="titleSection">
        <div className="row">
          <div className="col-10" id="mainTitle">
            Wallpapers
          </div>
          <a href="#" className="col-2 logoutPrompt">
            logout
          </a>
        </div>
      </div>
      <div className="container-fluid row p-0" id="mainSection">
        <div className="col-3 sideSection" id="sideSection">
          <ScrollBar
            style={{
              height: window.innerHeight - 150,
            }}
            speed={0.8}
            className="sideScrollBar"
            contentClassName="sideSection"
          >
            <div className="Lists">
              <List name={"Abstract"} amount={5} />
              <List name={"Vector"} amount={7} />
              <List name={"Landscape"} amount={3} />
            </div>
          </ScrollBar>
        </div>
        <div className="col-9" id="contentSection">
          Hey
        </div>
      </div>
    </div>
  );
}
