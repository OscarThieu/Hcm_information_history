// src/components/Layout.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  HomeIcon,
  DocumentTextIcon,
  ClockIcon,
  SparklesIcon,
  NewspaperIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import Chatbot from './Chatbot';

const navItems = [
  { to: "/header", icon: HomeIcon, label: "Trang Giới Thiệu" },
  { to: "/context", icon: DocumentTextIcon, label: "Bối Cảnh" },
  { to: "/timeline", icon: ClockIcon, label: "Dòng Thời Gian" },
  { to: "/application", icon: SparklesIcon, label: "Vận Dụng" },
  { to: "/conclusion", icon: CheckCircleIcon, label: "Kết Luận" },
  { to: "/blog", icon: NewspaperIcon, label: "Gương Sáng Đảng Viên" },
];

const Sidebar = () => (
  <aside className="hidden md:flex w-64 bg-brand-red-dark text-white flex-col">
    <div className="p-6 text-center border-b border-white/10">
      <h2 className="font-extrabold text-2xl text-white">Đảng CSVN</h2>
      <p className="text-sm text-white/70">Đạo đức & Văn minh</p>
    </div>
    <nav className="flex-1 p-4 space-y-2">
      {navItems.map(item => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-md transition-colors text-lg
             ${isActive
              ? 'bg-white/15 font-semibold'
              : 'text-white/80 hover:bg-white/10 hover:text-white'}`
          }
        >
          <item.icon className="h-6 w-6" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

const MobileNav = () => (
  <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[85%] max-w-sm bg-gradient-to-r from-red-800 to-red-600 text-white flex justify-around items-center py-3 rounded-2xl shadow-lg backdrop-blur-md md:hidden z-50">
    {navItems.map(item => (
      <NavLink
        key={item.to}
        to={item.to}
        className="flex items-center justify-center relative"
      >
        {({ isActive }) => (
          <motion.div
            className="p-2 rounded-full flex items-center justify-center"
            animate={{
              backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
              scale: isActive ? 1.2 : 1
            }}
            transition={{ duration: 0.25 }}
          >
            <item.icon className={`h-6 w-6 ${isActive ? "text-white" : "text-white/70"}`} />
          </motion.div>
        )}
      </NavLink>
    ))}
  </nav>
);

export const Layout = () => {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-brand-red-dark to-gray-900 font-sans">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
        <Outlet />
      </main>
      <Chatbot />
      <MobileNav />
    </div>
  );
};
