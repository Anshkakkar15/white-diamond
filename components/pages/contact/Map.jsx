import React from "react";

export const Map = ({ styles }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className={styles.map_inner}>
            <h4>Find Us on Google Map</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quo beatae quasi assumenda, expedita aliquam minima tenetur
              maiores neque incidunt repellat aut voluptas hic dolorem sequi ab
              porro, quia error.
            </p>
            <div className={styles.map_bind}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.7802993679236!2d-97.13694518438143!3d49.8951368434282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea72d059b8778d%3A0xbe019378e97b48ce!2sWinnipeg%2C%20MB%2C%20Canada!5e0!3m2!1sen!2sus!4v1614139934936!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: "0px" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
