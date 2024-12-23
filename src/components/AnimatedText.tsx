import React from 'react';
import { motion } from 'framer-motion';

export interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedText = ({ text, delay = 0, className = '', children }: AnimatedTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {text}
      {children}
    </motion.div>
  );
};