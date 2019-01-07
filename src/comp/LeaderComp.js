import React, { Component } from 'react';
import {CGROUP, CULTURE} from '../data/culture'

class LeaderComp extends Component{

    state={
        general:{
            martial:16,
            culture:'northgermanic',
            cgroup:''
            
        }
    }

    render(){
        return(

            <div className="LeaderComp">
                <h3>Leader</h3>
                
                martial : <input  type="number" name='martial'  min='0' style={{width:'50px'}} onChange=""/>


            </div>
        );
    }
}

export default LeaderComp;