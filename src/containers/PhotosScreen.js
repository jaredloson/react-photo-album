import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Screen from "../components/Screen";
import getData from "../api/getData";
import AppContext from "../context/AppContext";

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

  console.log("photos", data);

  return (
    <Screen position={position}>
      <h2 className="text-xl">
        {selectedAlbum ? selectedAlbum.title : "Photos"}
      </h2>
      <button
        type="button"
        onClick={() => setSelectedAlbum(null)}
        className="w-12 text-left"
      >
        Back
      </button>

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
