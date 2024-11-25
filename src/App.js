import React, { useState } from 'react';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <Welcome username={user} />
      ) : (
        <Login onLogin={(username) => setUser(username)} />
      )}
    </div>
  );
}

export default App;
