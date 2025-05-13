import uniqid from "uniqid";

const generalInfo = {
  fullName: "rohan corbyn",
  email: "rohancorbyn@gmail.com",
  website: "https://www.linkedin.com/in/rohan-corbyn",
};

const educationInfo = {
  id: uniqid(),
  college: "Goldsmiths University",
  degree: "Computer Science (BSc)",
  location: "London",
  startDate: "2015",
  endDate: "2019",
  isHidden: false,
  isCollapsed: false,
};

const experienceInfo = {
  id: uniqid(),
  companyName: "Dotmatics Ltd.",
  positionTitle: "Full-Stack Developer",
  location: "London, UK",
  description:
    "Developed and maintained ELN, Capture and store experiments and share with internal and external collaborators",
  startDate: "08/2019",
  endDate: "08/2024",
  isHidden: false,
  isCollapsed: true,
};

const sections = {
  educations: [educationInfo],
  experiences: [experienceInfo],
};

export { generalInfo, sections };
