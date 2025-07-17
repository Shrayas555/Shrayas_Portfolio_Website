import AnimatedText from './AnimatedText';
import AnimatedButton from './AnimatedButton';
import BackgroundParticles from './BackgroundParticles';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const scrollToWork = () => {
  const el = document.getElementById('projects');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
};

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center select-none">
    {/* Neon/Glassy Gradients */}
    <div className="absolute -z-10 left-1/2 top-1/3 -translate-x-1/2 blur-3xl opacity-60 pointer-events-none">
      <div className="w-[32rem] h-[16rem] bg-gradient-to-r from-violet-400 via-indigo-300 to-transparent rounded-full" />
    </div>
    <div className="absolute -z-10 left-1/3 top-1/2 -translate-x-1/2 blur-2xl opacity-40 pointer-events-none">
      <div className="w-96 h-40 bg-gradient-to-br from-indigo-200 via-violet-200 to-transparent rounded-full" />
    </div>
    <BackgroundParticles />
    <motion.div
      className="relative z-10 flex flex-col items-center"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="font-bold text-5xl sm:text-6xl text-gray-900 mb-2 tracking-tight font-sans drop-shadow-xl">
        Shrayas Raju
      </h1>
      <div className="mb-4 text-lg sm:text-xl text-violet-700 font-semibold">
        <TypeAnimation
          sequence={[
            'Aspiring Software Engineer',
            1800,
            'Passionate about AI',
            1800,
            'Creative Developer',
            1800,
            'Data Enthusiast',
            1800,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </div>
      <AnimatedText
        text="MS in Computer Science @ Clemson University"
        className="text-lg md:text-2xl font-medium text-indigo-700 mb-3"
      />
      <AnimatedText
        text="Aspiring Software Engineer | Passionate about AI, Data, and Creative Development"
        className="text-base md:text-lg text-gray-700 mb-8"
      />
      <AnimatedButton onClick={scrollToWork}>
        View My Work
      </AnimatedButton>
    </motion.div>
    {/* Micro-interaction: subtle scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="w-6 h-10 rounded-full border-2 border-violet-400 flex items-start justify-center p-1 animate-bounce">
        <div className="w-2 h-2 bg-violet-400 rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection; 