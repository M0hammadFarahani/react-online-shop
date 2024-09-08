function Cart({ cart, setCart }) {

    const handleRemove = (itemId) => {
        const filteredCart = cart.filter((item) => {
            return item.id !== itemId
        })

        setCart(filteredCart)
    }

    return (
        <>
        <h1 className="text-center my-5">Cart</h1>
        {
            cart.map((item) => (
                <div className="w-50 p-4 bg-dark text-light offset-3 mb-4 rounded">
                    <h2 className="mb-4">{item.title}</h2>
                    <h4 className="text-success mb-5">${item.price}</h4>
                    <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
            ))
        }
        </>
    )
}



export default Cart