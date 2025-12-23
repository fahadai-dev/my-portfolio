import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Hi, I'm <span className={styles.highlight}>Fahad Hossain</span></h1>
        <p className={styles.subtitle}>React Developer & E-commerce Solution Expert</p>
        <p className={styles.description}>
          I build modern, user-friendly web applications and deliver professional digital solutions tailored to your business needs.
        </p>
        <button className={styles.ctaBtn}>View My Projects</button>
      </div>
    </section>
  );
};

export default Hero;