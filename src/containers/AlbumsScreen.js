import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Screen from "../components/Screen";
import getData from "../api/getData";
import AppContext from "../context/AppContext";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const AlbumsScreen = ({ position }) => {
  const [data, setData] = useState(null);
  const { selectedUser, setSelectedUser, setSelectedAlbum } = useContext(
    AppContext
  );

  useEffect(() => {
    if (!selectedUser) {
      return;
    }

    const getAlbums = async () => {
      setData(null);
      const users = await getData("albums", { userId: selectedUser.id });
      setData(users);
    };

    getAlbums();
  }, [selectedUser]);

  const albumsList = data
    ? data.map(item => ({
        id: item.id,
        title: item.title,
        onClick: () => setSelectedAlbum(item),
      }))
    : [];

  return (
    <Screen position={position}>
      <Header
        title={selectedUser && `${selectedUser.name}'s Albums`}
        onBack={() => setSelectedUser(null)}
      />

      <ul>
        {albumsList.map(item => (
          <ListItem key={item.id} title={item.title} onClick={item.onClick} />
        ))}
      </ul>
    </Screen>
  );
};

AlbumsScreen.propTypes = {
  position: PropTypes.number.isRequired,
};

export default AlbumsScreen;
