import styles from './ProjectList.module.css';

const ProjectList = () => {
  const projectData = [
    {
      id: 1,
      title: "Admin Analytics Dashboard",
      description: "A professional dashboard built with Recharts for visualizing sales data and user statistics.",
      link: "https://modern-admin-dashboard-inky.vercel.app/",
    },
    {
      id: 2,
      title: "Mega Shop Gallery",
      description: "An e-commerce product interface featuring advanced search filtering and dark mode integration.",
      link: "https://mega-shop-gallery-react.vercel.app/",
    },
    {
      id: 3,
      title: "SkyCast Weather App",
      description: "A real-time weather application with dynamic backgrounds and location-based data fetching.",
      link: "https://skycast-weather-app-zeta.vercel.app/",
    },
    {
      id: 4,
      title: "React Task Master",
      description: "An advanced To-Do application using LocalStorage for persistent task management.",
      link: "https://react-task-master-gold.vercel.app/",
    },
     {
      id: 5,
      title: "Agency-X",
      description: "A high performance agency landing page and fully responsive design for professional business solutions.",
      link: "https://agency-x-nine.vercel.app/",
    },
     {
      id: 6,
      title: "Smartwatch-landing",
      description: "A premium e-commerce smartwatch landing page and high-conversion product showcase",
      link: "https://smartwatch-landing-delta.vercel.app/",
    },
   
  ];
  
  return (
    <section className={styles.projectSection}>
      <h2 className={styles.heading}>My <span className={styles.highlight}>Featured Works</span></h2>
      <div className={styles.grid}>
        {projectData.map((project) => (
          <div key={project.id} className={styles.card}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className={styles.link}>
              View Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
