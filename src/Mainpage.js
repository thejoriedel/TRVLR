import React from 'react';
import ReactDOM from 'react-dom';
import Threeimgs from './Threeimgs.js'
class Mainpage extends React.Component {


 render() {
   return (
     <div id='Mainpage'>
        <Threeimgs
         mention = {this.props.mention}
          first={this.props.first}
          second={this.props.second}
         toggler={this.props.toggler}
         firstpics={this.props.firstpics}
         secondpics={this.props.secondpics}
          />
         <div id='Righthalf'>
             </div>
     </div>     
   )
 }
}
export default Mainpage;