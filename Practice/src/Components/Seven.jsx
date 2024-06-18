import React, { useState } from 'react';

function Seven() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className='flex justify-center items-center m-10'>
      <input
        type='file'
        accept='image/*'
        onChange={handleFileChange}
      />
      {file && <img src={URL.createObjectURL(file)} alt='uploaded' className='ml-4' />}
    </div>
  );
}

export default Seven;
