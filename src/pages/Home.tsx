import Hero from "../components/portfolio/Hero"
import About from "../components/portfolio/About"
import Skills from "../components/portfolio/Skills"
import Experience from "../components/portfolio/Experience"
import Projects from "../components/portfolio/Projects"
import Contact from "../components/portfolio/Contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}