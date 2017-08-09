var React = require('react');
var Form = require('Form');
var Show = require('Show');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return {
          isLoading: false,
          errorMessage: undefined
        }
    },
    handleSearch: function(location){
        var that = this;
        
        //debugger;
        this.setState({isLoading:true});
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location, 
                temp: temp,
                isLoading: false
            })  
        },function(e){
            console.log(e);
            that.setState({
              isLoading: false,  
              errorMessage: JSON.stringify(e.message)
            })
        })

    },
    componentDidMount: function(){
        var location = this.props.location.query.location;
        if (location){
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;
        if (location){
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    hide: function(){
       this.setState({errorMessage: undefined});  
    },
    render: function () {
        var {temp, location, isLoading, errorMessage} = this.state;
        var that = this;
        function renderMessage(){
          if(isLoading){
              return <h3 className='text-center'>Fetching weather...</h3>;
            }else if(temp && location){
                return <Show location={location} temp={temp}/>;
            } 
        };
        
        function error(){
            
            if(errorMessage){
                return <ErrorModal errorMessage={errorMessage} onOpen={that.hide}/>
            }
            
        };
        
        
        return (
            <div>
              <h1 className='text-center'>Get Weather</h1>
                <Form onSearch={this.handleSearch}/>
                {renderMessage()}
                {error()}
            </div> 
        );
    }
})

module.exports = Weather;