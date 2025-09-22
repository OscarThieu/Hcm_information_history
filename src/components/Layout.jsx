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
  <nav className="fixed bottom-5 left-0 right-0 bg-brand-red-dark text-white flex justify-around items-center py-2 md:hidden z-50">
    {navItems.map(item => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `flex flex-col items-center justify-center gap-1 text-sm transition-colors
           ${isActive
            ? 'text-white'
            : 'text-white/70 hover:text-white'}`
        }
      >
        <item.icon className="h-6 w-6" />
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
