import React, { useState } from "react";
import classes from "./style/Formaplic.module.css";
import { auth, db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Formaplic = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobType, setJobType] = useState("");

  const saveDetails = async (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      alert("Please enter a valid input");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      firstName,
      lastName,
      phoneNumber,
      jobType,
      displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    alert("נרשמת בהצלחה");

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    props.userSentForm(true);
  };

  return (
    <div className={classes.card}>
      <>
        <form onSubmit={saveDetails}>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
            placeholder="First name"
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
            placeholder="Last name"
          />
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input"
            placeholder="Phone number"
          />
          <label htmlFor="jobs">Choose a job:</label>
          <select
            id="jobs"
            name="jobs"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="input"
            placeholder="Type Of Job"
          >
            <option value="">Choose one option</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="project_manager">Project Manager</option>
          </select>
          <button type="submit" className="button">
            Send
          </button>
        </form>
      </>
    </div>
  );
};

export default Formaplic;
