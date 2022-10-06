const React = require('react')


class Index extends React.Component{
    render(){
        const{vegetables} = this.props;
  //console.log(vegetables);
        return(

        
        <div style={styles.container}>
            <h1 style={styles.header}>Veggies</h1>

            <ul style={styles.ulContainer}>
            {vegetables.map((vegetable, idx) => (
            <li key={idx}>
                {''}
                 The <a href = {`/vegetables/${idx}`} >{vegetable.name}</a>
                  is{''}{vegetable.color}
                 {vegetable.readyToEat ?
                 
                     `It is ready to eat`
                : ` It is not ready to eat`}          
                 <a href={`/vegetables/${idx}`}>
                 <img src={ './image/fruitimg1.webp'}>    </img>     
                    
                     </a>
                
                </li>
                
)  )  }
              </ul>
           
        </div>
    )
}
}
const styles = {
    container: {
        backgroundColor: 'lightpink',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        fontSize: '22px',
         color: '#fff'
    },
    ulContainer:{
        backgroundColor: 'lightblue'
    }
    
}



module.exports = Index
