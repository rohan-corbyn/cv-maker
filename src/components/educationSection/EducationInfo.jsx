function EducatonInfo({ info }) {
  const { college, degree, location, startDate, endDate } = info;
  return (
    <div>
      <div className="date-range">
        <p>
          {startDate}
          {startDate && endDate && <span> - </span>}
          {endDate}
        </p>
        <p>{location}</p>
      </div>
      <div className="education-info-group">
        <p className="education-info-college-name">{college}</p>
        <p className="education-info-degree">{degree}</p>
      </div>
    </div>
  );
}

export default EducatonInfo;
