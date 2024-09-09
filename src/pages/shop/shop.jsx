import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Shop({ search, handleBuy }) {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            setProducts(data)
        })
    }, [])

    return (
        <div className="container">
            <h1 className="text-center my-5">Shop</h1>
            {
                isLoading ?
                <div class="d-flex justify-content-center">
                    <div class="spinner-border mt-5" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div>
                :
                <div className="row">
                    {
                        products.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
                        }).map((item) => (
                            <div className="col-lg-4 col-md-6 p-5" key={item.id} style={{height: '500px'}} >
                                <img src={item.image} className="w-100 h-50 mb-4" />
                                <h5>{item.title}</h5>
                                <p className="fw-bold mb-4">${item.price}</p>     
                                <div className="btn-group">
                                    <button className="btn btn-success" onClick={() => handleBuy(item)}>Buy</button>
                                    <Link className="btn btn-warning" to={`/detail/${item.id}`}>Detail</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
            
            <ToastContainer/>
        </div>
    )
}



export default Shop