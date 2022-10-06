const React = require('react')

class New extends React.Component {
    render(){
        return(
            <div>
                <h1>Add new fruit</h1>
                <form action= '/fruits' method='POST'>
                    Name: <input type= 'text' name= 'name' /><br/>
                    <br/>
                    Color: <input type= 'text' name='color' />
                    <br/>
                    <br/>
                    Ready to eat: <input type='checkbox' name='readyToEat' />
                    <br/>
                    <br/>
                    <input type='submit' value='Order fruit' />
                </form>
            </div>
        
        
        )
    }
}

module.exports = New