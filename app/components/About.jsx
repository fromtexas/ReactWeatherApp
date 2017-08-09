var React = require('react');

//var About = React.createClass({
//  render: function(){
//      return(
//        <h3>About Component</h3>
//      );
//  }  
//});

var About =  (props) => {
    return(
        <div>
            <h1 className='text-center'>About</h1>
            <p>This is a weather application build on React.</p>
            <p>Some of the tools I used:</p>
            <ul className='no-bullet'>
                <li><a href='#'>React</a> - JS library.</li>
                <li><a href='#'>Open Weather Map</a> - I used Open Weather Map API to search for weather data by city name.</li>
            </ul>
        </div>
      );
};

module.exports = About;