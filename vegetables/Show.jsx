const React = require('react');
//const vegetables = require('./Index.');

class Show extends React.Component{
    render(){
        //console.log(this.props)
        const {vegetable} = this.props
        return( 
            <div style={({backgroundColor:'lightpink'})}>
        <h1> Veggie Show Page </h1>
        <div>  
        <h2> The product name is{vegetable.name} </h2>
        <h3>The color is {vegetable.color}</h3>

        <h4> {vegetable.readyToEatv? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }</h4>
        </div>
        </div>
        )
    }
}

module.exports  = Show