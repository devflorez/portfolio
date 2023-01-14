import React from "react";

export default function Title({ title }) {
  return (
    <div
        className="flex flex-col items-start justify-center gap-2"
    >
      <h3 className="text-2xl font-bold uppercase">{title}</h3>
      <div className="w-20 h-1 bg-primary rounded-full" />
    </div>
  );
}
