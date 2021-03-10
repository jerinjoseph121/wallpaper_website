import React, { Component } from "react";
import "./listComponent.css";

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      amount: this.props.amount,
    };
  }

  render() {
    this.List = [];
    for (let i = 0; i < this.state.amount; i++) {
      this.List.push(this.state.name + " Wallpaper " + (i + 1));
    }
    const listComponent = this.List.map((list) => {
      return <li key={this.List.indexOf(list)}>{list}</li>;
    });
    return (
      <div className="listSection">
        <h2 className="listTitles">{this.state.name} Wallpapers</h2>
        <hr id="lineSeperator"></hr>
        <div className="row">
          <div className="col-11 offset-1 lists">{listComponent}</div>
        </div>
      </div>
    );
  }
}

export default ListComponent;
