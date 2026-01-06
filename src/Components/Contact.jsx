import styles from './Contact.module.css';
import { SiUpwork, SiFiverr, SiGithub, SiLinkedin } from 'react-icons/si';

const Contact = () => {
  return (
    <footer className={styles.contactSection} id="contact">
      <h2 className={styles.heading}>Get In <span className={styles.highlight}>Touch</span></h2>
      <p className={styles.text}>
        Ready to take your business online? Contact me on these platforms or send an email!
      </p>
      
      <div className={styles.socialIcons}>
        <a href="https://www.upwork.com/freelancers/~01ac51d29d6f13ee3a" target="_blank" rel="noreferrer" title="Upwork" className={styles.upwork}>
          <SiUpwork />
        </a>
        <a href="https://www.fiverr.com/fahadapidev/buying?source=avatar_menu_profile" target="_blank" rel="noreferrer" title="Fiverr" className={styles.fiverr}>
          <SiFiverr />
        </a>
        <a href="https://github.com/fahadai-dev" target="_blank" rel="noreferrer" title="GitHub">
          <SiGithub />
        </a>
        <a href="www.linkedin.com/in/fahad-hossain-3070ab384" target="_blank" rel="noreferrer" title="LinkedIn">
          <SiLinkedin />
        </a>
      </div>

      <a href="mailto:fahad.integration.ml@gmail.com" className={styles.mailBtn}>Email Me</a>
      <p className={styles.copyright}>© 2025 Fahad Hossain. All rights reserved.</p>
    </footer>
  );
};
export default Contact;
