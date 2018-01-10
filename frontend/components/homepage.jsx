import React from 'react';

class HomePage extends React.Component {

  render() {
    return (
      <main className="homepage">
        <section className="splash-image">
          <h1>Stay with Locals and Meet Travelers</h1>
          <h2>Share Authentic Travel Experiences</h2>
        </section>

        <section className="all-testimonials">
          <h1 className="testimonials-header">Why Join?</h1>
          <section className="testimonials">
            <aside className="testimonial">
              <div className="testimonial-img-1"/>
              <h2>On Surfing</h2>
              <p>
                "Starsurfing has given me the opportunity to travel to distant solar systems. It has filled my journies with stories, people, and intelligent alien species. It has given life to the planets I visited, and I know that anywhere in the galaxy I visit, I'll possibly have a good friend or alien entity waiting for me!"
                <br/>
                <br/>
                - Blargathon
                <br/>
                (Traveling in the Andromeda system)
              </p>
            </aside>

            <aside className="testimonial">
              <div className="testimonial-img-2"/>
              <h2>On Community</h2>
              <p>
                "We can't recommend Starsurfing highly enough. It's a great way to experience different planets from a unique insider perspective, and you'll undoubtedly make great friends (and enemies [and frenemies]) along the way. Intergalactic travel is more about the organisms you meet than the places you see."
              <br/>
              <br/>
                - YGG-29X and Claire
                <br/>
                (Traveling on the moons of Polaris III)
              </p>
            </aside>

            <aside className="testimonial">
              <div className="testimonial-img-3"/>
              <h2>On Hosting</h2>
              <p>
                "We wanted to show our offspring that forms of life from all over the galaxy are groovy, no matter what culture, skin color, number of heads, or language. We decided to let the galaxy come to us. We opened our airlocks, our hearts, and our lives to strangers. A lot of them became friends for life!"
                <br/>
                <br/>
                - Zarkon, Parkon, and Kids
                <br/>
                (Hosting near Procyon A)
              </p>
            </aside>
          </section>
        </section>
      </main>
    );
  }
}

export default HomePage;
