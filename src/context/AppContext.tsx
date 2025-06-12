"use client";
import { doctors } from "@/assets/assets";
import React, { createContext } from "react";

interface AppContextType {
  doctors: typeof doctors; // type derived from imported data
}
export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {
    doctors,
  };
  return (
    <AppContext.Provider value={{ ...value }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
