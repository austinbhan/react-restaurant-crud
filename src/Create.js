import React from 'react';

export default function Create() {
  async function goBack() {
    window.location.replace('/');
  }


  return (
    <>
      <button onClick={goBack}>Go Back</button>
      <form className='create-book'>
        <label>Name: <input></input></label>
        <label>Title: <input></input></label>
        <label>Year: <input></input></label>
        <button>Submit</button>
      </form>
    </>
  );
}