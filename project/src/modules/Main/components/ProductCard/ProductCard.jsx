import * as React from 'react';
import BasicRating from "../../../BasicRating/BasicRating";
import DisableElevation from "./components/ButtonsGroup/ButtonsGroup";


export default function ProductCard(props) {
    return (
        <div className="product_card">
            <div className="product_card_img">
                <img src={props.src} alt=""/>
            </div>
            <div className="product_card_description">
                <h4>{props.title}
                </h4>
            </div>
            <div className="product_card_cost">
                $ {props.cost}
            </div>
            <BasicRating/>
            <ul className="product_card_panel">
                <DisableElevation/>
            </ul>
        </div>
    );
}