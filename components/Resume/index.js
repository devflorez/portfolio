import React, {forwardRef} from "react";
import Container from "./Container";
import Contact from "./Contact";
import Experience from "./Experience";
import School from "./School";
import {
  SKILLS_DATA,
  SKILLS_DATA_OTHER,
  CONTACT_DATA,
} from "../../utils/constants";
import {
  IconEmail,
  IconMarker,
  IconPhone,
  IconLinkedin,
  IconGithub,
  IconWorld,
} from "../Icons";

 function Resume({ resumeData , ...props}, ref) {
  const icons = {
    location: <IconMarker />,
    phone: <IconPhone />,
    email: <IconEmail />,
    website: <IconWorld />,
    linkedin: <IconLinkedin />,
  };

  return (
    <div
      id="resume"
      className="flex lg:flex-row  flex-col  gap-0 min-h-screen  w-full"
      {...props}
      ref={ref}
    >
      <aside className="flex flex-col lg:flex-basis-1/3  lg:w-1/3 lg:max-w-2xl gap-3 bg-[#A6A6A6] p-4">
        <Container>
          <div className="flex flex-col  justify-center gap-2">
            <h1 className="text-3xl font-bold uppercase">
              Cristian David Florez Merlano
            </h1>
            <h2 className="uppercase text-sm bg-primary font-medium p-1 px-2 md:px-4 rounded-full w-fit">
              {resumeData?.position}
            </h2>
          </div>
          <ul className="flex flex-col items-start justify-center gap-2">
            {CONTACT_DATA.map((contact) => (
              <Contact
                key={contact.id}
                id={contact.id}
                href={contact.href}
                icon={icons[contact.icon]}
                text={contact.text}
              />
            ))}
          </ul>
        </Container>
        <Container
          title={resumeData.profile.title}
          description={resumeData.profile.description}
        />
        <Container title={resumeData.skills} list={SKILLS_DATA} />
        <Container title={resumeData.skillsOther} list={SKILLS_DATA_OTHER} />
        <Container
          title={resumeData.languages.title}
          list={resumeData.languages.languages}
        />
      </aside>
      <main className="flex flex-col lg:flex-basis-2/3  lg:w-2/3  lg:max-w-2xl gap-3  p-4">
        <Container title={resumeData.work.title}>
          {resumeData.work.jobs.map((experience) => (
            <Experience
              key={experience.id}
              id={experience.id}
              company={experience.company}
              title={experience.title}
              years={experience.years}
              description={experience.description}
              responsibilities={experience.responsibilities}
            />
          ))}
        </Container>
        <Container title={resumeData.education.title}>
          {resumeData.education.schools.map((school) => (
            <School
              key={school.id}
              id={school.id}
              name={school.name}
              degree={school.degree}
              graduated={school.graduated}
              description={school.description}
            />
          ))}
        </Container>
      </main>
    </div>
  );
}

export default forwardRef(Resume);
