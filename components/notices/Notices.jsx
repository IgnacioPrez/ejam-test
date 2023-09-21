'use client'
import { CldImage } from 'next-cloudinary'
import noticesStyle from './notices.module.css'
import { ScoreRange } from '../score-range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { stamp, userImage } from '@/helpers/constantImages'

const Notices = () => {
  return (
    <section className={noticesStyle.contentNotices}>
      <article className={noticesStyle.userContent}>
        <div >
          <div className={noticesStyle.user}>
            <CldImage src={userImage.imageURl} alt='user image' width={50} height={50}/>
            <div>
              <ScoreRange />
              <div className={noticesStyle.userInfo}>
                <p>Kent T.</p>
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
        <p className={noticesStyle.textUser}>
          “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the
          bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
        </p>
      </article>
      <article className={noticesStyle.warningInfo}>
        <p className={noticesStyle.notice}>NO THANKS, I DON'T WANT THIS.</p>
        <div className={noticesStyle.guarantee}>
          <CldImage src={stamp.imageURl} alt='stamp image' width={80} height={80}/>
          <p>
            If you are not completely thrilled with your Clarifion - <span>We have a 30 day satisfaction guarantee.</span> Please
            refer to our return policy at the bottom of the page for more details. Happy Shopping!
          </p>
        </div>
      </article>
    </section>
  )
}

export default Notices
