"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link className="cursor-pointer flex items-center gap-1" href="/">
          <Image
            src={"/icons/logo.svg"}
            width={34}
            height={34}
            alt="Endervault Logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            EnderVault
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-26">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
        </div>
      </header>
    </section>
  );
};

export default AuthForm;
