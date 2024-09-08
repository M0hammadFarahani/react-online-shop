import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function Detail() {

    const [detail, setDetail] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => res.json())
        .then(data => setDetail(data))
    }, [])

    return (
        <>
        <h1 className="text-center my-5">Detail</h1>
        <div className="card mx-auto p-4" style={{maxWidth: '540px'}}>
            <div className="row align-items-center g-0">
                <div className="col-sm-4">
                    <img src={detail.image} className="img-fluid rounded-start" />
                </div>
                <div className="col-sm-8">
                <div className="card-body">
                    <p className="card-text">{detail.description}</p>
                    <p className="card-text">Category: <small className="text-muted">{detail.category}</small></p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}



export default Detail