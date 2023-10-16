import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Lettersadmin.css'
import dhimge from './user.png';
import { Link } from 'react-router-dom';

function Lettersadmin() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Fetch data from the backend

    fetch('http://localhost:9090/api/learns/getAllf',{
        headers:{ "Authorization": `Bearer ${localStorage.getItem("token")}`    }
    }).then(res=>res.json())
    .then(data=>{
        setItems(data);
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
  }, []);

  const handleUpdateClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleUpdate = (updatedItem) => {
    // Make an API request to update the item on the backend
    axios.put(`/api/learns/puted/${updatedItem.id}`, updatedItem)
      .then((response) => {
        // Update the data in the frontend
        const updatedItems = items.map(item => item.id === updatedItem.id ? updatedItem : item);
        setItems(updatedItems);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };
  

  return (
    <div className='wrap'>
<div className="Header">
        <h1 className='title'>NIPO</h1>
        <div className='cards'>
          <div className='btn'>
          <img className='im' src={dhimge} />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}} to={"/admin"}>USERS</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/597da4049ec7b1ee932d1b95ca424e0d.svg' />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/lettersadmin"}>LETTERS</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg' />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/home"}>LOGOUT</Link></p>
          </div>
        </div>
      </div>
    <div className='jollyo'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Correct</th>
            <th>Image</th>
            <th>Letter</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.correct}</td>
            <td>{item.image}</td>
              <td>{item.letter}</td>
              <td>{item.option1}</td>
              <td>{item.option2}</td>
              <td>{item.option3}</td>
              <td>
                <button className='buttonk' onClick={() => handleUpdateClick(item)}>UPDATE </button> 
                <button className='buttonk'>DELETE</button> 
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <form>
              <label>ID:</label>
              <input type="text" value={selectedItem.id} readOnly />
              <label>Correct:</label>
              <input type="text" value={selectedItem.correct} />
              <label>Image:</label>
              <input type="text" value={selectedItem.image} />
              <label>Letter:</label>
              <input type="text" value={selectedItem.letter} />
              <label>Option 1:</label>
              <input type="text" value={selectedItem.option1} />
              <label>Option 2:</label>
              <input type="text" value={selectedItem.option2} />
              <label>Option 3:</label>
              <input type="text" value={selectedItem.option3} />
              <button type="submit">Update</button>
            </form>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
     )}
    </div>
    </div>
  );
}

export default Lettersadmin;
