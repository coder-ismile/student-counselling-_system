import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>CAREERPATH</h1>
            <span>ONLINE STUDENT COUNSELING</span>
          </div>

          <div className="social">
            <a
              href="https://www.facebook.com/ismile.mallick.526"
              target="_blank"
            >
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a href="https://www.instagram.com/mallickismile/" target="_blank">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="https://github.com/coder-ismile" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <i className="fab fa-youtube icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
