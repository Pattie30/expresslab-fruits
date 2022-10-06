const React = require('react');
const fruits = require('../models/fruits');

class Edit extends React.Component {
    render(){
        console.log('from edit page', this.props.fruit);
        return(
            <div>
                <h1>
                     Edit Page
                </h1>
<form action=''>
    Name: <input type='text' name='name' defaultValue={fruit.name} />

     <br/>
    Color: <input type= 'text' name='color' detaultValue={fruit.color} />

     
    Ready to Eat:{ fruits.readyToEat ? <input type='checkbox' 
    name='readyToEat' defaultChecked/> :<input type='checkbox'
    name='readyToEat'/>}
   
    <input type='submit' value='Update Fruit' />

</form>

            </div>
        )
    }
}