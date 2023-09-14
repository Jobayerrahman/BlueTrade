import styles from '@/styles/Home.module.css'
import Default from '@/app/layouts/Default/Default'
import DeshboardPage from '@/app/templates/Deshboard/DeshboardPage'


export default function Home() {
  return (
    <Default>
      <main className={`${styles.main}`}>
        <DeshboardPage/>
      </main>
    </Default>
  )
}
