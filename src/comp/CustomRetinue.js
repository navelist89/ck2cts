import React, { Component } from 'react';

import UNITS from '../data/units'
import IMGMAP from '../data/imgmap'

class CustomRetinue extends Component{
    state={
        count_each:{},
        num_retinue:0
    }

    onValueChanged=(e)=>{
        this.setState(
            {count_each:{...this.state.count_each, [e.target.name]:e.target.value}},
            ()=>{this.postCallback()}
        )
    }

    postCallback=()=>{
        
        let count={};
        for(let key in this.state.count_each){
            count[key] = this.state.count_each[key]*this.state.num_retinue;
        }        
        this.props.action(count);
    }

    render_row = ()=>{
        let html = [];
        let keys = Object.keys( UNITS );
        for(let i=0; i<3; i++){
            let subkeys = keys.slice(i*3,(i+1)*3)
            html.push(
                <tr key={i}>
                {
                    subkeys.map((unitname)=>{
                        
                        return(
                            <td key={unitname}>
                                <img src={IMGMAP[unitname]} alt=''/> 
                                <input type="number" name={unitname} min='0' style={{width:'50px'}} onChange={this.onValueChanged}/>
                                
                            </td>
                        );
                    })
                }

                </tr>
            )
            

            
        }
        return html;
    }

    render(){
        return (
            <tbody>
                {this.render_row()}
                <tr><
                    th>Amount</th>
                    <td>
                        <input type="number" name='num_retinue' min='0' style={{width:'70px'}}
                            onChange={(e)=>{this.setState({num_retinue:e.target.value},
                                ()=>{this.postCallback()}
                                )}}
                        />
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default CustomRetinue;