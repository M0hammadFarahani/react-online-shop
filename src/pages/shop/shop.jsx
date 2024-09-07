import { useEffect, useState } from "react"




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
                            <button className="btn btn-info btn-sm fw-bold">-</button>
                            <span className="mx-2">0</span>
                            <button className="btn btn-info btn-sm fw-bold">+</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default Shop