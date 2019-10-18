import React from 'react';

export const Content: React.FC = () => {
  return (
    <section id="landing-content">
      <div className="container">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 description">
          <h6>About Acorn TV</h6>
          <h4>World-class TV from Britain and beyond</h4>
          <p>
          Acorn TV streams first-rate mysteries, dramas, and comedies from around the world. Binge-watch a classic series or discover your new favorite show among dozens of programs available exclusively on Acorn TV. With thousands of hours of commercial-free programming and new shows added weekly, there’s always something to watch!
          </p>
          <a href="/createaccount.jsp">Start Free Trial</a>
          <span> or </span>
          <a className="AcornAppLink" href="#membership" data-qs="/">Buy Membership</a>
        </div>
        <div className="hidden-xs hidden-sm col-md-6 col-lg-6 asset">
          <div style={{ display: 'block', position: 'relative', maxWidth: '100%' }}>
            <div style={{ paddingTop: '56.25%' }}>
              <iframe
                src="//players.brightcove.net/3047407010001/r1ZjWi4Ab_default/index.html?videoId=5126697200001"
                allowFullScreen
                title="video"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: '0px',
                  bottom: '0px',
                  right: '0px',
                  left: '0px',
                  border: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
