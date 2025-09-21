// src/App.jsx

import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout"; // Import the new Layout

// Import all your page components
import { HeaderSection } from "./pages/HeaderSection";
import { ContextSection } from "./pages/ContextSection";
import { ConclusionSection } from "./pages/ConclusionSection";
import { TimelineSection } from "./pages/TimelineSection";
import { ApplicationSection } from "./pages/ApplicationSection";
import BlogPage from "./pages/BlogPage";
import BlogPostDetail from "./pages/BlogPostDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* The first page to show is now /header */}
        <Route path="/" element={<Navigate to="/header" replace />} />
        
        {/* All your pages are now children of the Layout */}
        <Route path="/header" element={<HeaderSection />} />
        <Route path="/context" element={<ContextSection />} />
        <Route path="/timeline" element={<TimelineSection />} />
        <Route path="/application" element={<ApplicationSection />} />
        <Route path="/conclusion" element={<ConclusionSection />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:postId" element={<BlogPostDetail />} />
      </Route>

      {/* You can have other routes outside the layout here if needed */}
      {/* e.g. <Route path="/login" element={<LoginPage />} /> */}
    </Routes>
  );
}

export default App;