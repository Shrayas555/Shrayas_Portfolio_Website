import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useState, useMemo } from 'react';
import StarfieldBackground from './StarfieldBackground';

const ContactSection = ({ scrollDirection }) => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [buttonHovered, setButtonHovered] = useState(false);
  
  // Social media links
  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/shrayas-srinivasan', color: 'hover:text-gray-300', label: 'GitHub' },
    { icon: FaYoutube, link: 'https://youtube.com/@shrayas', color: 'hover:text-red-400', label: 'YouTube' },
    { icon: FaInstagram, link: 'https://instagram.com/shrayas', color: 'hover:text-pink-400', label: 'Instagram' },
    { icon: FaTwitter, link: 'https://twitter.com/shrayas', color: 'hover:text-blue-400', label: 'Twitter' },
    { icon: FaLinkedin, link: 'https://linkedin.com/in/shrayas-srinivasan', color: 'hover:text-blue-500', label: 'LinkedIn' }
  ];

  // Email functionality
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Greetings');
    const body = encodeURIComponent('Hello Shrayas,\n\nI hope this email finds you well. I would like to discuss...\n\nBest regards,\n[Your Name]');
    const mailtoLink = `mailto:shrayas5555@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
  };

  // Floating particles for background
  const [floatingElements] = useState(() => {
    const elements = [];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 3,
        duration: 6 + Math.random() * 4
      });
    }
    return elements;
  });

  // Animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }), []);

  const floatingVariants = useMemo(() => ({
    animate: (custom) => ({
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        delay: custom.delay,
        ease: "easeInOut"
      }
    })
  }), []);

  const socialIconVariants = useMemo(() => ({
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.3, 
      y: -5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  }), []);

  return (
    <section id="contact" className="relative min-h-screen bg-black overflow-hidden">
      {/* Starfield background */}
      <StarfieldBackground className="section-background" particleCount={40} />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-accent/30 to-slate/30"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size
            }}
            custom={element}
            variants={floatingVariants}
            animate="animate"
          />
        ))}
      </div>

      {/* Animated background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] rounded-full bg-gradient-to-r from-accent/10 via-slate/10 to-silver/10 opacity-40 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="relative z-10 flex h-screen"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Sidebar - Social Media Icons */}
        <motion.div
          className="hidden lg:flex flex-col items-center justify-center space-y-8 px-8 border-r border-accent/20"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              variants={socialIconVariants}
              initial="initial"
              whileHover="hover"
              onHoverStart={() => setHoveredSocial(index)}
              onHoverEnd={() => setHoveredSocial(null)}
            >
              <motion.div
                className={`text-2xl text-silver transition-colors duration-300 ${social.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <social.icon />
              </motion.div>
              
              {/* Tooltip */}
              <motion.div
                className="absolute left-full ml-3 px-3 py-1 bg-slate/90 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                {social.label}
              </motion.div>

              {/* Particle effect on hover */}
              {hoveredSocial === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent rounded-full"
                      initial={{ 
                        x: '50%', 
                        y: '50%', 
                        scale: 0,
                        opacity: 1 
                      }}
                      animate={{
                        x: `${Math.random() * 200 - 100}%`,
                        y: `${Math.random() * 200 - 100}%`,
                        scale: [0, 1, 0],
                        opacity: [1, 0.8, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          className="flex-1 flex items-center justify-center px-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-4xl">
                         {/* Small heading */}
             <motion.h3
               className="text-3xl md:text-4xl font-semibold text-accent mb-6"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1 }}
               viewport={{ once: true }}
             >
               Get in touch
             </motion.h3>

            {/* Main heading */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-silver via-accent to-slate mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
            >
              Let's Work
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-slate to-silver">
                Together
              </span>
            </motion.h1>

                         {/* Description */}
             <motion.p
               className="text-lg md:text-xl text-silver/80 max-w-2xl mx-auto mb-12 leading-relaxed"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.4 }}
               viewport={{ once: true }}
             >
               Ready to bring your ideas to life? I'm passionate about creating innovative solutions 
               and collaborating on exciting projects. Whether you have a groundbreaking concept 
               or just want to explore possibilities, let's start a conversation that could change everything.
             </motion.p>

                         {/* CTA Button */}
             <motion.div
               className="relative inline-block mb-16"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.6 }}
               viewport={{ once: true }}
             >
               <motion.button
                 onClick={handleEmailClick}
                 className="relative px-12 py-6 bg-transparent border-2 border-accent text-accent font-semibold text-lg rounded-full overflow-hidden group transition-all duration-300 hover:border-slate hover:text-slate"
                 whileHover={{ 
                   scale: 1.05,
                   boxShadow: "0 20px 40px rgba(163, 163, 163, 0.3)"
                 }}
                 whileTap={{ scale: 0.95 }}
                 onHoverStart={() => setButtonHovered(true)}
                 onHoverEnd={() => setButtonHovered(false)}
               >
                 {/* Button background animation */}
                 <motion.div
                   className="absolute inset-0 bg-gradient-to-r from-accent/20 to-slate/20"
                   initial={{ x: '-100%' }}
                   animate={{ x: buttonHovered ? '0%' : '-100%' }}
                   transition={{ duration: 0.3 }}
                 />
                 
                 {/* Button text */}
                 <span className="relative z-10">
                   <span>Say Hello</span>
                 </span>

                 {/* Glow effect */}
                 <motion.div
                   className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 to-slate/30 blur-xl"
                   animate={{
                     opacity: buttonHovered ? [0.5, 0.8, 0.5] : 0,
                     scale: buttonHovered ? [1, 1.2, 1] : 1,
                   }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                 />
               </motion.button>
             </motion.div>

             {/* Contact Info Cards */}
             <motion.div
               className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.8 }}
               viewport={{ once: true }}
             >
               {/* Email Card */}
               <motion.div
                 className="group relative bg-slate/10 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
                 whileHover={{ 
                   scale: 1.02,
                   boxShadow: "0 10px 30px rgba(163, 163, 163, 0.2)"
                 }}
               >
                 <div className="text-center">
                   <motion.div
                     className="text-3xl mb-3 text-accent"
                     whileHover={{ scale: 1.2, rotate: 360 }}
                     transition={{ duration: 0.6 }}
                   >
                     📧
                   </motion.div>
                   <h3 className="text-lg font-semibold text-silver mb-2">Email</h3>
                   <motion.a
                     href="mailto:shrayas5555@gmail.com"
                     className="text-accent hover:text-slate transition-colors duration-300 font-medium"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     shrayas5555@gmail.com
                   </motion.a>
                 </div>
               </motion.div>

               {/* LinkedIn Card */}
               <motion.div
                 className="group relative bg-slate/10 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
                 whileHover={{ 
                   scale: 1.02,
                   boxShadow: "0 10px 30px rgba(163, 163, 163, 0.2)"
                 }}
               >
                 <div className="text-center">
                   <motion.div
                     className="text-3xl mb-3 text-accent"
                     whileHover={{ scale: 1.2, rotate: 360 }}
                     transition={{ duration: 0.6 }}
                   >
                     <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 mx-auto" />
                   </motion.div>
                   <h3 className="text-lg font-semibold text-silver mb-2">LinkedIn</h3>
                   <motion.a
                     href="https://www.linkedin.com/in/shrayas-raju/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-accent hover:text-slate transition-colors duration-300 font-medium"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     Connect with me
                   </motion.a>
                 </div>
               </motion.div>

               {/* GitHub Card */}
               <motion.div
                 className="group relative bg-slate/10 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
                 whileHover={{ 
                   scale: 1.02,
                   boxShadow: "0 10px 30px rgba(163, 163, 163, 0.2)"
                 }}
               >
                 <div className="text-center">
                   <motion.div
                     className="text-3xl mb-3 text-accent"
                     whileHover={{ scale: 1.2, rotate: 360 }}
                     transition={{ duration: 0.6 }}
                   >
                     <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8 mx-auto" />
                   </motion.div>
                   <h3 className="text-lg font-semibold text-silver mb-2">GitHub</h3>
                   <motion.a
                     href="https://github.com/Shrayas555"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-accent hover:text-slate transition-colors duration-300 font-medium"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     View my work
                   </motion.a>
                 </div>
               </motion.div>
             </motion.div>
          </div>
        </motion.div>

        {/* Right Sidebar - Email Address */}
        <motion.div
          className="hidden xl:flex items-center justify-center px-8 border-l border-accent/20"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="writing-mode-vertical text-silver text-lg font-medium tracking-wider"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            whileHover={{ scale: 1.1, color: '#A3A3A3' }}
            transition={{ duration: 0.3 }}
          >
            shrayas5555@gmail.com
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile social icons */}
      <motion.div
        className="lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-silver hover:text-accent transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <social.icon />
          </motion.a>
        ))}
      </motion.div>

      
    </section>
  );
};

export default ContactSection; 