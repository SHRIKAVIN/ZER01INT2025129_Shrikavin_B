const Container = () => {
    return (
      <div
        className="container"
        style={{
          margin: "auto",
          width: "100%",
          height: "auto",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#121212",
        }}
      >
        <div
          className="intro"
          style={{
            fontFamily: "Cursive, system-ui, Avenir, Helvetica, Arial, sans-seri",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#00aaff",
            fontWeight: "bold",
            width: "100%",
            height: "fit-content",
            display: "flex",
            justifyContent: "Center",
            alignItems: "center",
          }}
        >
          <h1>DRAGON</h1>
        </div>
        <div
          className="para"
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            margin: "0",
            padding: "0",
            alignContent: "center",
          }}
        >
          <p
            className="para1"
            style={{
              fontSize: "1.2rem",
              color: "white",
              margin: "0",
              padding: "0",
              width: "80%",
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            How to Train Your Dragon is a beloved animated film franchise that blends adventure, humor, and heartwarming storytelling. Set in the mythical Viking world of Berk, the story follows Hiccup Horrendous Haddock III, an awkward and inventive young Viking who struggles to live up to his tribe's expectations as a dragon slayer. His life takes a turn when he befriends Toothless, a rare and fearsome Night Fury dragon. This unlikely friendship challenges the age-old animosity between humans and dragons, leading Hiccup to discover that dragons are not the dangerous creatures his people believe them to be. Through Hiccup's efforts, the once-hostile relationship between Vikings and dragons transforms into one of understanding and harmony, showcasing the power of compassion and open-mindedness.
          </p>
        </div>
        <div
          className="phcontent"
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
            fontFamily: "Cursive",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <div
            className="image"
            style={{
              width: "50%",
              height: "fit-content",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "70px",
            }}
          >
            <img
              src="/src/assets/image.jpg"
              style={{
                width: "50%",
                height: "fit-content",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.8)",
                padding: "20px",
                margin: "20px",
                border: "1px solid #f0f0f0",
              }}
              alt="Ready Player One Poster"
            />
          </div>
          <div
            className="imgcont"
            style={{
              width: "50%",
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              marginRight: "40px",
            }}
          >
            <p>
            The franchise, based on Cressida Cowell's book series, has been praised for its stunning animation, captivating music, and deeply relatable characters. It explores themes of acceptance, bravery, and personal growth, as Hiccup matures from an unsure boy into a confident leader. The dynamic between Hiccup and Toothless lies at the heart of the story, illustrating the unbreakable bond of trust and loyalty. Whether through breathtaking aerial dragon flights or heartfelt moments of camaraderie, How to Train Your Dragon delivers a timeless tale that resonates with audiences of all ages.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Container;