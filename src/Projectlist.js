import React, { Component } from "react";
import uuid from 'react-uuid'
import PropTypes from 'prop-types';


export default class Projectlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const list = this.props.data.map((item) => (
      <div
        className="col-lg-3 col-md-6 mb-2"
        key={uuid()}
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

Projectlist.propTypes = {

  data: PropTypes.array}
