import DisplaySection from "../DisplaySection";
import ExperienceInfo from "./ExperienceInfo";

function ExperienceInfoSection({ experiences }) {
  return (
    <DisplaySection
      array={experiences}
      InfoComponent={ExperienceInfo}
      title="experience"
    ></DisplaySection>
  );
}

export default ExperienceInfoSection;
