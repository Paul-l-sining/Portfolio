/** @format */

import React from "react";
import Badge from "./Badge";

function Skills() {
  return (
    <div id="skills" className="w-full  p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <h2 className="py-4 text-gray-500">Frontend</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          {/* <Badge src="html.png" name="HTML" /> */}
          {/* <Badge src="css.png" name="CSS" /> */}
          <Badge src="javascript.png" name="JavaScript" />
          <Badge src="typescript.png" name="TypeScript" />
          <Badge src="react.png" name="React" />
          <Badge src="nextjs.png" name="Next" />
          {/* <Badge src="bootstrap.png" name="Bootstrap" /> */}
          {/* <Badge src="tailwind-css.png" name="TailwindCSS" /> */}
        </div>
        <h2 className="py-4 text-gray-500">Backend</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          <Badge src="node-js.png" name="Node" />
          <Badge src="golang.svg" name="Go" />
          <Badge src="python.png" name="Python" />
          {/* <Badge src="java.png" name="Java" /> */}
          {/* <Badge src="django.png" name="Django" /> */}
          {/* <Badge src="spring-boot.png" name="SpringBoot" /> */}
          <Badge src="database.png" name="SQL" />
          <Badge src="mongodb.png" name="MongoDB" />
          <Badge src="redis.svg" name="Redis" />
        </div>
        <h2 className="py-4 text-gray-500">Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          {/* <Badge src="firebase.png" name="Firebase" /> */}
          <Badge src="docker.png" name="Docker" />
          <Badge src="k8s.svg" name="Kubenetes" />
          <Badge src="aws.svg" name="AWS" />
          <Badge src="gql.svg" name="GraphQL" />{" "}
          <Badge src="git.png" name="Git" />
          <Badge src="linux.png" name="Linux" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
