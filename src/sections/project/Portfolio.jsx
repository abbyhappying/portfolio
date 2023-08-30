import './portfolio.css'
import Projects from './Projects'
import { useState } from 'react'
import Skill from './Skill'
import data from './data'
import Project from './Project'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <p>
        Check out some of the projects I already done.
      </p>

      <div className="container portfolio__container">

        <Projects projects={projects} />
        <h3>Technical skills</h3>
        <Skill />
      </div>
    </section>
  )
}

export default Portfolio
