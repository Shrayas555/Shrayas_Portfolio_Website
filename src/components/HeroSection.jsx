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
  <section className="relative flex flex-col lg:flex-row items-center justify-center h-screen px-4 md:px-8 lg:px-12 bg-charcoal text-silver select-none overflow-hidden">
    {/* Background gradients (subtle, professional) */}
    <div className="absolute -z-10 left-1/2 top-1/3 -translate-x-1/2 blur-3xl opacity-40 pointer-events-none">
      <div className="w-[32rem] h-[16rem] bg-gradient-to-r from-accent via-slate to-transparent rounded-full" />
    </div>
    <div className="absolute -z-10 left-1/3 top-1/2 -translate-x-1/2 blur-2xl opacity-20 pointer-events-none">
      <div className="w-96 h-40 bg-gradient-to-br from-silver via-accent to-transparent rounded-full" />
    </div>
    <BackgroundParticles />
    
    {/* Main content container */}
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 lg:gap-12">
      {/* Profile Image */}
      <motion.div
        className="relative flex-shrink-0 flex justify-center items-center w-full lg:w-2/5 order-2 lg:order-1"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        {/* Animated glowing border directly on the square frame around the image */}
        <div className="relative p-[6px] rounded-2xl overflow-hidden animate-glow-border-gradient" style={{ boxSizing: 'border-box', zIndex: 10 }}>
          <img
            src="/profile.png"
            alt="Shrayas Raju"
            className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto max-h-[500px] md:max-h-[550px] lg:max-h-[600px] object-cover rounded-2xl shadow-2xl bg-slate"
            style={{ boxShadow: '0 8px 32px 0 rgba(35,39,42,0.25)' }}
          />
        </div>
      </motion.div>
      
      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center lg:items-start lg:w-3/5 text-center lg:text-left order-1 lg:order-2"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-accent mb-3 lg:mb-4 tracking-tight font-sans drop-shadow-xl">
          Shrayas Raju
        </h1>
        
        <div className="mb-4 lg:mb-6 text-base sm:text-lg md:text-xl lg:text-2xl text-accent font-semibold min-h-[1.5em]">
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
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-accent mb-3 lg:mb-4"
        />
        
        <AnimatedText
          text="Aspiring Software Engineer | Passionate about AI, Data, and Creative Development"
          className="text-sm sm:text-base md:text-lg lg:text-xl text-silver mb-6 lg:mb-8 max-w-2xl"
        />
        
        <AnimatedButton 
          className="bg-accent hover:bg-slate text-white font-bold shadow-lg text-sm sm:text-base md:text-lg px-6 py-3 lg:px-8 lg:py-4" 
          onClick={scrollToWork}
        >
          View My Work
        </AnimatedButton>
      </motion.div>
    </div>
    
    {/* Micro-interaction: subtle scroll indicator */}
    <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2">
      <div className="w-6 h-10 rounded-full border-2 border-accent flex items-start justify-center p-1 animate-bounce">
        <div className="w-2 h-2 bg-accent rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection; 