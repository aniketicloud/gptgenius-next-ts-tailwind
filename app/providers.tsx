"use client";
import React, { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
};

export default Providers;
