import React, { Component } from 'react'

export default class Toolbar extends Component {

    constructor(props) {
        super(props);}

    render() {

        const active = this.props.selected === this.name;
		const clazz = active ? 'btn-info' : 'btn-outline-secondary'

        const buttons = this.props.filters.map((item,i) => {
         
            return (
                <button
                
                style={{margin:"10px"}} type='button'
                className={`btn ${clazz}`}
                 
                    key={item + i}
                    
                    name = {item}
                    onClick={this.props.onSelectFilter}>

                    {item}
                    
                    </button>
            )
        });
        
        return (
            <div className="tool">
                {buttons}
            </div>
        )
    }
}
