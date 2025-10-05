import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications.tsx';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Blogs from '@/components/sections/Blogs';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Certifications />
        <Skills />
        <Projects />
        <Experience />
        <Blogs />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
