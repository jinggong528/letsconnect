import React from "react";

export default () => {
  return (
    <footer className="bg-info text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} LetsConnect
      <h2>
        <i className="far fa-smile" />
        Lets go for a <i className="fas fa-table-tennis" /> !
      </h2>
    </footer>
  );
};
