import React from 'react';
import "./main_menu.css";

function Main_menu() {
    return (
        <div className="main_menu">
            <div className="image imageA">
                <img src="hv_logo.png" alt="HV Logo" />
            </div>
            <div className="image imageB">
                <img src="home.png" alt="Home Icon" />
                <div className="text">Home</div>
            </div>
            <div className="image imageC">
                <img src="applications1.png" alt="Applications Icon" />
                <div className="text">Applications</div>
            </div>
            <div className="image imageC">
                <img src="anlaytics1.png" alt="Analytics Icon" />
                <div className="text">Analytics</div>
            </div>
            <div className="image imageC">
                <img src="workflow1.png" alt="Workflow Icon" />
                <div className="text">Workflows</div>
            </div>
            <div className="image imageC">
                <img src="dev_hub1.png" alt="Dev Hub Icon" />
                <div className="text">Dev Hub</div>
            </div>
            <div className="image imageC">
                <img src="account1.png" alt="Account Icon" />
                <div className="text">Account</div>
            </div>
            <div className="image imageD">
                <img src="consent1.png" alt="Consent Manager Icon" />
                <div className="text">Consent Manager</div>
            </div>
        </div>
    );
}

export default Main_menu;
