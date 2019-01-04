import React, { Component } from 'react';

import IMGMAP from '../data/imgmap'
//import RETINUES from '../data/retinues'

class Retinues extends Component{

    render_name = ()=>{
        let html = []
        for(let key in this.props.data){
            html.push(
                <th key={key} width='150px'>{key}</th>
            );
        }
        return html;
    }
    render_composition = ()=>{
        let html = []

        for(let key in this.props.data){
            html.push(
                <td key={key}>
                    <div>
                        {Object.keys(this.props.data[key].composition).map((unit, index)=>{
                            return(
                                <div key={unit}>
                                    <img src={IMGMAP[unit]} alt='' />  {this.props.data[key].composition[unit]} 
                                </div>
                            )
                        })}
                        
                    </div>
                </td>
            )
        }
        return html
    }

    render_input=()=>{
        let html = []
        for(var key in this.props.data){
            
            html.push( <td key={key}>
                <input  type="number" name={key}  min='0' style={{width:'80px'}} onChange={this.props.action}/>
            </td>)
        }
        return html
    }
    

    render(){
        return(
        <tbody>
            <tr>
                <th style={{width:'10%'}}> Name </th> 
                {this.render_name()}
            </tr>
            <tr>
                  <th>Compositions</th>
                  {this.render_composition()}
            </tr>
            <tr>
                <th></th>
                {this.render_input()}
            </tr>

        </tbody>);
    }
}

export default Retinues