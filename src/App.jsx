import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { Sparkles } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ToastNotification = () => {
  const { toastMessage } = useShop();
  if (!toastMessage) return null;
  return (
    <div className="toast-banner">
      <Sparkles size={16} />
      <span>{toastMessage}</span>
    </div>
  );
};

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.995 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.995,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Home />
          </motion.div>
        }
      />
      <Route
        path="/shop"
        element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Shop />
          </motion.div>
        }
      />
      <Route
        path="/about"
        element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <About />
          </motion.div>
        }
      />
      <Route
        path="/contact"
        element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Contact />
          </motion.div>
        }
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <HashRouter>
        <ScrollToTop />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '64px' }}>
          <Header />
          <main style={{ flex: 1, position: 'relative' }}>
            <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
              <AppRoutes />
            </AnimatePresence>
          </main>
          <Footer />

          {/* Interactive Modals & Drawers */}
          <QuickViewModal />
          <CartDrawer />
          <SearchModal />
          <ToastNotification />

          {/* Mobile Bottom Navigation */}
          <MobileBottomNav />
        </div>
      </HashRouter>
    </ShopProvider>
  );
}
