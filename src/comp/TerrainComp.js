import React, { Component } from 'react';
import TERRAINS from '../data/terrain'
class TerrainComp extends Component{

    state={
        terrain:""
    }

    onChange=(e)=>{
        this.setState({terrain:e.target.name},
            ()=>{this.props.action(this.state.terrain)});
    }

    render(){
        return(
            <div>
                <h3> Terrain </h3>
                <table>
                    <tbody>
                        <tr>
                            {
                                Object.keys(TERRAINS).map(
                                    (idx)=>{
                                        let terrain = TERRAINS[idx];
                                        return(<td key={terrain}><input type="radio" name={terrain} checked={terrain===this.state.terrain} onChange={this.onChange}/> {terrain} </td>)
                                    }
                                )
                            }
                            

                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default TerrainComp;