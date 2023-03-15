import React, { useState } from "react";
import "./style/Filter.css";

const Filter = ({ messages }) => {
  const [filteredMessages, setFilteredMessages] = useState([]);

  const handleFilter = (event) => {
    const jobType = event.target.value;
    if (jobType === "") {
      setFilteredMessages(messages);
      // } else if (jobType === "all") {
      //  setFilteredMessages([]);
    } else {
      const newMessages = messages.filter(
        (message) => message.jobType === jobType
      );
      setFilteredMessages(newMessages);
    }
  };

  return (
    <div>
      <select onChange={handleFilter}>
        <option value="">All job type</option>
        <option value="designer">Designer</option>
        <option value="developer">Developer</option>
        <option value="project_manager">Project Manager</option>
      </select>
      {filteredMessages.map((message) => (
        <div className="eachCart" key={message.id}>
          <p>{message.input}</p>
          <p className="name">{`${message.firstName} ${message.lastName}`}</p>
          <p>{message.phoneNumber}</p>
          <p>{message.jobType}</p>
        </div>
      ))}
    </div>
  );
};

export default Filter;

/*
const Filter = () => {
  // Get a reference to the Firestore database
  const db = firebase.firestore();

  // Build a query to get documents where the "text" field is equal to "yeppppp"
  const query = db
    .collection("your-collection")
    .where("jobType", "==", "project_manager");

  // Execute the query
  query
    .get()
    .then((querySnapshot) => {
      // Iterate over the documents in the query results
      querySnapshot.forEach((doc) => {
        // Access the data for each document
        const data = doc.data();
        console.log(data);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};


export default Filter;
*/
