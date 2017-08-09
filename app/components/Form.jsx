var React = require('react');

var Form = React.createClass({
   
    onFormSubmit: function(e){
        var location = this.refs.location.value;
        
        if(location){
          this.refs.location.value = '';
          //console.log(Form);  
          this.props.onSearch(location);
        }
        
        e.preventDefault(); 
    },
    render: function (){
       return(
         
               <form onSubmit={this.onFormSubmit}>
                <input type='text' placeholder='Search by city' ref='location' />
                <div></div>
                <button className='button hollow expanded'>Find!</button>
               </form>

       ) 
    }
});



module.exports = Form;