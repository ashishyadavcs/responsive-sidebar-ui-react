import React from "react";
import "../src/App.css";

const Home = () => {
  return (
    <div className="container">
      <header>
        <button
          onClick={(e) => {
            e.currentTarget.parentElement.classList.toggle("active");
          }}
          className="menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>
      <aside className="sidebar">
        <img
          src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=2541&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="profile-pic"
        />
        <nav>
          <a href="#" className="active">
            Home
          </a>
          <a href="#">Explore</a>
          <a href="#">Notifications</a>
          <a href="#">Messages</a>
          <a href="#">Profile</a>
          <a href="#">Community</a>
        </nav>
      </aside>
      <main className="main-content">
        <div className="hero">
          <img
            src="https://images.unsplash.com/photo-1525069011944-e7adfe78b280?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="UFO"
          />
        </div>
        <section className="description">
          <h2>UFO Theories</h2>
          <p>
            UFO theories explore the possibility of extraterrestrial visitors,
            secret government projects, or interdimensional travel. While
            fascinating, concrete evidence remains elusive, leading to ongoing
            discussions between believers and skeptics.
          </p>
          <div className="members">
            {[...Array(5)].map((img) => (
              <img src={`https://xsgames.co/randomusers/avatar.php?g=male`} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

/* App.css */
