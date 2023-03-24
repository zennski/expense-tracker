import Data from './data';
import Card from './card';
import expenses from './data';
import './App.css';


function createCard(Data) {
  return (
    <Card
    key={Data.id}
    name={Data.name}
    price={Data.price}
    />
  )
}

    let total = expenses.reduce(function(tot, arr) { 
      // return the sum with previous value
      return tot + arr.price;
      // set initial value as 0
    },0);
    
export default function App() {
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      {Data.map(createCard)}
      <h3>Total: {total}</h3>
    </div>
  );
}


