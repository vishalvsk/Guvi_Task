import "./App.css";
// App.jsx
import React from 'react';
import UserList from './UserList'; // Import the UserList component

const App = () => {
  return (
    <div className="App">
      <UserList /> {/* Render the UserList component */}
    </div>
  );
};

export default App;
