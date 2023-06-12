import logo from '../assets/Logo.svg';
// eslint-disable-next-line no-unused-vars
import styles from './Header.module.css';

export function Header ( ) {
    return (
        <header>
            <img src={logo}  />
        </header>
    )
}