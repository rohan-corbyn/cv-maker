import "./styles/App.css";
import Resume from "./components/Resume";
import { generalInfo, sections } from "./components/default-data";
import { useState } from "react";
import SettingsPageNav from "./components/Settings/SettingsPageNav";
import SettingsPage from "./components/Settings/SettingsPage";

function App() {
  const [currentSettingsPage, setSettingsPage] = useState("details");
  const [resumeLayout, setResumeLayout] = useState("top");

  return (
    <div className="app">
      <div className="settings">
        <SettingsPageNav
          setSettingsPage={setSettingsPage}
          currentSettingsPage={currentSettingsPage}
        />
        <SettingsPage currentSettingsPage={currentSettingsPage} />
      </div>

      <Resume
        generalInfo={generalInfo}
        sections={sections}
        layout={resumeLayout}
      />
    </div>
  );
}

export default App;
