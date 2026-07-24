import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const springSlow = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: springSlow },
};

export const Reveal = ({ children, delay = 0, className = '', style = {}, once = true, margin = '-80px' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ ...fadeUp.visible.transition, delay }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = '', style = {}, stagger = 0.08, delayChildren = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '', style = {} }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: springSlow },
  };

  return (
    <motion.div className={className} style={style} variants={itemVariants}>
      {children}
    </motion.div>
  );
};
