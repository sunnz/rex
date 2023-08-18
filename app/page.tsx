import { Metadata } from "next";

export const metadata: Metadata = {
  title: "full-stack sunny",
};

export default function Home() {
  return (
    <main className="flex flex-col justify-between pt-24 pb-16 px-16 md:mx-32">
      <h1 className="mb-3 text-2xl text-center font-semibold">
        full-stack sunny
      </h1>
      <p>
        Hello there! My name is <strong>Sunny Yiu</strong>, I am a{" "}
        <strong>full-stack developer</strong> from{" "}
        <strong>Melbourne, Australia</strong>, working with{" "}
        <strong>
          TypeScript, NextJS, NodeJS, GraphQL, Apollo, AWS, and Terraform
        </strong>{" "}
        with the brightest team in the world.
      </p>
      <p>
        I am fond of modern TypeScript, infrastructure as code, functional
        programming and cryptography.
      </p>
      <p>
        I am a fast learner, however I believe that{" "}
        <strong>life is a marathon</strong>, not a race. Learning at a steady
        pace indefinitely gets you much further than rushing everything through.
        Over all, I enjoy a cup of coffee like most developers. 😌☕️
      </p>
    </main>
  );
}
