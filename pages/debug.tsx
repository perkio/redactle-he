import { getCookie } from "cookies-next";
import React, { useState } from "react";

import SaveManagement from "@caviardeul/utils/save";

const DebugPage: React.FC = () => {
  const [ready, setReady] = useState(false);

  return (
    <main>
      <div className="left-container">
        <h1>Debug</h1>
        {ready ? (
          <pre>
            User-Agent: {navigator.userAgent}
            <br />
            UserId:{" "}
            {getCookie("userId")?.toString()?.slice(0, 24)?.padEnd(32, "X") ??
              "None"}
            <br />
            Settings: {JSON.stringify(SaveManagement.getSettings())}
            <br />
            Encryption key: {SaveManagement.getEncryptionKey(false, false)}
            <br />
            Saved progress: {localStorage.getItem("progress")}
          </pre>
        ) : (
          <div>
              מידע לניפוי באגים, עלול להכיל נתוניים רגישים, אל תשתף אותם עם אחרים!
          </div>
        )}
        <button onClick={() => setReady(!ready)}>
          {ready ? "הסתר" : "הצג"}
        </button>
      </div>
      <div className="right-container" />
    </main>
  );
};

export default DebugPage;
