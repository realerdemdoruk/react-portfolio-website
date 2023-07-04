import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import { getAllProjects } from '../../functions/getAllProjects';
import { motion } from 'framer-motion';

const container = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ProjectsPage({ projects }) {
  return (
    <Layout title={'Portfolio / Projects'} description={'My Projects'}>
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
        {/* Projects.. */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
};
