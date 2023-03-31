import React from "react";
import { Navbar } from "./Navbar";
import "../styles/main.css";

export const Layout =({children})=> {
    return(
        <React.Fragment>
            <div>
                <Navbar/>
                {children}
            </div>
        </React.Fragment>
    )
}