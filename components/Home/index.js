import React from "react";
import Link from "next/link";
export default function Home({
  hello,
  iam,
  position,
  resume,
}) {
  return (
    <section
      id="home"
      className="flex flex-col items-start justify-center h-screen "
    >
      <div className="flex flex-col items-start justify-center max-w-2xl gap-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight md:pr-8">
          {hello} <br />
          {iam}{" "}
          <span className="text-primary font-semibold">
            Cristian Florez
          </span>{" "}
          <br />
          <strong>{position}</strong>
        </h1>
        <Link
          href="/resume"
          className="bg-primary text-black italic font-semibold z-10 py-4 px-8 shadow-lg hover:shadow"
        >
          {resume}
        </Link>
      </div>
    </section>
  );
}
