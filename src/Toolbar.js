import React, { Component } from "react";
import uuid from 'react-uuid'
import PropTypes from 'prop-types';

export default class Toolbar extends Component {
  render() {


    const buttons = this.props.filters.map((item, i) => {

        const active = this.props.selected === item;
        const clazz = active ? "btn-info" : "btn-outline-secondary";

      return (
        <button
          style={{ margin: "10px" }}
          type="button"
          className={`btn ${clazz}`}
          key={uuid()}
          value={item}
          onClick={this.props.onSelectFilter}
        >
          {item}
        </button>
      );
    });

    return <div className="tool">{buttons}</div>;
  }
}

Toolbar.propTypes = {

  filters: PropTypes.array,
  onSelectFilter: PropTypes.func,
  selected: PropTypes.string}