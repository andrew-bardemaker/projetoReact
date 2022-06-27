//JSX = javascript = XML

import { Header } from "./components/header"
import { Post } from "./components/Post"
import { SideBar } from "./components/SideBar";

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <SideBar />
        <main>
          <Post
            author="Andrew Bademaker"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi mollitia? Voluptas, obcaecati. Facilis maxime sint rerum tempore velit saepe, aut quos unde beatae consequuntur. Id ipsa aperiam nam debitis."
          />
          <Post
            author="Milena Oliveira"
            content="TO COM FOME"
          /></main>
      </div>
    </div>
  )
}



