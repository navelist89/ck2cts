import React, { Component } from 'react';

import RETINUES from '../data/retinues'
import HORDES from '../data/hordes'
import TRIBALS from '../data/tribals'


import Troops from './units/Troops';
import Retinues from './units/Retinues';
import UnitSum from './units/UnitSum';
import CustomRetinue from './units/CustomRetinue';

class UnitComp extends Component {
    state={
      additional_count:{},
      custom_retinue_count:{},
      retinue_count:{},
      hordes_count:{},
      tribals_count:{},
  
      total_count : {}
    }
  
    onChangeCustomRetinue=(count)=>{
      this.setState({custom_retinue_count:count},
      ()=>{this.onValueChanged()});
    }
    onChangeRetinue=(e)=>{
      this.setState(
        {retinue_count:{...this.state.retinue_count, [e.target.name]:e.target.value}},
        ()=>{this.onValueChanged()}
      )
    }
    onChangeHordes=(e)=>{
      this.setState(
        {hordes_count:{...this.state.hordes_count, [e.target.name]:e.target.value}},
        ()=>{this.onValueChanged()}
      )
    }
    onChangeTribals=(e)=>{
      this.setState(
        {tribals_count:{...this.state.tribals_count, [e.target.name]:e.target.value}},
        ()=>{this.onValueChanged()}
      )
    }
    onChangeRawUnit = (e)=>{
      this.setState(
        {additional_count:{...this.state.additional_count, [e.target.name]:Number(e.target.value) }},
        ()=>{this.onValueChanged()} 
        )
      
    }
    onValueChanged = ()=>{
      let l_total = {}
  
      //Additional
      for(let key in this.state.additional_count){
        l_total[key] = this.state.additional_count[key]
      }
  
      //CustomRetinues
      for(let key in this.state.custom_retinue_count){
        if(!(key in l_total)){
          l_total[key] = this.state.custom_retinue_count[key];
        }else{
          l_total[key] = this.state.custom_retinue_count[key] + l_total[key];
        }
      }
  
      //Retinues
      let l_retinue_pairs={
        1:{
          'list':this.state.retinue_count,
          'refs':RETINUES,
        },
        2:{
          'list':this.state.hordes_count,
          'refs':HORDES
        },
        3:{
          'list':this.state.tribals_count,
          'refs':TRIBALS
        }
      }
      
      Object.keys(l_retinue_pairs).forEach((number)=>{
        
          let retinues = l_retinue_pairs[number]['list']
          let REFS = l_retinue_pairs[number]['refs']
          
          for(let retinue_name in retinues){
            let retinue_amount = retinues[retinue_name]
            for(let unit_name in REFS[retinue_name].composition){
              let unit_amount = retinue_amount * REFS[retinue_name].composition[unit_name];
              if (unit_name in l_total)
                l_total[unit_name]=unit_amount + l_total[unit_name]
              else
                l_total[unit_name]=unit_amount
            }
          }
        });
  
      
      this.setState({
        total_count:l_total
      })
      
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevState.total_count!==this.state.total_count){
        //console.log(this.state);
        this.props.action(this.state.total_count);
      }
    }
    render() {
      return (
        <div className='UnitComp'>
  
  
  
          
          
  
          <div>
            <h3>Retinue</h3>
            <table>
              <Retinues data={RETINUES} action={this.onChangeRetinue} />
            </table>
          </div>
  
          <div>
            <h3>Custom Retinue</h3>
            <table>
            <CustomRetinue action={this.onChangeCustomRetinue}/>
            </table>
          </div>
  
          <div>
  
            <h3>Hordes</h3>
            <table>
              <Retinues data={HORDES} action={this.onChangeHordes} />
            </table>
  
            <h3>Tribals</h3>
            <table>
              <Retinues data={TRIBALS} action={this.onChangeTribals} />
            </table>
  
            
  
          </div>
  
          <h3>Additional Troops</h3>
            <table >
            <Troops action={this.onChangeRawUnit} />  
            </table>
  
  
          <h3> Total Troops </h3>
            <UnitSum data={this.state.total_count}/>
  
          
          
        </div>
      );
    }
  }
  
  export default UnitComp;
  