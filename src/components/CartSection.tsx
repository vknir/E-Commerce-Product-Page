import useCount from "../context/count-context";
import Checkout from "./Checkout";

function CartSection() {
    const { checkout } = useCount()

    return <div className="  left-2 right-2 md:w-[320px] h-[200px] bg-white absolute top-20  md:right-0 z-20 rounded-lg shadow-xl/20">
        <div className="w-full h-[60px] border-b border-b-grayish-blue ">
            <p className="px-5 pb-3 pt-3 font-medium  ">Cart</p>
        </div>
        <div className="flex flex-col items-center justify-center h-[140px] p-4">
            {checkout ?
                <Checkout />

                : <p className="text-grayish-blue font-bold ">Your cart is empty</p>}
        </div>
    </div>
}

export default CartSection;