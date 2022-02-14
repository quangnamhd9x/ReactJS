import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowUsers from "./ShowUsers";

const getRandomUser = () => {
  return axios
    .get("https://reqres.in/api/users")
    .then((response) => {
      // console.log(response.data);
      return response;
    })
    .catch((error) => {
      return console.log(error);
    });
};

const Users = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  useEffect(() => {
    getRandomUser().then((users) => {
      console.log(users.data);
      setRandomUsers(users);
    });
  }, []);
  return (
    <div>
      {randomUsers.map((item, index) => (
        <div>{item.data}</div>
      ))}
    </div>
  );
};

export default Users;
