import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Screen from "../components/Screen";
import getData from "../api/getData";
import AppContext from "../context/AppContext";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

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

  const usersList = data
    ? data.map(item => ({
        id: item.id,
        title: item.name,
        onClick: () => setSelectedUser(item),
      }))
    : [];

  return (
    <Screen position={position}>
      <Header title="All Users" />

      <ul>
        {usersList.map(item => (
          <ListItem key={item.id} title={item.title} onClick={item.onClick} />
        ))}
      </ul>
    </Screen>
  );
};

UsersScreen.propTypes = {
  position: PropTypes.number.isRequired,
};

export default UsersScreen;
