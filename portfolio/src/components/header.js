import React from "react";

export default function Header() {
    return (
        <header className="App-header">
            <img src={`${process.env.PUBLIC_URL}/images/header.jpg`} alt="header"></img>
            <h1>Portfolio</h1>
        </header>
    );
}