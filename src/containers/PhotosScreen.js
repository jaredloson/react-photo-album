import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Screen from "../components/Screen";
import getData from "../api/getData";
import AppContext from "../context/AppContext";
import Header from "../components/Header";

const PhotosScreen = ({ position }) => {
  const [data, setData] = useState(null);
  const { selectedAlbum, setSelectedAlbum } = useContext(AppContext);

  useEffect(() => {
    if (!selectedAlbum) {
      return;
    }

    const getPhotos = async () => {
      setData(null);
      const users = await getData("photos", { albumId: selectedAlbum.id });
      setData(users);
    };

    getPhotos();
  }, [selectedAlbum]);

  return (
    <Screen position={position}>
      <Header
        title={selectedAlbum && selectedAlbum.title}
        onBack={() => setSelectedAlbum(null)}
      />

      <div className="flex flex-wrap m-1">
        {data &&
          data.map(photo => (
            <img
              key={photo.id}
              src={photo.thumbnailUrl}
              className="block m-1"
              alt={photo.title}
              width={150}
              height={150}
            />
          ))}
      </div>
    </Screen>
  );
};

PhotosScreen.propTypes = {
  position: PropTypes.number.isRequired,
};

export default PhotosScreen;
