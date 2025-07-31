import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import StarfieldBackground from './StarfieldBackground';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    name: 'Complete A.I. & Machine Learning, Data Science Bootcamp (UDEMY)',
    issuer: 'Zero To Mastery',
    date: 'Issued Mar 2024',
    logo: '/icons/ZTM.svg',
    color: 'from-purple-600 to-pink-600',
    link: 'https://drive.google.com/file/d/1_HNJX-oR_-ytykaV6AFIlT-QSQdbCtth/view?usp=sharing' // Replace with actual link
  },
  {
    id: 2,
    name: 'The Complete Full-Stack Web Development Bootcamp (UDEMY)',
    issuer: 'Angela Yu',
    date: 'Issued Jul 2025',
    logo: '/icons/app.png',
    color: 'from-red-500 to-orange-500',
    link: 'https://drive.google.com/file/d/1QP2Ff8dGSB9YD0qAVfij91Fh3j9d_ZB8/view?usp=sharing' // Replace with actual link
  },
  {
    id: 3,
    name: 'Group 1 Investigators Conducting Social and Behavioral Science Research (SBR) at Clemson University',
    issuer: 'CITI Program',
    date: 'Issued May 2025',
    logo: '/icons/CITI.jpeg',
    color: 'from-blue-600 to-indigo-700',
    link: 'https://www.citiprogram.org/verify/?wdbdd3fd9-7d24-4571-8f52-3ce903368a0d-69702311' // Replace with actual link
  },
  {
    id: 4,
    name: 'Group 3 Investigators Requiring the HIPAA Module only',
    issuer: 'CITI Program',
    date: 'Issued May 2025',
    logo: '/icons/CITI.jpeg',
    color: 'from-blue-600 to-indigo-700',
    link: 'https://www.citiprogram.org/verify/?w1b841d77-dc89-4c7c-968a-58ed4e3e9ddd-69702312' // Replace with actual link
  },
  {
    id: 5,
    name: 'Data Science and Machine Learning with Python',
    issuer: 'Besant Technologies',
    date: 'Issued Oct 2022',
    logo: '/icons/besant.jpeg',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://drive.google.com/file/d/1q9dHIP5bCd1X50ONOpUwPjcr76K2ArPy/view?usp=sharing' // Replace with actual link
  },
  {
    id: 6,
    name: 'Deep Learning',
    issuer: 'Besant Technologies',
    date: 'Issued Oct 2022',
    logo: '/icons/besant.jpeg',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://drive.google.com/file/d/1s1YhKHGvYgjTwZAqLftT6m2yDhGhqWwl/view?usp=sharing' // Replace with actual link
  },
  {
    id: 7,
    name: 'Python',
    issuer: 'HackerRank',
    date: 'Issued Jul 2022',
    logo: '/icons/HackerRank.png',
    color: 'from-green-500 to-emerald-600',
    link: 'https://www.hackerrank.com/certificates/e48ff3a1ca1d' // Replace with actual link
  },
  {
    id: 8,
    name: 'Data Science Intern',
    issuer: 'Code Clause',
    date: 'Issued Nov 2022',
    logo: null,
    color: 'from-blue-500 to-purple-600',
    link: 'https://drive.google.com/file/d/14iVIcQ869S-nWnboNJcHoeAJRohDa8AY/view?usp=sharing' // Replace with actual link
  }
];

const CertificationsSection = ({ scrollDirection }) => {
  const [hoveredCert, setHoveredCert] = useState(null);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }), []);

  const cardVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: scrollDirection === 'down' ? 60 : -60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }), [scrollDirection]);

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="relative py-20 bg-black overflow-hidden">
      {/* Starfield background */}
      <StarfieldBackground className="section-background" particleCount={25} />
      
      {/* Glowing background */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-r from-accent/10 via-slate/10 to-silver/10 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-slate to-silver">
            Certifications
          </h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-accent via-slate to-silver rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: '80%', maxWidth: '400px' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="relative group cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCert(index)}
              onHoverEnd={() => setHoveredCert(null)}
              onClick={() => handleCardClick(cert.link)}
            >
              {/* Certification Card */}
              <motion.div
                className={`bg-slate/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-accent/30 relative overflow-hidden h-full hover:bg-slate/30 transition-all duration-300 ${!cert.logo ? 'flex flex-col justify-center' : ''}`}
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(163, 163, 163, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* External link icon */}
                <div className="absolute top-4 right-4 text-accent opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <FaExternalLinkAlt size={16} />
                </div>

                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Logo */}
                {cert.logo && (
                  <motion.div
                    className="mb-4 text-center flex justify-center"
                    animate={{
                      scale: hoveredCert === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {cert.logo.endsWith('.svg') || cert.logo.endsWith('.png') || cert.logo.endsWith('.jpg') || cert.logo.endsWith('.jpeg') ? (
                      <img 
                        src={cert.logo} 
                        alt={`${cert.name} logo`}
                        className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    ) : (
                      <span className="text-4xl">{cert.logo}</span>
                    )}
                  </motion.div>
                )}

                {/* Certification name */}
                <h3 className="text-xl font-bold text-silver mb-2 text-center leading-tight">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-accent text-center mb-3 font-semibold">
                  {cert.issuer}
                </p>

                {/* Date */}
                <p className="text-silver/70 text-sm text-center">
                  {cert.date}
                </p>

                {/* Floating particles on hover */}
                {hoveredCert === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-accent rounded-full"
                        initial={{ 
                          x: '50%', 
                          y: '50%', 
                          scale: 0,
                          opacity: 1 
                        }}
                        animate={{
                          x: `${Math.random() * 100}%`,
                          y: `${Math.random() * 100}%`,
                          scale: [0, 1, 0],
                          opacity: [1, 0.6, 0],
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${cert.color.split(' ')[1]}15, transparent 70%)`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsSection; 