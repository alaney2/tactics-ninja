import React from 'react';

function Changelog(props) {
  return (
    <div className="p-8 sm:px-24 md:px-0 md:py-8 grid grid-cols-1 md:grid-cols-4">
      <p className="md:col-start-2 col-span-2">Feel free to fork this repository and make your own changes!</p>
      <a href="https://github.com/alaney2/tactics-ninja" className="hover:text-pink-400 md:col-start-2 col-span-2">alaney2/tactics-ninja</a>
      <div className="md:col-start-2 col-span-2">
        <h2 className="text-lg">0.0.0 (July 4, 2021)</h2>
        <ul>
          <li>No website yet.</li>
        </ul>
      </div>
      
    </div>
  );
}

export default Changelog;