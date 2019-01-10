import React, { Component } from 'react';
import TACTICS from '../data/tactics';
import TERRAINS from '../data/terrain'


function filterByElig(){
    let filt = []
    for(let i in TACTICS){
        let tactic = TACTICS[i]
        if(eval(tactic.eligibility) && tactic.phase===eval('phase')){
            filt.push(tactic)
        }
    }
    return filt;
}

class TacticsComp extends Component{

    state={}
    
    static getDerivedStateFromProps(nextProps, prevState){
        let UNITCODE = ["LC", "HA", "CC", "HC", "WE", "HI", "PI", "AR", "LI"]
        let obj = {}
        for(let unitname in UNITCODE){
            obj[UNITCODE[unitname]] = 0;
        }
        for(let name in nextProps.data.unitcount){
            let amount = nextProps.data.unitcount[name]
            obj[name] = amount;
        }
        obj['LCA'] = obj['LC'] + obj['HA'] + obj['CC']
        obj['HCA'] = obj['HC'] + obj['WE']
        obj['MEL'] = obj['HCA'] + obj['HI'] + obj['PI']
        obj['SKM'] = obj['LCA'] + obj['AR']
        obj['ALL'] = obj["LCA"] + obj['HCA'] + obj['AR'] + obj['LI'] + obj['PI'] + obj['HI'];  

        if(obj['ALL']===0) obj['ALL'] = 99999999;
        if(obj['SKM']===0) obj['SKM'] = 99999999;
        if(obj['MEL']===0) obj['MEL'] = 99999999;
        obj['general'] = nextProps.data.general
        for(let i in TERRAINS){
            let terrain = TERRAINS[i]
            obj[terrain] = false;
        }

        obj['days']=0;
        obj['phase']="Skirmish";
        if(nextProps.data.terrain)
            obj[nextProps.data.terrain] = true
        return obj;
    }


    render(){
        
        for(let key in this.state){
            window[key] = this.state[key]
        }

        
        
        let ls = filterByElig()
        
        console.log(ls)
        return (<div>Here is result</div>)
    }
}

export default TacticsComp;