import DisplaySection from "../DisplaySection";
import EducatonInfo from "./EducationInfo";
function EducationInfoSection({ educations }) {
  return (
    <DisplaySection
      array={educations}
      InfoComponent={EducatonInfo}
      title={"education"}
    ></DisplaySection>
  );
}

export default EducationInfoSection;
