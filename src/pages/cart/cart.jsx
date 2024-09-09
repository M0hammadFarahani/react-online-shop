import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Cart({ cart, setCart }) {

    const handleRemove = (itemId) => {
        const filteredCart = cart.filter((item) => {
            return item.id !== itemId
        })

        setCart(filteredCart)

        toast.error('Removed from cart', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return (
        <>
        <h1 className="text-center my-5">Cart</h1>
        {
            cart.length === 0 ?
            <p className='text-muted text-center pt-5'>There is no product</p>
            :
            cart.map((item) => (
                <div className="w-50 p-4 bg-dark text-light offset-3 mb-4 rounded">
                    <h2 className="mb-4">{item.title}</h2>
                    <h4 className="text-success mb-5">${item.price}</h4>
                    <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
            ))
        }
        <ToastContainer/>
        </>
    )
}



export default Cart