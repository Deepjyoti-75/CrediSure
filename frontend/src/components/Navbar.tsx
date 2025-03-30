"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import auth from "@/utils/auth";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status
    setIsAuthenticated(auth.isAuthenticated());
  }, []);

  const handleLogout = () => {
    auth.removeToken();
    router.push('/login');
  };

  return (
    <div className="flex justify-around items-center py-6 bg-[#0C0C0C]">
        {/* Logo */}
        <div className="flex gap-2 items-center">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
            </Link>
            <Link href="/">
                <h1 className="text-[1.4rem]/[1.6rem] font-roboto font-medium ">CrediSure</h1>
                <p className="text-[.65rem] font-moulpali font-thin">SMARTER RISKS, SAFER LENDING</p>
            </Link>
        </div>

        {/* Navbar */}
        <div className="hidden md:flex items-center gap-[2rem]">
          <Link href="/" className="font-inter font-semibold">Home</Link>
          {isAuthenticated && (
            <>
              <Link href="/prediction-record" className="font-inter font-semibold">Prediction Record</Link>
              <Link href="/new-borrower" className="font-inter font-semibold">New Borrower</Link>
            </>
          )}
        </div>

        {/* Authentication */}
        <div>
          {isAuthenticated ? (
            <button 
              onClick={handleLogout}
              className="bg-[#f25f30] text-white px-4 py-2 rounded-full cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="bg-[#f25f30] text-white px-4 py-2 rounded-full cursor-pointer">
                Get Started
              </button>
            </Link>
          )}
        </div>
    </div>
  );
}