'use client'
import { CldImage } from 'next-cloudinary'
import { HeroInfo } from '../hero-info'
import heroStyle from './hero.module.css'
import { heroImage } from '@/helpers/constantImages'


const Hero = () => {
  return (
    <section className={heroStyle.heroContent}>
      <div className={heroStyle.hero}>
        <CldImage src={heroImage.imageUrl} alt={heroImage.alt} width={500} height={500}/>
      </div>
     <HeroInfo/>
    </section>
  )
}

export default Hero
