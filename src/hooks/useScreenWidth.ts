import { useState, useEffect } from "react"

function useScreenWidth() {
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => setWidth(window.innerWidth)
        window.addEventListener('resize', changeWidth)
        return () => { window.removeEventListener('resize', changeWidth) }
    }, [])

    return width;
}

export default useScreenWidth