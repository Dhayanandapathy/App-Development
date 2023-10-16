
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import dhimge from './user.png';

//import StudtListing from './Crud/StudtListing'

function Admin(){
const [items, setItems] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
const nav = useNavigate();

const token = localStorage.getItem("token")

// if(!token)nav("/")

useEffect(() => {
  // Fetch data from the backend
  axios.get('http://localhost:9090/api/v1/auth/getAllUsers')
    .then((response) => {
      setItems(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
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
  axios.put(`/api/items/${updatedItem.id}`, updatedItem)
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

// Render items in a table
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
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/login"}>LOGOUT</Link></p>
          </div>
          
        </div>
      </div>
    
      
  <div className='boxxx'>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td>{item.uid}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td>{item.name}</td>
          <td>
            <button className='buttonk' onClick={() => handleUpdateClick(item)}>UPDATE</button>
            <button className='buttonk'>DELETE</button> 
            {/* Add buttons for editing and deleting */}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  {isModalOpen && selectedItem && (
        <div className="modal">
          <div className="modal-content">
            {/* Display the selected item's data in a form for editing */}
            <form>
              <label>ID:</label>
              <input type="text" value={selectedItem.id} readOnly />
              <label>Username:</label>
              <input type="text" value={selectedItem.username} />
              <label>Email:</label>
              <input type="text" value={selectedItem.email} />
              <label>Name:</label>
              <input type="text" value={selectedItem.name} />
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


     
       

export default Admin;
  {/*  <StudtListing/>*/}