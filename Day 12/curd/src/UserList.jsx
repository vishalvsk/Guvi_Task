// UserList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
    },
    website: "",
    company: {
      name: "",
    },
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user: ", error);
      });
  };

  const handleEdit = (userId) => {
    setEditingUserId(userId);
    const selectedUser = users.find((user) => user.id === userId);
    setFormData(selectedUser);
  };

  const handleAdd = () => {
      // Implement logic to add a user 
    
    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((response) => {
        setUsers([...users, response.data]);
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: {
            street: "",
            city: "",
            zipcode: "",
          },
          website: "",
          company: {
            name: "",
          },
        });
      })
      .catch((error) => {
        console.error("Error adding user: ", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //  submit details 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUserId) {
      // Implement logic to update an existing user
      axios
        .put(
          `https://jsonplaceholder.typicode.com/users/${editingUserId}`,
          formData
        )
        .then((response) => {
          const updatedUsers = users.map((user) => {
            if (user.id === editingUserId) {
              return { ...user, ...formData };
            }
            return user;
          });
          setUsers(updatedUsers);
          setEditingUserId(null);
        })
        .catch((error) => {
          console.error("Error updating user: ", error);
        });
    }
  };

  return (
    <div className="user-list">
      <h2 className="Responsive">Responsive User List</h2>
      <div className="cards-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>
              Address: {user.address.street}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <div className="buttons">
              <button onClick={() => handleEdit(user.id)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <h2>{editingUserId ? "Edit User" : "Add User"}</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address.street"
          placeholder="Street"
          value={formData.address.street}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address.city"
          placeholder="City"
          value={formData.address.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address.zipcode"
          placeholder="Zipcode"
          value={formData.address.zipcode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company.name"
          placeholder="Company"
          value={formData.company.name}
          onChange={handleChange}
        />
        <button type="submit">{editingUserId ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default UserList;
