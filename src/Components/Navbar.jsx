import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FAHAD<span>.DEV</span></div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact" className={styles.contactBtn}>Hire Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;