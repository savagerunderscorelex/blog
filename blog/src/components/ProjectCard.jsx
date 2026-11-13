export default function ProjectCard({ name, blurb, imageLink, githubLink }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <img src={imageLink}/>
      <p>{blurb}</p>
      <a href={demoLink}>hi</a>
      <a href={githubLink}>bye</a>
    </article>
  );
}