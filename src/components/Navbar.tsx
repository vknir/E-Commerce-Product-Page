import useScreenWidth from "../hooks/useScreenWidth";
import Logo from '../assets/images/logo.svg'
import Cart from '../assets/images/icon-cart.svg'
import Pfp from '../assets/images/image-avatar.png'
import Menu from '../assets/images/icon-menu.svg'
import Close from '../assets/images/icon-close.svg'

import { useState, useEffect } from "react";
import useCount from '../context/count-context'
import CartSection from "./CartSection";

function Navbar() {

    const [render, setRender] = useState<boolean>(false)
    const [dispalyMenu, setDisplayMenu] = useState<boolean>(false)

    const screenWidth = useScreenWidth();

    const handleClick = () => {
        console.log('hello')
        if (!render)
            setRender(true)
        setDisplayMenu(true)
    }

    useEffect(() => {
        if (render)
            setRender(false)
    }, [screenWidth])

    const { count, cart, setCart , checkout} = useCount()

    return <>
        {
            screenWidth >= 768 ?
                <>
                    <nav className="fixed left-20 top-0 right-20  flex justify-between border-b border-b-grayish-blue ">
                        <div className="flex gap-16 items-center text-dark-grayish-blue ">
                            <img src={Logo} alt="logo image" />
                            <div className="flex gap-8 items-center">
                                <a href="#" className=" style-a hover:text-very-dark-blue " >Collection</a>
                                <a href="#" className=" style-a hover:text-very-dark-blue " >Men</a>
                                <a href="#" className=" style-a hover:text-very-dark-blue " >Women</a>
                                <a href="#" className=" style-a hover:text-very-dark-blue " >About</a>
                                <a href="#" className=" style-a hover:text-very-dark-blue " >Contact</a>
                            </div>
                        </div>
                        <div className="flex gap-12 items-center " >

                            <button onClick={() => setCart(prev => !prev)} className="relative pt-2 pr-3 hover:cursor-pointer ">
                                {checkout && <p className="absolute bg-oragne-100 text-white px-2 py-0 text-[10px] top-0 right-0 rounded-full" >{count}</p>}
                                <img src={Cart} alt="cart-icon" />
                            </button>
                            <img className="size-12 border-2 rounded-full border-white hover:border-oragne-100 hover:cursor-pointer transition-colors duration-100 ease-in " src={Pfp} alt="profile-photo" />
                        </div>
                        { cart && <CartSection/> }
                    </nav>
                  
                </>
                :

                <>
                    <div className="fixed p-5 flex left-0 right-0 z-10 justify-between">
                        <div className="flex items-center gap-10">
                           <button> <img className="size-5" src={Menu} onClick={()=>handleClick()} alt="menu-icon" /></button>
                            <img src={Logo} alt="logo-icon" />
                        </div>
                        <div className="flex gap-10 items-center " >
                            <img src={Cart} alt="cart-icon" />
                            <img className="size-8 border-2 rounded-full border-white hover:border-oragne-100 hover:cursor-pointer transition-colors duration-100 ease-in " src={Pfp} alt="profile-photo" />
                        </div>

                    </div>
                    {render &&
                        <>
                            <div className={`fixed p-7 top-0 z-20  w-[65%] bg-white h-dvh flex flex-col gap-14 ${dispalyMenu ? ' animate-slide-in-left left-0' : ' animate-slide-out-left  right-full'} `}>
                                <img className="size-4" src={Close} alt="close-icon" onClick={() => setDisplayMenu(false)} />
                                <nav className="flex flex-col gap-5 font-bold ">
                                    <a href="#">Collections</a>
                                    <a href="#">Men</a>
                                    <a href="#">Women</a>
                                    <a href="#">About</a>
                                    <a href="#">Contact</a>
                                </nav>
                            </div>
                            <div className={`fixed top-0 z-20 w-[35%] bg-black opacity-75 h-dvh ${dispalyMenu ? ' animate-slide-in-right  right-0' : ' animate-slide-out-right -right-full'} `}></div>
                        </>
                    }
                </>
        }

    </>
}

export default Navbar;