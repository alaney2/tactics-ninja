import React from 'react';

function Changelog(props) {
  return (
    <div className="text-sm md:text-lg sm:px-24 md:px-0 md:py-8 grid grid-cols-1 md:grid-cols-4">
      <div className="md:col-start-2 col-span-2 rounded-lg shadow-2xl bg-gray-700 p-8 lg:px-16">
        <p className="text-xl">Feel free to fork this repository and make your own changes!</p>
        <a href="https://github.com/alaney2/tactics-ninja" target="_blank" rel="noreferrer noopener" className="py-4 text-xl hover:text-pink-400 md:col-start-2 col-span-2">alaney2/tactics-ninja</a>
        <div className="">
          <div className="mt-8 my-4">
            <h2 className="text-md md:text-lg">July 21st, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Add text when game reaches checkmate, draw, or stalemate position</li>
              <li>Add <i>New game</i> button</li>
              <li>Minor fixes</li>
            </ul>
          </div>

          <div className="mt-8 my-4">
            <h2 className="text-md md:text-lg">July 20th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Update changelog</li>
              <li>Add <i>Clear Board</i> and <i>New board</i> button</li>
              <li>Many bug fixes and styling changes</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-md md:text-lg">July 19th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Integrate Analysis tool to query Lichess API</li>
              <li>Add switch in Analysis tool to select turn</li>
              <li>Bug fixes and styling</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-md md:text-lg">July 18th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Mobile and smaller devices can access all features</li>
              <li>Add tooltip next to FEN input</li>
              <li>Many bug fixes and styling changes</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-md md:text-lg">July 17th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Styling</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-md md:text-lg">July 16th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Add support for mobile</li>
              <li>Many bug fixes</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-md md:text-lg">July 15th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Redeploy website to Vercel</li>
              <li>Styling</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-md md:text-lg">July 14th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Redeploy website to Heroku</li>
              <li>Split <i>Analyze</i> and <i>Play</i> boards</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-md md:text-lg">July 13th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Delete and redo all styling using Tailwind CSS</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-md md:text-lg">July 7th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Change navigation bar to match design</li>
              <li>Create <i>Move History</i> component</li>
              <li>Route pages using react-router-dom</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-md md:text-lg">July 5th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Route pages using react-router-dom</li>
              <li>Change board size as screen width and height changes</li>
              <li>Add move validation when playing against computer</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-md md:text-lg">July 4th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Add chess board</li>
              <li>Resize chess pieces</li>
              <li>Deploy to Amplify</li>
            </ul>
          </div>
          
          <div className="my-4">
            <h2 className="text-md md:text-lg">July 4th, 2021</h2>
            <ul className="list-disc mx-8">
              <li>Design website - Galaxia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changelog;