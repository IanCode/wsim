import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

export default class TestPage extends React.Component {
    constructor(props) {
        super(props);

        const instance = axios.create({
            baseURL: 'http://jsonplaceholder.typicode.com/',
            timeout: 15000,
        });
    }

    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}