import React from 'react';

export default function App() {
  return (
    <div className="Main">
      <div id="toy-header">
        <img
          src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
          alt="toy-header"
        />
      </div>

      <div id="search-bar">
        <input />
        <button>Search!</button>
      </div>

      <div id="toy-container">

        <div className="card">
          <h2> Woody</h2>
          <img src="http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png" className="toy-avatar"/>
          <p>5 Likes </p>
          <button className="like-btn">Like &lt;3</button>
        </div>

        <div className="card">
          <h2> Buzz Lightyear</h2>
          <img src="http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png" className="toy-avatar"/>
          <p>8 Likes </p>
          <button className="like-btn">Like &lt;3</button>
        </div>

        <div className="card">
          <h2> Mr. Potato Head</h2>
          <img src="https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217" className="toy-avatar"/>
          <p>3 Likes </p>
          <button className="like-btn">Like &lt;3</button>
        </div>

        <div className="card">
          <h2> Slinky Dog</h2>
          <img src="https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png" className="toy-avatar"/>
          <p>4 Likes </p>
          <button className="like-btn">Like &lt;3</button>
        </div>        
        
        <div className="card">
          <h2> Rex</h2>
          <img src="http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png" className="toy-avatar"/>
          <p>1 Likes </p>
          <button className="like-btn">Like &lt;3</button>
        </div>

        <div className="card">
          <h2> Bo Peep</h2>
          <img src="http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png" className="toy-avatar"/>
          <p>2 Likes </p>
          <button className="like-btn">Like &lt;3</button>
        </div>

        <div className="card">
          <h2> Hamm</h2>
          <img src="https://cdn140.picsart.com/244090226021212.png?r1024x1024" className="toy-avatar"/>
          <p>0 Likes </p>
          <button className="like-btn">Like &lt;3</button>
        </div>

        <div className="card">
          <h2> Little Green Men
</h2>
          <img src="http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png" className="toy-avatar"/>
          <p>-2 Likes </p>
          <button className="like-btn">Like &lt;3</button>
        </div>
      </div>
    </div>
  )
}