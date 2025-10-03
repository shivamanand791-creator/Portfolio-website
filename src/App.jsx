import { useState } from "react";
import './App.css'
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle"; 
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";

const AppContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <>
       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} ${isDark ? "bg-black text-gray-100" : "bg-white text-gray-900"}`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home/>
          <Projects/>
          <About/>
          <Contact/>

        </div>
    </>
  );
};
function App() {
   return (
    <ThemeProvider>  
      <AppContent />  
    </ThemeProvider>
  );
}

export default App
