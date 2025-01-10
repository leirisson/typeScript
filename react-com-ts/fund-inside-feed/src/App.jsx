import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import { Sidebar } from "./components/Sidebar/Sidebar"
import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Leirisson" 
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum accusamus ratione neque? Quae qui tempore blanditiis animi ipsum tenetur libero fugiat! Facere assumenda praesentium autem repudiandae sint animi cumque atque?" 
          />
        <Post 
          author="Leirisson" 
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum accusamus ratione neque? Quae qui tempore blanditiis animi ipsum tenetur libero fugiat! Facere assumenda praesentium autem repudiandae sint animi cumque atque?" />
        </main>
       
      </div>

    </>
  )
}

