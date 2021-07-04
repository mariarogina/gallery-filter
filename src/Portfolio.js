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
    
    this.setState({
      selected: e.target.value
    });
  }
  
   //onelist = this.state.selected=="All" ? this.data  : this.data.filter((item) => (item.category == this.selected));
  
  
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