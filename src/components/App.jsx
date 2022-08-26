import React from 'react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar';
import Gallary from './Gallary';

function App() {
  const [imageName, setName] = useState('');
  // const [page, setPage] = useState(1);

  const hendleFormSearchSubmit = imageName => {
    setName(imageName);
    // setPage(1);
  };
  // const onClickLoadMore = () => {
  //   setPage(prevState => prevState + 1);
  // };
  return (
    <>
      <ToastContainer position="top-left" autoClose={2000} />
      <SearchBar onSubmit={hendleFormSearchSubmit} />
      <Gallary
        imageName={imageName}
        // onClickLoadMore={onClickLoadMore}
        // page={page}
      />
    </>
  );
}

export default App;
