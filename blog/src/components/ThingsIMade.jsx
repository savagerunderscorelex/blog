import ProjectCard from "./ProjectCard";
 
// your real projects go here, not these!
const projects = [
 { name: "this site", blurb: "you're looking at it :)", githubLink: "https://github.com/savagerunderscorelex/musicislife", imageLink: "https://raw.githubusercontent.com/savagerunderscorelex/musicislife/main/demo-image.png"},
 { name: "this site", blurb: "you're looking at it :)", githubLink: "https://github.com/savagerunderscorelex/musicislife", imageLink: "https://raw.githubusercontent.com/savagerunderscorelex/musicislife/main/demo-image.png"},
];
 
export default function ThingsIMade() {
  return (
    <section>
      <h2>things I made</h2>
      {projects.map((project, i) => (
  <ProjectCard
    key={project.name}
    {...project}
  />
))}
    </section>
  );
}