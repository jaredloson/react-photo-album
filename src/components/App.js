import React, { useState } from "react";
import UsersScreen from "../containers/UsersScreen";
import AlbumsScreen from "../containers/AlbumsScreen";
import PhotosScreen from "../containers/PhotosScreen";
import AppContext from "../context/AppContext";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  let position = 0;
  if (selectedUser) {
    position -= 1;
  }
  if (selectedAlbum) {
    position -= 1;
  }

  return (
    <AppContext.Provider
      value={{ selectedUser, selectedAlbum, setSelectedUser, setSelectedAlbum }}
    >
      <main className="relative h-full w-full">
        <UsersScreen position={0 + position} />
        <AlbumsScreen position={1 + position} />
        <PhotosScreen position={2 + position} />
      </main>
    </AppContext.Provider>
  );
};

export default App;
