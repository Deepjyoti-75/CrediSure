"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

export default function LenderThankYou() {
  const router = useRouter();

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
        className="relative bg-[#0C0C0C] p-8 rounded-xl w-full max-w-md overflow-hidden border border-[#F25F30]/20 text-center"
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

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 space-y-6"
        >
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-20 h-20 bg-[#F25F30]/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#F25F30]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-white mb-2"
            >
              Borrower Details Submitted!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300"
            >
              The borrower information has been successfully recorded in our system. You can now view this borrower in your dashboard.
            </motion.p>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button 
                onClick={() => router.push('/prediction-record')}
              >
                Go to Dashboard
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Button 
                onClick={() => router.push('/new-borrower')}
                className="bg-transparent border border-[#F25F30] text-[#F25F30] hover:bg-[#F25F30]/10"
              >
                Add Another Borrower
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}