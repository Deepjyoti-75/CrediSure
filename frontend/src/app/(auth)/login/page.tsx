"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login data:', formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "radial-gradient(ellipse 170% 75% at top, #F25F30 5%, #0C0C0C 42%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative bg-[#0C0C0C] p-6 rounded-xl w-full max-w-sm overflow-hidden"
      >
        <div 
          className="absolute inset-0 rounded-xl p-[1px] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #F25F30, transparent)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>
        
        <div className="relative z-10">
          <motion.h1 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-xl font-bold text-center mb-4 text-white"
          >
            Welcome Back
          </motion.h1>

          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <motion.div variants={itemVariants}>
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                label="Password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                showPasswordToggle
                required
              />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-2"
            >
              <Button type="submit">
                Login
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-1 text-center text-sm text-gray-400"
            >
              <p>
                Don't have an account?{' '}
                <Link 
                  href="/signup" 
                  className="text-[#F25F30] hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}