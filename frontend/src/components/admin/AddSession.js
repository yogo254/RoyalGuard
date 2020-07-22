import React from "react";

const AddSession = () => {
  const submit = e => {
    e.preventDefault();
  };
  return (
    <div className="row">
      <div className="col s10 offset-s1 m6 offset-m3 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        <h5 className=" blue-text">Add Session</h5>

        <form className="form" onSubmit={e => submit(e)}>
          <div className="row">
            <div className="input-field">
              <p className="left blue-text">Name:</p>
              <input
                className="black-text"
                type="text"
                id="name"
                name="name"
                placeholder="name"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Start:</p>
              <input
                className="black-text"
                type="text"
                id="start"
                name="start"
                placeholder="start"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">End:</p>
              <input
                className="black-text"
                type="text"
                id="end"
                name="end"
                placeholder="end"
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

export default AddSession;
