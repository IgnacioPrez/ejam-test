'use client'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import headStyle from './headMobile.module.css'
import { headMobile } from '@/helpers/constantImages'

const HeadMobile = () => {
  const [ad, setAd] = useState(0)

  const changeAd = () => {
    setAd(ad + 1)
    if(ad >= headMobile.length -1){
        setAd( ad - headMobile.length +1)
    }
  }

  const chengRemov = () => {
    setAd(ad - 1)
    if(ad <= 0){
        setAd(ad + headMobile.length -1)
    }
}
  return (
    <div className={headStyle.mobileContent}>
      <FontAwesomeIcon icon={faChevronLeft} onClick={chengRemov} />
      {
        headMobile.map((el,index) => {
           return index === ad && <p key={index}>{el.text}</p>
        })
      }
      <FontAwesomeIcon icon={faChevronRight} onClick={changeAd} />
    </div>
  )
}

export default HeadMobile
