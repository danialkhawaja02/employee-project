import { useEffect, useState } from "react";

const EmployeeDetails = (props) => {
  return (
    <div className="col-6 current_emp">
      <section className="emp_details">
        <h2>
          {props.payload?.firstName} {props.payload?.lastName}
        </h2>
        <p>{props.payload?.email}</p>
        <p>{props.payload?.phone}</p>
      </section>
      <section className="close_sect">
        <i className="fa-sharp fa-regular fa-circle-xmark"></i>
      </section>
    </div>
  );
};

const CurrentComponent = (props) => {
  const [filteredEmployee, updateTxn] = useState(props.updateemployee);

  useEffect(() => {
    updateTxn(props.updateemployee);
  }, [props.updateemployee]);
  return (
    <div>
      <div className="current_sect d-flex flex-column align-items-center">
        <div className="current_text_sect align-self-center">
          Current Employees
        </div>

        {filteredEmployee?.length
          ? filteredEmployee.map((payload) => (
              <EmployeeDetails payload={payload} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default CurrentComponent;
