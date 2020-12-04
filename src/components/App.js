import React from "react";

const App = () => {
  const text = "Hello World";

  return (
    <div className="py-12">
      <header className="max-w-lg mx-auto">
        <h1 className="text-xl text-center">{text}</h1>
      </header>
    </div>
  );
};

export default App;
