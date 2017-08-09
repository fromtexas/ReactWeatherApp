var React = require('react');

//var Show = React.createClass({
//    render: function (){
//       var {location, temp} = this.props;
////        var location = this.props.location;
////        var temp = this.props.temp;
//        return (
//        <h4>in {location} is {temp}</h4>
//        )
//    }
//});

var Show = ({location, temp}) => {
    
        
        
         return (
          <h4 className='text-center'>In <span className='location'>{location}</span> is <span className='temp'>{temp}C</span></h4>
         )
    
};

module.exports = Show;