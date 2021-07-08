import React, { Component } from "react";
import ToolBar from "./ToolBar";
import ProjectList from "./ProjectList";
import {data} from "./data.js"
import "./App.css";

export default class Portfolio extends Component {

 filters=["All", "Websites", "Flayers", "Business Cards"];

 constructor(props) {
    super(props);
    this.state = {selected: "All",
  filters : ["All", "Websites", "Flayers", "Business Cards"],
  projects:data
};   
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const filter = e.target.value;
    this.setState({ selected: filter });
  
  if (filter !== "All") {
      const filteredProjects = data.filter(
        (item) => item.category === filter
      );
      this.setState({ projects: filteredProjects });
    } else {
      this.setState({ projects: data })
      
    }  
  };
  
  render() {
   
    
    return (
      <div className="app" style={{display:"flex", flexWrap:"wrap"}} >
     
      
          <ToolBar
            filters={this.state.filters}
            selected={this.state.selected}
            onSelectFilter={this.handleClick}
          />
    
        <ProjectList
        data = {this.state.projects}
        
        
        />
      
      </div>
    );
  }

  }