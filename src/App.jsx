import React, { useState, useEffect } from "react";
import Greeter from './components/Greeter';

// function App() {
//   return (
//     <div>
//       <h1> Hola Daesy! </h1>
//     </div>
//   );
// };
// export default App;

let App = () => {
  const [username, setUsername] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [loaded]);

  if (loaded) {
    return (
      <>
        <Greeter phrase="Hola" name="Daze" />
        <Greeter phrase="Wimwega" name="Rico" />
        <Greeter phrase="I AM" name="BATMAN" />
        <input type="text" placeholder="Type your username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
        <p>You are logging in as {username}!</p>
      </>
    );
  } else {
    return (
      <>
        <h2>Pagina Loading...</h2>
        <button onClick={() => setLoaded(true)}>Load Pagina</button>
      </>
    )
  }
};

export default App;