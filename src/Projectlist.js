import React, { Component } from "react";

export default class Projectlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const onelist =
      this.props.selected === "All"
        ? this.props.data
        : this.props.data.filter(
            (item) => item.category === this.props.selected
          );
    const list = onelist.map((item) => (
      <div
        className="col-lg-3 col-md-6 mb-2"
     //   key={item.img}
        name={item.category}
      >
        
        <img
          style={{ width: "400px" }}
          className="img-fluid mb-4"
          src={item.img}
        />
      </div>
    ));

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="row">{list}</div>
      </div>
    );
  }
}
