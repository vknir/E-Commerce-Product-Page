
import Carousel from "./Carousel"
import Cart from '../assets/images/icon-cart.svg'
import Plus from '../assets/images/icon-plus.svg'
import Minus from '../assets/images/icon-minus.svg'
import useCount from "../context/count-context"


function Hero() {

    const { count, setCount, setCheckout } = useCount();

    const increaseCount = () => {
        setCount(prev => prev + 1)
    }

    const decreaseCount = () => {
        if (count) {
            setCount(prev => prev - 1)
        }
    }

    return <div className=" relative flex flex-col md:flex-row justify-center items-center md:gap-24">




        <Carousel />
        <div className="flex flex-col max-w-[450px] p-6 md:p-0">
            <p className="text-dark-grayish-blue font-semibold mb-4 text-[16px] ">SNEAKER COMPANY</p>
            <h1 className="font-bold text-very-dark-blue text-3xl md:text-5xl mb-4 md:mb-6 ">Fall Limited Edition Sneakers</h1>
            <p className="text-dark-grayish-blue mb-5">These low-profile sneakers are your perfect casual wear companion.
                Featuring a durabble rubber outer sole,
                they'll withstand everything weather can offer.
            </p>
            <div className="flex justify-between items-center md:block">
                <p className="text-3xl font-bold mb-2">$125.00 <span className="bg-black font-medium text-[16px] ml-1 text-white px-2 py-1 rounded-md">50%</span></p>
                <p className="text-dark-grayish-blue font-medium  line-through ">$250.00</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-10">
                <div className="flex items-center gap-2 w-full md:w-52 py-2 justify-around bg-light-grayish-blue rounded-xl ">
                    <button onClick={increaseCount} className="hover:cursor-pointer p-2 "><img src={Plus} alt="plus image" /></button>
                    <p className="font-bold">{count}</p>
                    <button onClick={decreaseCount} className="hover:cursor-pointer p-2 "><img src={Minus} alt="minus image" /></button>
                </div>
                <button onClick={() => { if (count) setCheckout(true) }} className="flex gap-4 bg-oragne-100 w-full justify-center py-3 rounded-xl font-semibold hover:cursor-pointer hover:opacity-70 transition-all duration-100">
                    <img src={Cart} alt="cart image" />
                    Add to cart
                </button>
            </div>
        </div>
    </div>
}

export default Hero