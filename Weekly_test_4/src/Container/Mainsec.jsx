import React from "react";
import style from "../Container/Mainsec.module.css";
const Mainsec = () => {
  return (
    <>
      <div className={style.bttncontainer}>
        <button className={style.bttn}>Add New Person</button>
        <button className={style.bttn}>Retrieve Infornation</button>
      </div>

      <div className={style.container}>
        <div>
          <button className={style.bttn2}>Add New Person</button>
          <div className={style.tablecontainer}>
            <div className={style.tableheader}>Name</div>
            <div className={style.tableheader}>Date of Birth</div>
            <div className={style.tableheader}>Aadhar Number</div>
            <div className={style.tableheader}>Mobile Number</div>
            <div className={style.tableheader}>Age</div>
            <div className={style.tableheader}>Actions</div>
          </div>
        </div>
        <div className={style.container2}>
          <button className={style.bttn3}>Add</button>
        </div>
      </div>
    </>
  );
};

export default Mainsec;
