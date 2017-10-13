import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js'
import Mainpage from './Mainpage.js'

class Bigtable extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     mention:'Pick',
     first:'International',
     firstpics:'https://www.zicasso.com/sites/default/files/styles/original_scaled_down/public/cleanup/sampletrip/Greece_Santorini_Tour_Stairs_in_Santorini.jpg',
     secondpics:'https://wallpapertag.com/wallpaper/middle/3/3/f/240898-vertical-las-vegas-wallpaper-1080x1920-notebook.jpg',
     second:'Domestic'
   };
   this.toggler = this.toggler.bind(this)
 }

 toggler(e) {
  e.preventDefault()
  if(this.state.first === 'International'){
    this.setState(
      {
        first:'Historical',
        second:'Outdoor',
        firstpics:'https://i.pinimg.com/564x/3a/94/6e/3a946e1c59d1ba81748bd34c2b44a93d--paris-louvre-le-louvre.jpg',
        secondpics:'http://37.media.tumblr.com/3dee2844ff514e61a853c7a4e8dc7afa/tumblr_nag86fNEz11rub0hvo1_500.png'
      })
    }
    if(this.state.first === 'Historical') {
      this.setState(
        {
          first:'Warm',
          second:'Cold',
          firstpics:'http://40.media.tumblr.com/7085a89f414bbacc99c5304711181092/tumblr_nsh92oLqhF1ro3fdho1_500.jpg',
          secondpics:'https://i.pinimg.com/736x/48/5e/23/485e2315368eacc660b9fe54ba45db1c--snow-covered-trees-winter-trees.jpg'
        })
    }
 }

 render() {
   return (
     <div id='Bigtable'>
       <Sidebar />
       <Mainpage
        mention={this.state.mention}
        first={this.state.first}
        second={this.state.second}
        toggler={this.toggler}
        firstpics={this.state.firstpics}
        secondpics={this.state.secondpics}/>
     </div>     
   )
 }
}
export default Bigtable;