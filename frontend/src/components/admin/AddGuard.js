import React from "react";

const AddGuard = () => {
  const submit = e => {
    e.preventDefault();
  };
  return (
    <div className="row">
      <div className="col s10 offset-s1 m6 offset-m3 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        <h5 className=" blue-text">Add Guard</h5>

        <form className="form" onSubmit={e => submit(e)}>
          <div className="row">
            <div className="input-field">
              <p className="left blue-text">Firstname:</p>
              <input
                className="black-text"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="firstname"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Surname:</p>
              <input
                className="black-text"
                type="text"
                id="surname"
                name="surname"
                placeholder="surname"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Lastname:</p>
              <input
                className="black-text"
                type="text"
                id="lastname"
                name="lastname"
                placeholder="lastname"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Date of Birth:</p>
              <input
                className="black-text"
                type="text"
                id="dob"
                name="dob"
                placeholder="dob"
                required
              />
            </div>
            <p className="center blue-text">Education</p>
            <div className="input-field">
              <p className="left blue-text">Institution:</p>
              <input
                className="black-text"
                type="text"
                id="institution"
                name="institution"
                placeholder="institution"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Certification:</p>
              <input
                className="black-text"
                type="text"
                id="certification"
                name="certification"
                placeholder="certification"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Description:</p>
              <input
                className="black-text"
                type="text"
                id="description"
                name="description"
                placeholder="description"
                required
              />
            </div>
            <button className="btn">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGuard;
