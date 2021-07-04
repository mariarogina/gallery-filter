import React, { Component } from 'react'
import { uuid } from 'uuidv4';

export default class Toolbar extends Component {

    
    render() {

        const active = this.props.selected === this.value;
		const clazz = active ? 'btn-info' : 'btn-outline-secondary'

        const buttons = this.props.filters.map((item,i) => {
         
            return (
                <button
                
                style={{margin:"10px"}} type='button'
                className={`btn ${clazz}`}
                 
                    key={uuid()}
                    value = {item}
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
