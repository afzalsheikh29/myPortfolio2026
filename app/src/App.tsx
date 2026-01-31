import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Skills } from "@/pages/Skills";
import { Projects } from "@/pages/Projects";
import { Experience } from "@/pages/Experience";
import { Certifications } from "@/pages/Certifications";
import { Contact } from "@/pages/Contact";

function Layout() {
  return (
    <div className="min-h-screen bg-dark-primary">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.165, 0.84, 0.44, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="skills"
            element={
              <PageTransition>
                <Skills />
              </PageTransition>
            }
          />
          <Route
            path="projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path="experience"
            element={
              <PageTransition>
                <Experience />
              </PageTransition>
            }
          />
          <Route
            path="certifications"
            element={
              <PageTransition>
                <Certifications />
              </PageTransition>
            }
          />
          <Route
            path="contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
