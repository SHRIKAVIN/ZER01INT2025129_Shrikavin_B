const Navbar = () => {
    return (
      <nav
        className="navbar"
        style={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        <div
          className="navbar-logo"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/src/assets/images.jpg"
            alt="Logo"
            style={{
              height: "3rem",
              marginRight: "1rem",
            }}
          />
          <h1 style={{ color: "red", fontFamily: "Cursive" }}>
            How to Train your Dragon
          </h1>
        </div>
        <ul
          className="nav-links"
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="https://www.google.com/search?q=how+to+train+your+dragon+2&oq=how+to+train+your+dragon+2+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEJMTA4NDNqMGoxqAIIsAIB&sourceid=chrome&ie=UTF-8"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Synopsis
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/search?q=how+to+train+your+dragon+2+characters&sca_esv=5368b2b054826b5d&sxsrf=ADLYWIKZvkYwegWMaKSe7X85CgVmUNNn6w%3A1736765039190&ei=b-6EZ--mC5GP4-EP3IK6kQw&oq=how+to+train+your+dragon+2+chars&gs_lp=Egxnd3Mtd2l6LXNlcnAiIGhvdyB0byB0cmFpbiB5b3VyIGRyYWdvbiAyIGNoYXJzKgIIADIMEAAYgAQYDRhGGPsBMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMhgQABiABBgNGEYY-wEYlwUYjAUY3QTYAQFI6RlQWVi9EXABeAGQAQCYAeYBoAGuCqoBAzItNrgBA8gBAPgBAZgCB6AC5grCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgIWEC4YgAQYsAMYQxjUAhjIAxiKBdgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAgUQABiABMICChAAGIAEGEMYigXCAgoQLhiABBhDGIoFwgIKEAAYgAQYRhj7AcICFhAAGIAEGEYY-wEYlwUYjAUY3QTYAQGYAwCIBgGQBhO6BgYIARABGAmSBwUxLjAuNqAHhTY&sclient=gws-wiz-serp"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Characters
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/2BP38770KNo?si=rYzHk8PBSxwGu6fy"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Trailer
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;