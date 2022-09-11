import './App.css';
import React,  {useState, useEffect} from 'react';
import User from './User';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() =>{
    setCount(count + 1);
  }, []);{/* dependency arrays */}

  const data = [
    {
      "id" : 1,
      "name" : "John",
      "email" : "john@example.com",
      "country" : "United States",
    },
    {
      "id" : 2,
      "name" : "Nilla",
      "email" : "nilla@example.com",
      "country" : "Ghana",
    },
    {
      "id" : 3,
      "name" : "Juda",
      "email" : "juda@example.com",
      "country" : "Netherlands",
    }
  ]

  return (
    <div className="App">

      {/* {data.map(item => <div className='peeps'> 
        <div>
          <p> Name : {item.name}</p>
          <p>Country : {item.country}</p>
          <p>Email : {item.email}</p>
        </div>
      </div>)} */}

      <User/>
      {/* <Navbar userName={"Queen"}/> */}
      <p>{count}</p>
      {/* Updating state */}
      <button onClick={() => setCount(count+1)}>Update</button>
    </div>
  );
}

export default App;
