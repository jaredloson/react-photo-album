import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Screen from "../components/Screen";
import getData from "../api/getData";
import AppContext from "../context/AppContext";

const AlbumsScreen = ({ position }) => {
  const [data, setData] = useState(null);
  const { selectedUser, setSelectedUser, setSelectedAlbum } = useContext(
    AppContext
  );

  useEffect(() => {
    if (!selectedUser) {
      setData(null);
      return;
    }

    const getAlbums = async () => {
      setData(null);
      const users = await getData("albums", { userId: selectedUser.id });
      setData(users);
    };

    getAlbums();
  }, [selectedUser]);

  console.log("albums", data);

  return (
    <Screen position={position}>
      <h2 className="text-xl">
        {selectedUser ? `${selectedUser.name}'s Albums` : "Albums"}
      </h2>
      <button
        type="button"
        onClick={() => setSelectedUser(null)}
        className="w-12 text-left"
      >
        Back
      </button>

      {data &&
        data.map(album => (
          <button
            key={album.id}
            type="button"
            onClick={() => setSelectedAlbum(album)}
          >
            {album.title}
          </button>
        ))}
    </Screen>
  );
};

AlbumsScreen.propTypes = {
  position: PropTypes.number.isRequired,
};

export default AlbumsScreen;
