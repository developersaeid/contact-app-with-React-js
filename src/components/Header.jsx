import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p><a href="https://react.dev/" target="_blank">React.js</a> Project</p>
    </div>
  )
}

export default Header
