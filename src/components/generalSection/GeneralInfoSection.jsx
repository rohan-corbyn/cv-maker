function GeneralInfoSection({ fullName, email, phone, website }) {
  return (
    <div>
      {fullName && (
        <div>
          <span>{fullName}</span>
        </div>
      )}
      {email && (
        <div>
          <span>{email}</span>
        </div>
      )}
      {phone && (
        <div>
          <span>{phone}</span>
        </div>
      )}
      {website && (
        <div>
          <span>{website}</span>
        </div>
      )}
    </div>
  );
}

export default GeneralInfoSection;
