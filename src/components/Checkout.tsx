import Thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg'
import Delete from '../assets/images/icon-delete.svg'
import useCount from '../context/count-context'

export default function Checkout() {

    const { count, setCount, setCheckout } = useCount();


    return <div className='flex flex-col gap-3'>
        <div className='flex justify-between items-center gap-4'>
            <img className='h-10 rounded' src={Thumbnail1} alt="product-thumbnail" />
            <p className='text-sm text-dark-grayish-blue'>Fall Limited Edition Sneakers $125 X {count} <span className='font-bold text-black'> ${125 * count} </span></p>
            <img className='hover:cursor-pointer' onClick={() => { setCount(0); setCheckout(false) }} src={Delete} alt="delete icon" />
        </div>
        <button className="bg-oragne-100 w-full justify-center py-3 rounded-xl font-semibold hover:cursor-pointer hover:opacity-70 transition-all duration-100">Checkout</button>
    </div>
}

