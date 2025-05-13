import GeneralInfoSection from "./generalSection/GeneralInfoSection";
import EducationInfoSection from "./educationSection/EducationInfoSection";
import ExperienceInfoSection from "./experienceSection/ExperienceInfoSection";
import "../styles/resume.css";

export default function Resume({ generalInfo, sections, layout }) {
  return (
    <div className="resume-container">
      <div className={`resume ${layout}`}>
        <GeneralInfoSection
          fullName={generalInfo.fullName}
          email={generalInfo.email}
          website={generalInfo.website}
        />
        <EducationInfoSection educations={sections.educations} />
        <ExperienceInfoSection experiences={sections.experiences} />
      </div>
    </div>
  );
}
