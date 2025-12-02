import { useContext, useState, createContext, type ReactNode, type SetStateAction } from "react";

type CountContextType = {
    count: number,
    setCount: React.Dispatch<SetStateAction<number>>,
    cart: boolean,
    setCart: React.Dispatch<SetStateAction<boolean>>,
    checkout: boolean,
    setCheckout: React.Dispatch<SetStateAction<boolean>>
}

const CountContext = createContext<CountContextType | undefined>(undefined)

export function CountContextProvider({ children }: { children: ReactNode }) {
    const [count, setCount] = useState<number>(0);
    const [cart, setCart] = useState<boolean>(false);
    const [checkout, setCheckout] = useState<boolean>(false)
    return <CountContext value={{ count, setCount, cart, setCart, checkout, setCheckout }}>
        {children}
    </CountContext>
}

export default function useCount() {
    const countContext = useContext(CountContext)
    if (!countContext)
        throw new Error('Count context not defined')
    return countContext;
}