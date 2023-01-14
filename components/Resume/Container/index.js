import React from "react";
import Title from "../Title";
export default function Container({ title, description, list, children }) {
  return (
    <section className="flex flex-col items-start justify-center gap-2">
      {title && <Title title={title} />}
      {description && (
        <p className="text-sm text-white text-justify">{description}</p>
      )}

      {children}
      {list && (
        <ul className="flex flex-col flex-wrap gap-2 list-disc list-inside">
          {list.map((item, index) => (
            <li 
            key={index}
            className="text-sm text-white hover:text-primary" >
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
