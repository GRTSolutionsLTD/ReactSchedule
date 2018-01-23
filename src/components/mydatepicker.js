import React, { Component } from 'react';
import { Calendar } from 'react-date-range';
 
export class date_picker extends Component {
    handleSelect(date){
       console.log(date); // Momentjs object 
   }
 
    render(){
        return (
            <div>
                <Calendar                  
                              onInit={this.handleSelect}
                              onChange={this.handleSelect}
                 />
{/*                  
                    // onInit={this.props.action}
                    // onChange={this.props.action}
                    // format="DD/MM/YYY" */}
           
            </div>
        )
    }
}