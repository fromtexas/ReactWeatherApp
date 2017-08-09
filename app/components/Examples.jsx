var React = require('react');
var {Link} = require('react-router');
//var Examples = React.createClass({
//    render: function (){
//        return (
//        <h3>Examples Component</h3>
//        );
//    }
//});


var Examples = (props) => {
    return (
        <div>
            <h1 className='text-center'>Examples</h1>
            <p>Here are few examples location to try out:</p>
            <ol>
                <li><Link to='/?location=moscow'>Moscow</Link></li>
                <li><Link to='/?location=london'>London</Link></li>
            </ol>
        </div>
        );
}

module.exports = Examples;