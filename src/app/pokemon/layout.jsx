'use client';

import { Header } from "../../components/ui/header"; 
export default function Layout({ children }) {
  return (
    <div>
        <Header /> 
        {children}
    </div>
  );
}