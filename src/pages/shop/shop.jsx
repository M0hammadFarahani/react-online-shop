import { useEffect, useState } from "react"
import { Link } from "react-router-dom"




function Shop() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">
            <h1 className="text-center my-5">Shop</h1>
            <div className="row">
                {
                    products.map((item) => (
                        <div className="col-lg-4 col-md-6 p-5" key={item.id} style={{height: '500px'}} >
                            <img src={item.image} className="w-100 h-50 mb-4" />
                            <h5>{item.title}</h5>
                            <p className="fw-bold mb-4">${item.price}</p>     
                            <div className="btn-group">
                                <button className="btn btn-success">Buy</button>
                                <Link className="btn btn-warning" to={`/detail/${item.id}`}>Detail</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default Shop