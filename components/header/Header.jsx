'use client'
import stylesHead from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTruck, faHeart, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { CldImage } from 'next-cloudinary'
import { clarifonLogo, frameHead } from '@/helpers/constantImages'
import { HeadMobile } from '../head-mobile'

const Header = () => {
  return (
    <header className={stylesHead.header}>
      <ul className={stylesHead.info}>
       <li>
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>30-DAY SATISFACTION GUARANTEE</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faTruck} />
          <p>FREE DELIVERY ON ORDERS OVER $40.00</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} />
          <p>50.000+ HAPPY CUSTOMERS</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          <p>100% MONEY BACK GUARANTEE</p>
        </li>  
      </ul>
      <HeadMobile/>

      <div className={stylesHead.titleImage}>
        <CldImage src={clarifonLogo.imageURl} alt={clarifonLogo.alt} width={180} height={40}  />
        <CldImage src={frameHead.imageURl} alt={frameHead.alt} width={202} height={32} priority/>
      </div>
      <div className={stylesHead.title}>
        <h1>
            Wait ! Your Order In Progress.
        </h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
      </div>
    </header>
  )
}

export default Header
