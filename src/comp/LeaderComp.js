import React, { Component } from 'react';
import {CGROUPS, CULTURES} from '../data/culture'
import {BADTRAITS, LIFETRAITS, COMBATTRAITS} from '../data/traits'
import IMGMAP from '../data/imgmap'

class LeaderComp extends Component{

    state={
        general:{
            martial:16,
            culture:'northgermanic',
            cgroup:'northgermanic'
            
        }
    }

    constructor(props){
        super(props)
        this.props.action(this.state.general);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if(prevState.general !==this.state.general)
            this.props.action(this.state.general);
    }
    
    onMartialChanged = (e) =>{
        this.setState({
            general:{...this.state.general, martial:e.target.value}
        })
    }

    onCultureChanged = (e) =>{
        this.setState({
            general:{...this.state.general, culture:e.target.name, cgroup:e.target.name}
        })

    }

    onTraitChanged = (e)=>{
        this.setState({
            general:{...this.state.general, [e.target.name]:e.target.name in this.state.general?false:true}
        })
    }

    



    render_culture=()=>{
        return(
            <table>
                <tbody>
                    <tr>
                        <th>
                            Cultural Groups:
                        </th>
                        {
                            Object.keys(CGROUPS).map((index)=>{
                                let cgroup = CGROUPS[index];
                                return(
                                <td key={cgroup}>
                                    <input type="radio" name={cgroup} checked={cgroup===this.state.general.cgroup} onChange={this.onCultureChanged}/>
                                    {cgroup}
                                </td>
                                )

                            })
                        }

                    </tr>
                    <tr>
                        <th>
                            Culture :
                        </th>
                        {
                            Object.keys(CULTURES).map((index)=>{
                                let culture = CULTURES[index];
                                return(
                                <td key={culture}>
                                    <input type="radio" name={culture} checked={culture===this.state.general.culture} onChange={this.onCultureChanged}/>
                                    {culture}
                                </td>
                                )

                            })
                        }
                    </tr>
                    
                

                </tbody>
            </table>
        )
    }

    render_traits=()=>{
        let MAXNUM = Math.max(BADTRAITS.length, COMBATTRAITS.length, LIFETRAITS.length);        
        let matrix = []
        let parlist = [COMBATTRAITS, LIFETRAITS, BADTRAITS]
        for (let traits in parlist){
            let submat = []
            for (let trait in parlist[traits]){
                submat.push(
                    <label>
                        <input type="checkbox" name={parlist[traits][trait]} onChange={this.onTraitChanged}/>
                        <img src={IMGMAP[parlist[traits][trait]]} alt=""/>
                        {parlist[traits][trait]}
                    </label> );
            }
            matrix.push(submat)

        }
        
        
        
        return(
            <table>
                <tbody>
                    {
                        
                        Object.keys(new Array(MAXNUM).fill(0)).map((i)=>{
                            
                            return(<tr key={i}>
                                {Object.keys(new Array(3).fill(0)).map((j)=>{
                                    
                                    if(matrix[j])
                                        if(matrix[j][i])
                                            return(<td key={j*100+i}>{matrix[j][i]}</td>)
                                        else
                                            return(<td key={j*100+i}></td>)
                                    else
                                        return(<td key = {j*100+i}></td>)

                                })
                                }
                            </tr>)
                        })
                    }

                </tbody>
            </table>
        )
    }

    render(){
        return(

            <div className="LeaderComp">
                <h3>Leader</h3>
                
                martial : <input  type="number" name='martial'  min='0' defaultValue={this.state.general.martial} style={{width:'50px'}} onChange={this.onMartialChanged}/>

                {this.render_culture()}

                
                {this.render_traits()}


            </div>
        );
    }
}

export default LeaderComp;