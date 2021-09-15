import React from "react"
import PropTypes from "prop-types"

const Curso = ({ title, imagen, price }) => (
  <>
    
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={imagen} alt="" />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{title}</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="https://lh6.googleusercontent.com/proxy/_YsvrV1dj_jPLADJ9JaBW2W1kKublT5bowEdCYqgl9jRSxD4ti5UG36HdgdKHuNn6NSN-JhB2lp9hAyr9twd5Q5A5jk5NoHMbczzPw=w1200-h630-p-k-no-nu" alt="logo" />
              </div>
            </div>
            <span className="small">GYM Glofox</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button third-color button--tiny" href="index.html">
            {price}
          </a>
        </div>
      </div>
    </article>
  </>
);

Curso.propTypes = {
  title: PropTypes.string,
  imagen: PropTypes.string,
  price: PropTypes.string
};

Curso.defaultProps = {
  title: "Sin titulo",
  imagen: "https://us.123rf.com/450wm/axsimen/axsimen1801/axsimen180100007/92591237-sin-ilustraci%C3%B3n-de-se%C3%B1al-de-tv.jpg?ver=6",
  price: "- - -"
};

export default Curso;
