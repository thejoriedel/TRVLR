//THIS IS A CONTAINER FOR THE YELP RESULTS

import React from 'react';
import ReactDOM from 'react-dom';
import YelpResult from './YelpResult';

class Suggestions extends React.Component {

    render() {

        let yelpSuggs = this.props.data.map(function (x, i) {
            return <YelpResult data={x} key={i} />
        });
        console.log(this.props);
        return (
            <div className="yelpResult">
                <span className="result"> Results </span>
                {yelpSuggs}
            </div>
        );
    }
}
export default Suggestions;