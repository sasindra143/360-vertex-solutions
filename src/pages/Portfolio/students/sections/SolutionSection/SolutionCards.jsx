import "./SolutionCards.css";

export default function SolutionCards() {
  return (
    <div className="solution-cards">
      {/* CARD 01 */}
      <div className="solution-card">
        <span className="card-number">01</span>
        <span className="card-pill">CUSTOM DESIGN</span>

        <h4>Professional Online Presence</h4>
        <p>
          Build a portfolio website that reflects your personality and career
          goals. Make every recruiter visit count.
        </p>

        <ul>
          <li>Custom design for your role and industry</li>
          <li>Fully responsive across all devices</li>
          <li>Fast-loading and SEO-optimized for visibility</li>
        </ul>
      </div>

      {/* CARD 02 */}
      <div className="solution-card">
        <span className="card-number">02</span>
        <span className="card-pill">INTERACTIVE</span>

        <h4>Stand Out Instantly</h4>
        <p>
          Make a strong first impression in seconds. Your portfolio sets you
          apart from hundreds of similar resumes.
        </p>

        <ul>
          <li>Unique layout that highlights individuality</li>
          <li>Interactive sections recruiters love</li>
          <li>Includes your professional domain name</li>
        </ul>

        <div className="card-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* CARD 03 */}
      <div className="solution-card">
        <span className="card-number">03</span>
        <span className="card-pill">SEO READY</span>

        <h4>Get Found by Recruiters</h4>
        <p>
          Be discoverable even when you're not applying. Get visible on Google
          when recruiters search.
        </p>

        <ul>
          <li>SEO-ready content for your role</li>
          <li>One-click shareable portfolio link</li>
          <li>Track visits and engagement</li>
        </ul>
      </div>

      {/* CARD 04 */}
      <div className="solution-card">
        <span className="card-number">04</span>
        <span className="card-pill">LIVE DEMOS</span>

        <h4>Showcase Your Best Work</h4>
        <p>
          Show, don’t just tell. Let recruiters see real impact through live
          examples.
        </p>

        <ul>
          <li>Live demos & case studies</li>
          <li>Resume download option</li>
          <li>Direct Email / WhatsApp contact</li>
        </ul>
      </div>
    </div>
  );
}
