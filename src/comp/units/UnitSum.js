import React, { Component } from 'react';

import IMGMAP from '../../data/imgmap'

class UnitSum extends Component{


    render(){
        
        let isEmpty = true;
        
        for(let key in this.props.data){
            
            if( this.props.data[key]>0)
                isEmpty = false;
        }
        

        if(isEmpty){
            
            return(<div className = "UnitSum">
                <h3>Unit Total</h3>
                No units selected
            </div>);
        }
        
        return (
            <div className="UnitSum">
                <h3>Unit Total</h3>
                <table>
                    <tbody>
                        <tr>
                            {
                                
                                Object.keys(this.props.data).map((unitname)=>{
                                    if(this.props.data[unitname]>0)
                                        return(<td key={unitname}> <img src={IMGMAP[unitname]} alt=''/> {this.props.data[unitname]}</td>)
                                    return undefined
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UnitSum;