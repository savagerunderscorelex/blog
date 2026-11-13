import { useState } from "react";
import Hero from "./components/Hero";
import ThingsIMade from "./components/ThingsIMade";

// the order here IS the story
const chapters = [Hero, ThingsIMade];

export default function App() {
  const [step, setStep] = useState(0);
  const finished = step === chapters.length - 1;

  return (
    <main>
      {chapters.slice(0, step + 1).map((Chapter, i) => (
        <Chapter key={i} />
      ))}

      {!finished && (
        <button onClick={() => setStep(step + 1)}>keep going →</button>
      )}
    </main>
  );
}