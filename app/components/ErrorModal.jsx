var React = require('react');

var ErrorModal = React.createClass({

    close: function(e){
        this.props.onOpen();
        e.preventDefault();
    },
    render: function(){
        var {errorMessage} = this.props;
        return(
            <div className='reveal tiny text-center' id='error-modal'>
              <h4>Error</h4>  
              <p>{errorMessage}</p>
              <p><button onClick={this.close} className='button'>ok</button></p>
            </div>
        );
    }
});

module.exports = ErrorModal;