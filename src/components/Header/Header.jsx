import React, { Component } from "react";

class Header extends Component {
    render() {
        console.log("Header – Rendered");

        return (
            <div>
                <header width='250px'>
                    <img alt="" width='100px'
                        src='https://static.thenounproject.com/png/201053-200.png'
                    >
                    </img>
                </header>
            </div>
        );
    }
}

export default Header;
