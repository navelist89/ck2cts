import React, { Component } from 'react';

import IMGMAP from '../../data/imgmap'
import UNITS from '../../data/units'

class Troops extends Component{

    

    render_units = ()=>{

        let html = []

        for (var key in UNITS){
            html.push(<th key={key} width='80px'> <img src={IMGMAP[key]} alt=""/> {key} </th>)
        }
        return html
    }

    render_additionals = ()=>{
        let html = []
        for(var key in UNITS){
            
            html.push( <td key={key}>
                <input  type="number" name={key}  min='0' style={{width:'50px'}} onChange={this.props.action}/>
            </td>)
        }
        return html
    }

    

    render(){
        
        
        return(
            <tbody>
            <tr>
                <th >Units</th>
                {this.render_units()}
            </tr>
            <tr>
                <th>Additionals</th>
                {this.render_additionals()}
            </tr>
            </tbody>
            
            );
    }
}

export default Troops;