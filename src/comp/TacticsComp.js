import React, { Component } from 'react';

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

        obj['general'] = nextProps.data.general
        if(nextProps.data.terrain)
            obj[nextProps.data.terrain] = true
        return obj;
    }

    render(){
        console.log(this.state)
        return (<div>Here is result</div>)
    }
}

export default TacticsComp;