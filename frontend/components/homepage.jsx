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
                "Couchsurfing has given me the opportunity to live very valuable and beautiful experiences. It's filled my journey with stories, people, and friends. It's given life to the places I visited, and I know that anywhere in the world I visit, I'll possibly have a good friend waiting for me!"
                <br/>
                <br/>
                - Andrea
                <br/>
                (Traveling in South America)
              </p>
            </aside>

            <aside className="testimonial">
              <div className="testimonial-img-2"/>
              <h2>On Community</h2>
              <p>
                "We can't recommend Couchsurfing highly enough. It's a great way to experience places from a unique insider perspective, and you'll undoubtedly make great friends along the way. Travel is more about the people you meet than the places you see, and Couchsurfing reinforced the fact that people are inherently good."
              <br/>
              <br/>
                - Matt and Sara
                <br/>
                (Traveling In Asia)
              </p>
            </aside>

            <aside className="testimonial">
              <div className="testimonial-img-3"/>
              <h2>On Hosting</h2>
              <p>
                "We wanted to show our children that people from all over the world are good, no matter what culture, skin color, or language. We had no money to travel the world with our four kids, and decided to let the world come to us. We opened our house, our hearts, and our lives to strangers. A lot of them became friends for life!"
                <br/>
                <br/>
                - Lieke, Peter, and Kids
                <br/>
                (Hosting in Belgium)
              </p>
            </aside>
          </section>
        </section>
      </main>
    );
  }
}

export default HomePage;
