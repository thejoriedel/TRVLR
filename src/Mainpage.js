import React from 'react';
import ReactDOM from 'react-dom';
import Threeimgs from './Threeimgs.js'
class Mainpage extends React.Component {


 render() {
   let result = []
   let split = ['resultone','resulttwo','resultthree','resultfour']
   for(let i=0; i<this.props.data.length; i++) {
    result.push(<div id={split[i]} className='result' onClick={() => {this.props.suggest(this.props.data[i])}}>{this.props.data[i]}</div>)
   }
   return (
     <div id='Mainpage'>
        <Threeimgs
         mention = {this.props.mention}
          first={this.props.first}
          second={this.props.second}
          toggle={this.props.toggle}
         toggler={this.props.toggler}
         firstpics={this.props.firstpics}
         secondpics={this.props.secondpics}
          />
         <div id='Righthalf'>
            {result}
             </div>
     </div>     
   )
 }
}
export default Mainpage;