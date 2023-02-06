import React from "react";

function Home() {
    return (
        <section className="hero" id="home">
            <div className="col-lg-6">
                <div className="type-box">
                    {/* <h6>Hello, I am</h6> */}
                    <h1>Logan Thimer</h1>
                    <p className="bio-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia sed dolorem fugit sapiente porro veniam pariatur
                    dolore nostrum delectus inventore tempore minus nemo, iste
                    ullam illo laboriosam maiores repudiandae quos!
                </p>
                </div>
            </div>
            <div className="col-lg-6">
            <img
                src={process.env.PUBLIC_URL + "/assets/images/me-modified.png"}
                alt="jane-doe"
                className="hero-img"
            />
            </div>
        </section>
    );
}

export default Home;
