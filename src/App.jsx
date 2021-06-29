import React from "react";
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
  return (
    <div>
      <Greeter phrase="Hola" name="Daze" />
      <Greeter phrase="Wimwega" name="Rico" />
      <Greeter phrase="I AM" name="BATMAN" />
      {/* <input */}
    </div>
  );
};

export default App;