import React, { Component } from 'react';

import IMGMAP from '../data/imgmap'

class UnitSum extends Component{
    render(){
        return (
            <div>
                <h3>Unit Total</h3>
                <table>
                    <tbody>
                        <tr>
                            {
                                
                                Object.keys(this.props.data).map((unitname)=>{
                                    
                                    return(<td key={unitname}> <img src={IMGMAP[unitname]} alt=''/> {this.props.data[unitname]}</td>)
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