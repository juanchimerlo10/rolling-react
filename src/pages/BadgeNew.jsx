import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Badge from "../component/Badge";
import BadgeForm from "../component/BadgeForm";
import BadgeHero from "../component/BadgeHero";

export default function BadgeNew() {
  const [state, setState] = useState({
    form: {},
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
              firstName={state.form.firstName}
              lastName={state.form.lastName}
              jobTitle={state.form.jobTitle}
              twitter={state.form.twitter}
              avatarUrl="http://1.gravatar.com/avatar/2bd6474c77fd501924adfa0aae631f57"
            />
          </div>
          <div className="col-6">
            <BadgeForm handleChange={handleChange} />
          </div>
        </div>
      </div>
    </>
  );
}
