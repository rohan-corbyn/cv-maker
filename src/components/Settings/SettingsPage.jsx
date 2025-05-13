function SettingsPage({ currentSettingsPage }) {
  return (
    <div>
      {currentSettingsPage === "details" && <div>details</div>}
      {currentSettingsPage === "customize" && <div>customize</div>}
    </div>
  );
}

export default SettingsPage;
