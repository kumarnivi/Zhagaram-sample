import "./banner.css";
import bannerVideo from "../../assets/banner.mp4";

function Banner() {
  return (
    <div style={{ backgroundColor: "#DED1F3" }}>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-6">
            <video
              loop
              muted
              autoPlay
              onCanPlay={() => {}}
              onLoadedMetadata={(e) => (e.currentTarget.muted = true)}
            >
              <source src={bannerVideo} type="video/mp4" />
            </video>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="banner-texts">
              <h5>Lorem Ipsum is simply</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem simply dummy text of the printing and
                typesetting industry. Lorem
              </p>
              <button className="btn btn-suggestion">
                give your suggestions
                <span>
                  <svg
                    width="40"
                    height="27"
                    viewBox="0 0 40 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="40" height="27" fill="url(#pattern0_14_50)" />
                    <defs>
                      <pattern
                        id="pattern0_14_50"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_14_50"
                          transform="matrix(0.01125 0 0 0.0166667 0.1625 0)"
                        />
                      </pattern>
                      <image
                        id="image0_14_50"
                        width="60"
                        height="60"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiklEQVR4nO3aPY8OURiA4QeJZG2lUGt0lGy7DYVeIRqiVCtFa9lkQ2itH2EjESoRieh8lcTG20jYhLfydckkxGvNxJDsjPNx/YGZOzPn5MmciaiqqtoEp7COc5iPnGE/pn56hLnIEebxzO/OR45wQ7unkem67TKNzNftZm+igHU761YUsG5nHY/UYQeu+LPm6W+PlGE37ujnWKQM+/C8Z+wDbItU4TDe9Yz9goVIFc7gk/6uR+ab06y32BOpwRxu+3unIzXYibV/iL2X5EaFVfmYYKl5iF2xi/gqP0tdwY/ladIWe0i+XrcFL8vXhbbg+/Iz6dy08Grsuxv0Cwk+jl2Ll0MG/w8elha8VlrwamnBF0sLPlta8MnSgo+WFnywtOC9pQXvKil4OlhsY+xavIghKWmOboxdi5sxJLwvZo5u9Djc3mqXYki4XMwc3cABfC5ijv4B10YMXoyRzpXujhC70XkcMlD01YFf7xOjxLb8g7WCJ/iwBZHT7yeOR365cFVVVVVVVRVp+Qb0QfUpSJo4SQAAAABJRU5ErkJggg=="
                      />
                    </defs>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
