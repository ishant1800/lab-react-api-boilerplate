import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://reactnd-books-api.udacity.com/books`, { headers: { 'Authorization': 'whatever-you-want' }})
    .then(res => {
      setData(res.data.books);
    })
    .catch(err => {
      console.log("Error:", err);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <div className='flex'>
            <img src={item.imageLinks.smallThumbnail} alt={item.title}></img>
            <p>{item.description}</p>
          </div>
          {item.authors.map((author, index) => (
            <span key={index}>{author}</span>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
