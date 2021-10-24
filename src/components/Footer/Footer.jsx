import React from 'react';
import s from './Footer.module.css';

function Footer() {
    return (
        <div className={s.footer}>
            <p> Test the <u>responsiveness</u> of our website and
                try to resize the window.</p>
        </div>
    );
}

export default Footer;