import stylesInstrucction from './instructions.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa3, fa4, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const InstructionsSection = () => {
  return (
    <section className={stylesInstrucction.instructionContent}>
            <ul className={stylesInstrucction.listInstruction}>
                <li>
                    <FontAwesomeIcon icon={faCheckCircle} color='var(--circle-section-primary)' />
                    <p>Step 1: Cart Review</p>
                </li>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} color='var(--circle-section-primary)'/>
                    <p>Step 2: Checkout</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={fa3}/>
                    <p>Step 3: Special Offer</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={fa4}/>
                    <p>Step 4: Confirmation</p>
                </li>
            </ul>
            <ul className={stylesInstrucction.listInstructionTwo}>
                <li>
                    <FontAwesomeIcon icon={faCheckCircle} color='var(--circle-section-primary)' />
                    <p>Cart Review</p>
                </li>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} color='var(--circle-section-primary)'/>
                    <p>Checkout</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={fa3}/>
                    <p>Special Offer</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={fa4}/>
                    <p>Confirmation</p>
                </li>
            </ul>
    </section>
  )
}

export default InstructionsSection