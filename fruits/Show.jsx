const React = require('react');
//const fruits = require('./Index');

class Show extends React.Component{
    render(){
        //console.log(this.props)
        //^ Receive data from fruits.js

        const fruit = this.props.fruit
        const presentDate = this.props.presentDate

        const sayHello = () => console.log('hello');

        return( 
            <div style={{backgroundColor:'lightpink'}}>
        <h1> Show Page </h1>
        <h3> The fruit name is {fruit.name} and the color is {fruit.color}</h3>
        <h4> {fruit.readyToEat ? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }</h4>
        <h6>Year: {presentDate} {sayHello()}</h6>
        
        </div>
        )
    }
}

module.exports  = Show;