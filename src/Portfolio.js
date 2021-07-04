import React, { Component } from "react";

import Toolbar from "./Toolbar";
import Projectlist from "./Projectlist";
import {data} from "./data.js"
import "./App.css";

export default class Portfolio extends Component {

 filters=["All", "Websites", "Flayers", "Business Cards"];

 constructor(props) {
    super(props);
    this.state = {selected: "All"};   
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    debugger;
    this.setState({
      selected: e.target.name
    });
  }
  
  
  
  
  render() {
   
    
    return (
      <div className="app" style={{display:"flex", flexWrap:"wrap"}} >
     
      
          <Toolbar
            filters={this.filters}
            selected={this.state.selected}
            onSelectFilter={this.handleClick}
          />
    
        <Projectlist
        data = {data}
        selected={this.state.selected}
        
        
        />
      
      </div>
    );
  }

  }