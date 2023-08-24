/** @format */

import React from "react";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            src="to-do.png"
            title="To-do List"
            details="HTML, CSS, JavaScript"
            ProjectUrl="/to-do-list"
          />
          <ProjectItem
            src="tbc.jpg"
            title="Pokedex"
            details="Next13 Frontend"
            ProjectUrl="/tbc"
          />
          <ProjectItem
            src="tbc.jpg"
            title="FaceBowl"
            details="GraphQL FullStack"
            ProjectUrl="/tbc"
          />
          <ProjectItem
            src="tbc.jpg"
            title="SimpleBank"
            details="Go Backend"
            ProjectUrl="/tbc"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
