import React from "react";
import ProductList from "./ProductList";

const Home = () => {
    return (
        <div className="Hero">
            <div class="card text-bg-dark">
                <img src="images/homebackground.png" class="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                    <p className="card-text"><small></small></p>
                </div>
            </div>
            <ProductList/>
        </div>
    );
}

export default Home;