import { useState } from 'react'
import Product1 from '../assets/images/image-product-1.jpg'
import Thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg'

import Product2 from '../assets/images/image-product-2.jpg'
import Thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg'

import Product3 from '../assets/images/image-product-3.jpg'
import Thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg'

import Product4 from '../assets/images/image-product-4.jpg'
import Thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg'
import LightBox from './LightBox'

import useScreenWidth from '../hooks/useScreenWidth'


function Carousel() {
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
    const [showLightBox, setShowLightBox] = useState<boolean>(false)

    const width = useScreenWidth()

    return (width >= 768 ? <>
        {showLightBox && <LightBox setShowLightBox={setShowLightBox} />}
        <div className='max-w-[400px] flex flex-col gap-5'>
            <img className='hover:cursor-pointer rounded-2xl' onClick={() => setShowLightBox(true)} src={image[imageIndex].product} alt={image[imageIndex].alt} />
            <div className='grid grid-cols-4 gap-5'>
                <div className={` rounded-lg  border-3 ${imageIndex === 0 ? ' border-oragne-100' : 'border-white'}`}>
                    <img className={`style-thumbnail   `} src={Thumbnail1} onClick={() => setImageIndex(0)} alt="thumbnail1-image" />

                </div>



                <div className={` rounded-lg  border-3 ${imageIndex === 1 ? ' border-oragne-100' : 'border-white'}`}>
                    <img className={`style-thumbnail   `} src={Thumbnail2} onClick={() => setImageIndex(1)} alt="thumbnail2-image" />
                </div>
                <div className={` rounded-lg  border-3 ${imageIndex === 2 ? ' border-oragne-100' : 'border-white'}`}>
                    <img className={`style-thumbnail   `} src={Thumbnail3} onClick={() => setImageIndex(2)} alt="thumbnail3-image" />
                </div>

                <div className={` rounded-lg  border-3 ${imageIndex === 3 ? ' border-oragne-100' : 'border-white'}`}>
                    <img className={`style-thumbnail   `} src={Thumbnail4} onClick={() => setImageIndex(3)} alt="thumbnail4-image" />
                </div>
            </div>
        </div>
    </> : <>
        <div className='w-full bg-black mt-18'>
            <img src={image[imageIndex].product} alt={image[imageIndex].alt} />
        </div>
    </>)
}

export default Carousel