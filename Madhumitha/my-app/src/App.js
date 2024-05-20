import Card from './Components/Card';
import data from './Components/data.json'
import './App.css';

function App() {
  function onClick(){
   console.log("added")
  }
 const Cards = data;
  return (
    <div className="App">
      <h1>My first react Website</h1>
<div className='data-container'>
      {Cards.map((data) => {
        return (
          <Card
          src = {data.img} 
            title={data.Name}
            description = {data.Description}
            cardNumber={data.Id}
            onClick = {onClick()}
            
          >
      
          </Card>
        );
      })}</div>


          </div>
  )
}

export default App;
