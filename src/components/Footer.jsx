import React from "react";

const d = new Date();

function Footer(){
    return (
        <footer>
            <p>Copyright {d.getFullYear()}</p>
        </footer>
    );
}

export default Footer;