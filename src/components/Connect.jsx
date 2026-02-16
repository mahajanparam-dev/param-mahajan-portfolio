import { useEffect } from "react";

export default function Connect() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src*="platform.linkedin.com/badges/js/profile.js"]'
    );
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  return (
    <section id="connect" className="section connect-section">
      <h2>Connect with Me</h2>
      <div className="linkedin-badge">
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme="dark"
          data-type="HORIZONTAL"
          data-vanity="param-mahajan-386982383"
          data-version="v1"
        ></div>
      </div>
    </section>
  );
}
