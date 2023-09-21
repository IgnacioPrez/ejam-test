'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import footerStyle from './footer.module.css'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className={footerStyle.footerContet}>
        <div className={footerStyle.textInfo}>
            <p>Copyright (c) 2023 {' | '} Clarifionsupport@clarifion.com </p> 
        </div>
        <div className={footerStyle.textInfo}>
            <FontAwesomeIcon icon={faLock} color='#fff'/>
            <p>Secure 256-bit SSL encryption.</p>
        </div>
    </footer>
  )
}

export default Footer