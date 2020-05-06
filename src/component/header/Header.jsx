import React from 'react';
import Logo from "../../img/Logo.png"



const Header = () => {

    return (
        <div className="Header">
            <div className="container-fluid">
                <div className="row headerContent">
                    <div className="col col-sm-6 ">
                        <img id="logo" src={Logo} alt='logo sts' width="90px" />
                        <h1><strong>Handi Interim</strong> & <b>Recrutement</b></h1>
                    </div>

                    <div className="col col-xs-4 headerItems  ">
                        <div>Avant la</div>
                        <div> mission</div>
                    </div>
                    <div className="col col-xs-4 headerItems ">
                        <div>Pendant la</div>
                        <div> mission</div>
                    </div>
                    <div className="col  col-xs-4 headerItems ">
                        <div>Après la</div>
                        <div>mission</div>
                    </div>
                    <div id="blackItem" className="col  col-xs-4 headerItems ">
                        <div>Notre </div>
                        <div>agence</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;