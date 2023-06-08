import React, { useState } from "react";

const MyAccordion = ({question, answere}) => {
    const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <p className="add" onClick={() => setShow(!show)}>{show ? "➖" : "➕" } </p>
        <h3>{question}</h3>
      </div>
      { show && <p className="answere">{answere}</p> }
    </>
  );
}

export default MyAccordion;
