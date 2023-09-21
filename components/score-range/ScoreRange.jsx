'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styleScore from './score.module.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ScoreRange = () => {
  return (
    <div className={styleScore.score}>
      {new Array(5).fill(null).map((el,index) => (
        <FontAwesomeIcon icon={faStar} key={index} color='var(--stars-color)'/>
      ))}
    </div>
    )
}

export default ScoreRange
