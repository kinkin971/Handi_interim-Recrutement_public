import React from 'react';

const Postulez = ({ display, set_view, handleModal }) => {
    return (
        <div className={display ? "fullContent" : "smallContent"} >
            <h2 className="titrePostulez">
                Pour tous les
                    <br />
                secteurs d’activité
                </h2>
            <h4>
                La première <strong >Entreprise Adaptée</strong> qui facilite le
                    <br />
                <strong>Travail Temporaire</strong>
                des
                    <strong >Personnes Handicapés</strong>
            </h4>

            <button
                className={display ? 'btnLarge' : 'btnSmall'}
                onClick={() => { !display ? set_view() : handleModal("postulez") }}>
                {display ? 'Postulez' : '. . . '}
            </button>

            <div className={display ? 'dis' : 'disHide'} >
                <div>✔ BTP, Industrie, Tertiaire, Téléservice, etc.</div>
                <div>✔ Engagement national à 100% RQTH</div>
                <div>✔ Agence située à Saint-Benoît (86 - Vienne)</div>
                <div>✔ Équipe disponible sur rendez-vous</div>
            </div>

        </div>
    )
}

export default Postulez;
