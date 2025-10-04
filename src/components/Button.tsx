import React from 'react';

const Button = () => {
  const handleDownload = () => {
    console.log('Download button clicked');

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Path to your CV file in the public folder
    link.download = 'Timur_Aizatvafin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="p-2 rounded-lg hover:bg-secondary transition-colors"
      aria-label="Download CV"
    >
      <svg viewBox="0 0 256 256" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
        <path d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12" fill="currentColor" />
      </svg>
    </button>
  );
}

export default Button;
