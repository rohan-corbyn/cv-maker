function DisplaySection({ array, InfoComponent, title }) {
  return (
    <>
      {!array.every((obj) => obj.isHidden) && (
        <h3 className="section-header">{title}</h3>
      )}

      {array.map(
        (info) =>
          !info.isHidden && (
            <InfoComponent
              className="resume-section"
              info={info}
              key={info.id}
            ></InfoComponent>
          )
      )}
    </>
  );
}

export default DisplaySection;
