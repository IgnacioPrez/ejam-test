import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLock, faPercent } from '@fortawesome/free-solid-svg-icons'
import { CldImage } from 'next-cloudinary'
import heroStyle from '../hero/hero.module.css'
import { framePay, removePrewview } from '@/helpers/constantImages'
import { ScoreRange } from '../score-range'

const HeroInfo = () => {
  return (
    <article className={heroStyle.heroInfo}>
      <div className={heroStyle.titleInfo}>
        <h2>
          <span>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span>$14 Each</span> ($84.00 Total!)
        </h2>
      </div>
      <div className={heroStyle.firstInfo}>
        <div className={heroStyle.firstInfoImage}>
          <CldImage src={removePrewview.imageURl} alt="remove preview" width={100} height={100} />
        </div>
        <ul className={heroStyle.firstInfoInfo}>
          <li>
            <p> Clarifion Air lonizer</p>
            <p>
              <span>$180</span>
              <span>$84</span>
            </p>
          </li>
          <li>
            <ScoreRange count={5} />
          </li>
          <li>12 left in Stock</li>
          <li>
            Simply plug a Clarifion into any standard outlet and replace blky, expensive air purifiers with a simple.
          </li>
        </ul>
      </div>
      <div className={heroStyle.firstInfoRecommended}>
        <ul className={heroStyle.listRecommended}>
          <li>
            <FontAwesomeIcon icon={faCheck} color="var(--color-advertisements)" />
            <p>
              Negative Ion Technology may <span>help with allergens</span>
            </p>
          </li>

          <li>
            <FontAwesomeIcon icon={faCheck} color="var(--color-advertisements)" />
            <p>
              Designed for <span>air rejuvenation</span>
            </p>
          </li>

          <li>
            <FontAwesomeIcon icon={faCheck} color="var(--color-advertisements)" />
            <p>
              <span>Perfect for every room</span> in all types of places
            </p>
          </li>
        </ul>
        <div className={heroStyle.moreInfo}>
          <span>
            <FontAwesomeIcon icon={faPercent} />
          </span>
          <p>
            Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each</span>
          </p>
        </div>
      </div>
      <div className={heroStyle.btnContent}>
        <button>YES - CLAIM MY DISCOUNT {'->'} </button>
        <div className={heroStyle.btninfo}>
          <p>Free Shipping </p>
          <p>
            <FontAwesomeIcon icon={faLock} /> Secure 256-Bit SSL Encryption
          </p>
          <div className={heroStyle.btnFrames}>
            {framePay.map((el, index) => (
              <CldImage src={el.imageURl} alt="frame pay" key={index} width={30} height={30} />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default HeroInfo
