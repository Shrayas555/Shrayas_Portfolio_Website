import { motion } from 'framer-motion';

const blobs = [
  { style: 'top-[-6rem] left-[-6rem] w-72 h-72', color: 'bg-indigo-400' },
  { style: 'top-[10rem] right-[-8rem] w-96 h-96', color: 'bg-pink-400' },
  { style: 'bottom-[-6rem] left-[30%] w-80 h-80', color: 'bg-yellow-300' },
];

const blobVariants = {
  animate: {
    scale: [1, 1.15, 1],
    rotate: [0, 15, -10, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  },
};

const BackgroundParticles = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {blobs.map((blob, i) => (
      <motion.div
        key={i}
        className={`absolute ${blob.style} ${blob.color} opacity-30 blur-3xl rounded-full mix-blend-multiply pointer-events-none`}
        variants={blobVariants}
        animate="animate"
      />
    ))}
  </div>
);

export default BackgroundParticles; 