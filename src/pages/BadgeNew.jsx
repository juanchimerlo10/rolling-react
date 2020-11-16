import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Badge from "../component/Badge";
import BadgeForm from "../component/BadgeForm";
import BadgeHero from "../component/BadgeHero";

export default function BadgeNew() {
  const [state, setState] = useState({
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
      email: "",
    },
  });

  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <>
      <BadgeHero />

      <div className="container">
        <div className="row mb-3">
          <div className="col-6">
            <Badge
              firstName={state.form.firstName || "FIRST_NAME"}
              lastName={state.form.lastName || "LAST_NAME"}
              jobTitle={state.form.jobTitle || "JOB_TITLE"}
              twitter={state.form.twitter || "twitter"}
              email={state.form.email}
              avatarUrl="https://s.gravatar.com/avatar/a361edea965e8f0879060762b5e5618c?s=80"
            />
          </div>
          <div className="col-6">
            {/* formValues trae los estados del componente  */}
            <BadgeForm handleChange={handleChange} formValues={state.form} />
          </div>
        </div>
      </div>
    </>
  );
}
