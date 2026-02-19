import { useEffect } from "react";

const Connect = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
   <section id="connect" className="section">
  <h2>Connect</h2>

  <div className="glass-card connect-card">
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
};

export default Connect;
