import styles from './Skills.module.css';

const Skills = () => {
  const mySkills = [
    "React.js", "JavaScript (ES6+)", "CSS Modules", 
    "Data Visualization (Recharts)", "Responsive Design", 
    "Vite", "Git & GitHub", "Vercel Deployment"
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>Technical <span className={styles.highlight}>Expertise</span></h2>
      <div className={styles.skillsGrid}>
        {mySkills.map((skill, index) => (
          <div key={index} className={styles.skillBadge}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;