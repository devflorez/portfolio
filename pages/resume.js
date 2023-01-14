import React from "react";
import Resume from "../components/Resume";
import { IconPrint } from "../components/Icons";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useCallback } from "react";
export default function Index({ resumeData }) {
  const componentRef = useRef();

  const resumenToPrint = useCallback(() => {
    return componentRef.current;
  }, [componentRef]);

  const handlePrint = useReactToPrint({
    content: resumenToPrint,
    documentTitle: "CV - Cristian Florez - Frontend Developer",
    
  });

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Resume ref={componentRef} resumeData={resumeData} />
      <button
        className="fixed bottom-2 right-2 p-2 text-white bg-primary rounded-full h-12 w-12 flex items-center justify-center"
        onClick={() => handlePrint()}
      >
        <IconPrint />
      </button>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);
  return {
    props: {
      resumeData: response.resumeData,
    },
  };
}
