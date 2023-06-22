import { useState } from "react";

const AddEmployeeView = (props) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const resetInputField = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const addEmployee = () => {
    props.addEmployee({
      firstName,
      lastName,
      email,
      phone,
    });
  };
  return (
    <div className="container col-lg-9">
      <div className="new_sect d-flex flex-column justify-content-center">
        <div className="new_sect_text">
          <p>New Employee</p>
        </div>
        <div className="new_input_sect d-flex flex-column">
          <section className="d-flex justify-content-center">
            <label>
              First Name <span className="req">*</span>
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></input>
          </section>
          <section className="d-flex justify-content-center">
            <label>
              Last Name <span className="req">*</span>
            </label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></input>
          </section>
          <section className="d-flex justify-content-center">
            <label>
              Email <span className="req">*</span>
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </section>
          <section className="d-flex justify-content-center">
            <label>
              Phone <span className="req">*</span>
            </label>
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
          </section>
          <div className="btn_sect d-flex justify-content-end">
            <button className="clear_btn" onClick={resetInputField}>
              Clear All
            </button>
            <button className="add_btn" onClick={addEmployee}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddComponent = (props) => {
  return <AddEmployeeView addEmployee={props.addEmployee} />;
};

export default AddComponent;
