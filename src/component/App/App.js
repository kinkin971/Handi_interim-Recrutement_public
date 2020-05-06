import React, { useState } from "react";
import Header from "../header/Header";
import Postulez from "../postuler/Posltulez";
import Recrutez from "../recrutez/Recrutez";


import "../../styles/_Style.app.css";
import logo from '../../img/undraw.png'
import Modal from "../modal/modal_Index";


function App() {
  let [state, setState] = useState({
    postulez: true,
    recrutez: false,
    modal: false,
    type: "postulez"
  });
  console.log(state);
  const handleModal = (...type) => {
    setState({ ...state, modal: !state.modal, type: type });
  };

  const setView = () => {
    setState({ postulez: !state.postulez, recrutez: !state.recrutez });
  };
  return (
    <div className={state.modal ? 'App modalOpacity' : 'App'}>
      <Header />
      <Modal open={state.modal} type={state.type} handleModal={() => handleModal()} />
      <div className="container-fluid" id="app">
        <div className="row">
          <div className={state.postulez ? "Box1 boxLeft" : "Box1 boxRight"}>
            <Postulez handleModal={(type) => handleModal(type)} display={state.postulez} set_view={e => setView()} />
          </div>
          <div className={state.recrutez ? "Box2 boxLeft" : "Box2 boxRight"}>
            <Recrutez handleModal={(type) => handleModal(type)} display={state.recrutez} set_view={e => setView()} />
          </div>
        </div>
      </div>

      <img src={logo} className={state.postulez ? " undrawlogoleft" : " undrawlogoright"} alt="logo" />

    </div>
  );
}

export default App;
