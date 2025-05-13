import "../../styles/SettingsFormNav.css";

function SettingsPageNav({ setSettingsPage, currentSettingsPage }) {
  return (
    <nav className="settings-form-nav">
      <button
        onClick={() => setSettingsPage("details")}
        data-selected={currentSettingsPage === "details"}
      >
        Details
      </button>
      <button
        onClick={() => setSettingsPage("customize")}
        data-selected={currentSettingsPage === "customize"}
      >
        Customize
      </button>
    </nav>
  );
}

export default SettingsPageNav;
