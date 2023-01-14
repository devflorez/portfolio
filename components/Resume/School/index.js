import React from "react";

export default function School({ id, name, degree, graduated, description }) {
  return (
    <div
        className="flex flex-col items-start justify-center gap-2"
    >
      <header>
        <h3 className="text-xl font-bold  uppercase">{name}</h3>
        <h4 className="text-sm font-semibold ">
          {graduated} | {degree}
        </h4>
      </header>
      <article className="flex flex-col items-start justify-center gap-2">
        <p className="text-sm  text-justify">{description}</p>
      </article>
    </div>
  );
}
