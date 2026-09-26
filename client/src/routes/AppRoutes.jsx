import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import SupportOurCause from "../pages/SupportOurCause.jsx";
import CauseDetail from "../pages/CauseDetail.jsx";
import OurImpact from "../pages/OurImpact.jsx";
import Donate from "../pages/Donate.jsx";
import Blog from "../pages/Blog.jsx";
import Contact from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support-our-cause" element={<SupportOurCause />} />
        <Route path="/support-our-cause/:slug" element={<CauseDetail />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
