import React, { useState, useEffect } from "react";

const ProductList = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getProducts = () => {
            setLoading(true);
            fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    setFilter(data);
                })
                .catch(error => console.error(error))
                .finally(() => setLoading(false));
        };
        
        getProducts();
    }, []);
    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2">All</button>
                    <button className="btn btn-outline-dark me-2">category</button>
                    <button className="btn btn-outline-dark me-2">category</button>
                    <button className="btn btn-outline-dark me-2">category</button>
                    <button className="btn btn-outline-dark me-2">category</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                                            <p class="card-text">${product.price}</p>
                                            <a href="#" class="btn btn-outline-dark">Buy Now</a>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div className="ProductList">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}
export default ProductList;