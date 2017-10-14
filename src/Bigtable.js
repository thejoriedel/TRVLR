import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js'
import Mainpage from './Mainpage.js'
import Mongoose from 'mongoose'

class Bigtable extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     mention:'Pick',
     first:'international',
     second:'domestic',
     saveit:
     { 
      'historical': false,
      'outdoors': false,
      "international": false,
      "domestic": false,
      "warm": false,
      "cold": false,
      "wine": false,
      "beer": false
    },
     getit:[],
     firstpics:'https://www.zicasso.com/sites/default/files/styles/original_scaled_down/public/cleanup/sampletrip/Greece_Santorini_Tour_Stairs_in_Santorini.jpg',
     secondpics:'https://wallpapertag.com/wallpaper/middle/3/3/f/240898-vertical-las-vegas-wallpaper-1080x1920-notebook.jpg',
   };
   this.toggler = this.toggler.bind(this)
   this.toggle = this.toggler.bind(this)
 }
 toggle(e) {
  e.preventDefault()  
  let val = this.state.second
  if(this.state.second === 'domestic'){
     this.setState(
       {
         saveit: { ...this.state.saveit, "domestic": true },
         first:'historical',
         second:'outdoor',
         firstpics:'https://i.pinimg.com/564x/3a/94/6e/3a946e1c59d1ba81748bd34c2b44a93d--paris-louvre-le-louvre.jpg',
         secondpics:'http://37.media.tumblr.com/3dee2844ff514e61a853c7a4e8dc7afa/tumblr_nag86fNEz11rub0hvo1_500.png'
       })
     }
     if(this.state.second === 'outdoor') {
       this.setState(
         {
          saveit: { ...this.state.saveit, "outdoor": true },
           first:'warm',
           second:'cold',
           firstpics:'http://40.media.tumblr.com/7085a89f414bbacc99c5304711181092/tumblr_nsh92oLqhF1ro3fdho1_500.jpg',
           secondpics:'https://i.pinimg.com/736x/48/5e/23/485e2315368eacc660b9fe54ba45db1c--snow-covered-trees-winter-trees.jpg'
         })
     }
    if(this.state.second === 'cold') {
      this.setState(
        {
          saveit: { ...this.state.saveit, "cold": true },
          first:'Wine',
          second:'Beer',
          firstpics:'https://www.homemadeinterest.com/wp-content/uploads/2015/11/Wine-Pairing-Party_vertical-wine-bottles.jpg',
          secondpics:'http://25.media.tumblr.com/16e0ac3a093bc0d27315e5c844eb7450/tumblr_mfm7gerPRU1qmstnqo1_500.jpg'
        })
    }
    if(this.state.second === 'beer') {
      this.setState(
        {
          saveit: { ...this.state.saveit, "beer": true },
          mention:'Thank you!',
          first:'thanks',
          second:'thanks',
          firstpics:'http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/07/white-background-2.jpg',
          secondpics:'http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/07/white-background-2.jpg'
        })
    }
     if(this.state.second === '') {
       const url = 'mongodb://thejozhou:database123@ds119585.mlab.com:19585/trvlr'
      $.get(url ,(data, status) => {
        this.setState({getit:data})
      });
    }
 }

 toggler(e) {
   e.preventDefault()  
   let val = this.state.second   
    if(this.state.first === 'international'){
      this.setState(
        {
          saveit: { ...this.state.saveit, "international": true },
          first:'historical',
          second:'outdoor',
          firstpics:'https://i.pinimg.com/564x/3a/94/6e/3a946e1c59d1ba81748bd34c2b44a93d--paris-louvre-le-louvre.jpg',
          secondpics:'http://37.media.tumblr.com/3dee2844ff514e61a853c7a4e8dc7afa/tumblr_nag86fNEz11rub0hvo1_500.png'
        })
      }
      if(this.state.first === 'historical') {
        this.setState(
          {
            saveit: { ...this.state.saveit, 'historical' :true },
            first:'warm',
            second:'cold',
            firstpics:'http://40.media.tumblr.com/7085a89f414bbacc99c5304711181092/tumblr_nsh92oLqhF1ro3fdho1_500.jpg',
            secondpics:'https://i.pinimg.com/736x/48/5e/23/485e2315368eacc660b9fe54ba45db1c--snow-covered-trees-winter-trees.jpg'
          })
      }
      if(this.state.first === 'warm') {
        this.setState(
          {
            saveit: { ...this.state.saveit, 'warm': true },
            first:'wine',
            second:'beer',
            firstpics:'https://www.homemadeinterest.com/wp-content/uploads/2015/11/Wine-Pairing-Party_vertical-wine-bottles.jpg',
            secondpics:'http://25.media.tumblr.com/16e0ac3a093bc0d27315e5c844eb7450/tumblr_mfm7gerPRU1qmstnqo1_500.jpg'
          })
      }
      if(this.state.first === 'wine') {
        this.setState(
          {
            saveit: { ...this.state.saveit, "wine": true },
            mention:'Thank you!',
            first:'thanks',
            second:'thanks',
            firstpics:"http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/07/white-background-2.jpg",
            secondpics:"http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/07/white-background-2.jpg"
          })
      }
      if(this.state.first === '') {
        $.get(`/result` ,(data, status) => {
          this.setState({getit:data})
        });
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
        toggle={this.toggle}
        toggler={this.toggler}
        firstpics={this.state.firstpics}
        secondpics={this.state.secondpics}/>
     </div>     
   )
 }
}
export default Bigtable;