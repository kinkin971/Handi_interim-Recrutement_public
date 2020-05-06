import React, { useState } from 'react';
import Header from '../header/Header'
import Postulez from '../postuler/Posltulez'
import Recrutez from '../recrutez/Recrutez'
import "../../styles/_Style.app.css"




function App() {

  const [bool, setBool] = useState(false)

  return (
    <>
      <Header />
      <div class="container-fluid" id="app">
        <div class="row">
          {
            bool ? <Postulez /> : <Recrutez />
          }
        </div>
      </div>
      <button onClick={console.log("o")} >valider</button>
    </>
  );
}

export default App;
