import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import magictriangle from '../images/Firefly magic triangle flying through space 9004.jpg';
import magicdodecahedron from '../images/Firefly dodecahedron flying through space 9004.jpg';
import magicicosahedron from '../images/Firefly Icosahedron flying through space 86637.jpg';
import magicoctahedron from '../images/Firefly magic Octahedron flying through space 9004.jpg';
import magicsphere from '../images/Firefly magic sphere flying through space 86637.jpg';
import magicsquare from '../images/Firefly magic square flying through space 9004.jpg';
import magictorus from '../images/Firefly magic torus flying through space 86637.jpg';

export default class ShoppingPage extends React.Component {
    // constructor(props) {
    //     super(props);

    //     const instance = axios.create({
    //         baseURL: 'http://jsonplaceholder.typicode.com/',
    //         timeout: 15000,
    //     });
    // }

    render() {
        return(
            <section className="products">
                <div className="product-card">
                    <div className="product-image">
                        <img src={magictriangle}></img>
                    </div>
                    <div className="product-info">
                        <h5>Magic Triangle</h5>
                        <h6>$6.99</h6>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={magicdodecahedron}></img>
                    </div>
                    <div className="product-info">
                        <h5>Magic Triangle</h5>
                        <h6>$6.99</h6>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={magicicosahedron}></img>
                    </div>
                    <div className="product-info">
                        <h5>Magic Triangle</h5>
                        <h6>$6.99</h6>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={magicoctahedron}></img>
                    </div>
                    <div className="product-info">
                        <h5>Magic Triangle</h5>
                        <h6>$6.99</h6>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={magicsphere}></img>
                    </div>
                    <div className="product-info">
                        <h5>Magic Triangle</h5>
                        <h6>$6.99</h6>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={magicsquare}></img>
                    </div>
                    <div className="product-info">
                        <h5>Magic Triangle</h5>
                        <h6>$6.99</h6>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={magictorus}></img>
                    </div>
                    <div className="product-info">
                        <h5>Magic Triangle</h5>
                        <h6>$6.99</h6>
                    </div>
                </div>
            </section>
        );  
    }
}

/**
 * 
 * 
 * Module '"c:/src/WordleSim/client/frontend/node_modules/@types/react/index"' can only be default-imported using the 'esModuleInterop' flagts(1259)
index.d.ts(32, 1): This module is declared with 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.
 */

