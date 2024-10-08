import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

export default function Page() {
    return <>
    
    <div className="container py-4">
        <div className="row">

            <Header />

            <Nav />

            <div className="col-9">
                <img className="d-block w-100 mb-3" src="https://static.vecteezy.com/system/resources/previews/002/617/609/original/set-of-coffee-type-and-menu-infographic-cup-of-coffee-with-multiple-color-level-of-liquid-ingredient-flat-and-simple-design-vector.jpg" />
                <h1>About Us</h1>
                <p>
                    Nobody loves coffee more than we do. We know literally everything about it, ever. We are the best coffee roasters.
                </p>
            </div>

        </div>
    </div>
    
    </>
  }