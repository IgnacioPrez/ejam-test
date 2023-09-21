import { Header } from '@/components/header'
import styles from './page.module.css'
import { InstructionsSection } from '@/components/instructions-section'
import { Hero } from '@/components/hero'
import { Notices } from '@/components/notices'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
    <Header/>
    <main className={styles.main}>
      <InstructionsSection/>
      <Hero/>
    <Notices/>
    </main>
    <Footer/>
    </>
  )
}
