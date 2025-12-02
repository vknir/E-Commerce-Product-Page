import Product1 from '../assets/images/image-product-1.jpg'
import Thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg'

import Product2 from '../assets/images/image-product-2.jpg'
import Thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg'

import Product3 from '../assets/images/image-product-3.jpg'
import Thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg'

import Product4 from '../assets/images/image-product-4.jpg'
import Thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg'

import Close from '../assets/images/icon-close.svg'

import { useState, type SetStateAction } from 'react'

type LightBoxProps = {
    setShowLightBox: React.Dispatch<SetStateAction<boolean>>
}


export default function LightBox(props: LightBoxProps) {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const image = [{
        product: Product1,
        thumbnail: Thumbnail1,
        alt: 'Product 1 image'

    }, {
        product: Product2,
        thumbnail: Thumbnail2,
        alt: 'Product 2 image'

    }, {
        product: Product3,
        thumbnail: Thumbnail3,
        alt: 'Product 3 image'

    }, {
        product: Product4,
        thumbnail: Thumbnail4,
        alt: 'Product 4 image'

    }]


    return <div className="absolute h-dvh w-dvw bg-black/50 z-10 flex justify-center items-center">
        <div className='flex flex-col items-center gap-4 max-w-[500px] '>
            <img src={Close} alt="close icon" onClick={()=>{props.setShowLightBox(false)}} className='hover:cursor-pointer size-5 self-end transition-transform hover:scale-125 duration-100 ease-in ' />
            <div>
                <img src={image[imageIndex].product} alt={image[imageIndex].alt} className='h-[500px] rounded-xl ' />
            </div>
            <div className='grid grid-cols-4 px-8 gap-8 '>
                <img className={`rounded-lg hover:cursor-pointer border-2 ${imageIndex == 0 ? 'border-oragne-100  ' : 'border-black/0'} `} onClick={() => setImageIndex(0)} src={Thumbnail1} alt={"Thumbnail 0"} />
                <img className={`rounded-lg hover:cursor-pointer border-2 ${imageIndex == 1 ? 'border-oragne-100  ' : 'border-black/0'} `} onClick={() => setImageIndex(1)} src={Thumbnail2} alt={"Thumbnail  1"} />
                <img className={`rounded-lg hover:cursor-pointer border-2 ${imageIndex == 2 ? 'border-oragne-100  ' : 'border-black/0'} `} onClick={() => setImageIndex(2)} src={Thumbnail3} alt={"Thumbnail  2"} />
                <img className={`rounded-lg hover:cursor-pointer border-2 ${imageIndex == 3 ? 'border-oragne-100  ' : 'border-black/0'} `} onClick={() => setImageIndex(3)} src={Thumbnail4} alt={"Thumbnail 3"} />
            </div>
        </div>
    </div>
}

