import React from 'react';

const Recrutez = ({ display, set_view, handleModal }) => {
    return (
        <div className={display ? "fullContent" : "smallContent"}>

            <h2 id='titreRecrutez'>
                Dans tous les
                <br />
                établissements
            </h2>
            <h4>
                La meilleure
                <strong>réponse </strong>
                à l’
                <strong>Obligation d’Emploi</strong>
                <br />
                de
                <strong>Travailleurs Handicapés</strong>
            </h4>
            <button
                className={display ? 'btnLarge' : 'btnSmall'}
                onClick={() => { !display ? set_view() : handleModal("recrutez") }}>
                {display ? 'Recrutez' : '. . . '}
            </button>

            <div className={display ? 'dis' : 'disHide'} >
                <div>✔ Stage, Alternance, CDD et CDI</div>
                <div>✔ CDD Tremplin de 4 à 24 mois</div>
                <div>✔ Prestation avec EA, ESAT et TIH</div>
                <div>✔ Déduction AGEFIPH et FIPHFP</div>
            </div>
        </div>
    )
}

export default Recrutez;