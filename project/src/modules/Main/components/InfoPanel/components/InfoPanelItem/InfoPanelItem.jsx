import React, {Component} from 'react';
import {infoPanelData} from "../../../../../../config";

const InfoPanelItem = (props) => {

    return (
        <div className="information_section_container">
            <div>
                <img src={props.src} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );

};

export default InfoPanelItem;