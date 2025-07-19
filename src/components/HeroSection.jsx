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
  <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] md:min-h-[80vh] px-4 md:px-0 bg-charcoal text-silver select-none">
    {/* Background gradients (subtle, professional) */}
    <div className="absolute -z-10 left-1/2 top-1/3 -translate-x-1/2 blur-3xl opacity-40 pointer-events-none">
      <div className="w-[32rem] h-[16rem] bg-gradient-to-r from-accent via-slate to-transparent rounded-full" />
    </div>
    <div className="absolute -z-10 left-1/3 top-1/2 -translate-x-1/2 blur-2xl opacity-20 pointer-events-none">
      <div className="w-96 h-40 bg-gradient-to-br from-silver via-accent to-transparent rounded-full" />
    </div>
    <BackgroundParticles />
    {/* Profile Image */}
    <motion.div
      className="relative z-10 flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-8 md:mb-0"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      {/* Animated glowing border directly on the square frame around the image */}
      <div className="relative p-[6px] rounded-2xl overflow-hidden animate-glow-border-gradient" style={{ boxSizing: 'border-box', zIndex: 10 }}>
        <img
          src="/profile.png"
          alt="Shrayas Raju"
          className="w-64 h-auto max-h-[420px] object-cover rounded-2xl shadow-2xl bg-slate"
          style={{ boxShadow: '0 8px 32px 0 rgba(35,39,42,0.25)' }}
        />
      </div>
    </motion.div>
    {/* Hero Content */}
    <motion.div
      className="relative z-10 flex flex-col items-center md:items-start md:w-2/3 text-center md:text-left"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-accent mb-2 tracking-tight font-sans drop-shadow-xl">
        Shrayas Raju
      </h1>
      <div className="mb-4 text-lg sm:text-xl text-accent font-semibold">
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
        className="text-lg md:text-2xl font-medium text-accent mb-3"
      />
      <AnimatedText
        text="Aspiring Software Engineer | Passionate about AI, Data, and Creative Development"
        className="text-base md:text-lg text-silver mb-8"
      />
      <AnimatedButton className="bg-accent hover:bg-slate text-white font-bold shadow-lg" onClick={scrollToWork}>
        View My Work
      </AnimatedButton>
    </motion.div>
    {/* Micro-interaction: subtle scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="w-6 h-10 rounded-full border-2 border-accent flex items-start justify-center p-1 animate-bounce">
        <div className="w-2 h-2 bg-accent rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection; 