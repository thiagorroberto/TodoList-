import logo from '../../assets/logo.svg'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src={logo} alt="" />
        </header>
    )
}