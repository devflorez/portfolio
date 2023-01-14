import React from "react";

export default function Experience({
  id,
  company,
  title,
  years,
  description,
  responsibilities,
}) {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <header>
        <h3 className="text-xl font-bold  uppercase">{company}</h3>
        <h4 className="text-sm font-semibold ">
          {years} | {title}
        </h4>
      </header>
      <article className="flex flex-col items-start justify-center gap-2">
        <p className="text-sm  text-justify">{description}</p>
        <ul className="flex flex-col flex-wrap gap-2 list-disc list-inside pl-2">
          {responsibilities.map((responsibility, index) => (
            <li className="text-sm" key={index}>
              {responsibility}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
