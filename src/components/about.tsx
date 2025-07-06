import Tilt from 'react-parallax-tilt';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../components/sectionWrapper';

const ServiceCard = ({ index, title, icons }: { index: number; title: string; icons: any }) => (
  <Tilt className='pointer-events-auto w-full xs:w-[250px]' scale={1.1} transitionSpeed={450} tiltMaxAngleX={15} tiltMaxAngleY={15}>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75) as Variants}
      className='w-full rounded-[20px] from-primary to-accent p-[2px] bg-gradient-90'
    >
      <h3 className='text-center font-mono text-[20px] font-bold text-text'>{title}</h3>
      <div className='flex min-h-[280px] flex-col justify-evenly rounded-[20px] bg-secondary px-8 py-5'>
        {icons.map((icon: any) => (
          <div
            key={icon.name}
            onClick={() => window.open(icon.link, '_blank')}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                window.open(icon.link, '_blank');
              }
            }}
            className='flex cursor-pointer items-center transition-transform hover:scale-110 focus:scale-110'
            tabIndex={0}
          >
            <Image className='h-6 w-6' src={icon.icon} alt={icon.name} />
            <span className='ml-2 py-1 font-mono text-sm font-medium text-text'>{icon.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant() as Variants}>
       {/*<p className='section-subtitle'>Introduction</p>*/}
        <h2 className='section-title'>Summary</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1) as Variants} className='section-text pointer-events-auto mt-4 max-w-3xl text-[17px] leading-[30px] text-text'>
        With  5 years of experience spanning technology, mining, and manufacturing industry, I am a data science and engineering professional. With Master’s degree in Data Science from Rutgers University and dual degree in Engineering from IIT Dhanbad, I am 

proficient in Python, R, SQL, and modern data tools and bring hands-on expertise across Data Science, Artificial Intelligence & Machine Learning, Data Analysis, Data Engineering, that drive revenue growth and optimize critical business metrics. I thrive in cross-functional environments, transforming complex data into actionable insights and leading projects from ideation to deployment.

I possess strong leadership & team coordination skills, analytical thinking, clear communication, adaptability, and a collaborative approach. My business acumen enables me to align data-driven solutions with strategic objectives and deliver measurable value for the organisation.

Curiosity-driven and committed to continuous learning, I’m passionate about using data and technology to solve real-world problems and contribute to high-impact, innovative initiatives.
      </motion.p>

      <div className='mt-20 flex select-none flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
