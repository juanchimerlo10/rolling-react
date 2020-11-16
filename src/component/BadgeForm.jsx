import React from "react";

export default function BadgeForm({ handleChange, formValues }) {
  //USO FORMVALUE EN CADA INPUT MEDIANTE STATE

  //   const [state, setState] = useState({
  //     form: {},
  //   });

  //   const props.handleChange = (e) => {
  //     setState({
  //       form: {
  //         ...state.form,
  //         [e.target.name]: e.target.value,
  //       },
  //     });

  // console.log({
  //   [e.target.name]: e.target.value,
  // });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hiciste Submit");
  };

  return (
    <>
      <h1>Nuevo asistente</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="firstName"
            value={formValues.firstName}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="lastName"
            value={formValues.lastName}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            name="email"
            value={formValues.email}
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="jobTitle"
            value={formValues.jobTitle}
          />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="twitter"
            value={formValues.twitter}
          />
        </div>
        <button className="btn btn-info float-right">Enviar</button>
      </form>
    </>
  );
}
