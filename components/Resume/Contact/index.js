import React from "react";

export default function Contact({ id, href, icon, text }) {
  return (
    <li className="flex flex-row items-center gap-2" key={id}>
      <a
        href={href}
        className="flex flex-row items-center gap-2  hover:text-white"
      >
        <span className="flex flex-row items-center justify-center w-8 h-8 bg-primary rounded-full">
          <i className="text-2">{icon}</i>
        </span>

        <span className="text-sm text-white hover:text-primary">{text}</span>
      </a>
    </li>
  );
}
