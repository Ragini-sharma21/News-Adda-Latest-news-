import React from 'react'


const NavBar=()=>{


  
    return (

<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand " href="/">News Adda</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/business">Bussiness</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/entertainment">Entertainment</a>
        </li>
      {/* <li className="nav-item">
        <a className="nav-link " href="/general">General</a>
        </li> */}
      <li className="nav-item">
        <a className="nav-link" href="/health">Health</a>
        </li>
      <li className="nav-item">
        <a className="nav-link" href="/science">Science</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/sports">Sports</a>
        </li>
      <li className="nav-item">
        <a className="nav-link" href="/technology">Technology</a>
      </li>
    </ul>
  </div>
</nav>
    )
  }


export default NavBar
