import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Screen from "../components/Screen";
import getData from "../api/getData";
import AppContext from "../context/AppContext";

const UsersScreen = ({ position }) => {
  const [data, setData] = useState(null);
  const { setSelectedUser } = useContext(AppContext);

  useEffect(() => {
    const getUsers = async () => {
      const users = await getData("users");
      setData(users);
    };

    getUsers();
  }, []);

  console.log("users", data);

  return (
    <Screen position={position}>
      <h2 className="text-xl">All Users</h2>

      {data &&
        data.map(user => (
          <button
            key={user.id}
            type="button"
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </button>
        ))}
    </Screen>
  );
};

UsersScreen.propTypes = {
  position: PropTypes.number.isRequired,
};

export default UsersScreen;
