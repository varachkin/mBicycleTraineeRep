import React, {Component} from 'react';
import InfoPanelItem from "./components/InfoPanelItem/InfoPanelItem";
import {infoPanelData} from "../../../../config";
import {v4 as uuidv4} from "uuid";

const InfoPanel = () => {

    return (
        <>
            {infoPanelData.map((infoItem) => <InfoPanelItem key={uuidv4(`${infoItem}`)} src={infoItem.src}
                                                            title={infoItem.title}
                                                            text={infoItem.text}/>)}

        </>
    );
};


export default InfoPanel;