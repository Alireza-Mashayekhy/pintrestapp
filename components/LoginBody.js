import loginBodyStyle from "../styles/loginBodyStyle.module.css";
import { useEffect, useRef, useState } from "react";

function LoginBody() {
  const colors = ["red", "blue", "green", "black"];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div>
      <div>
        <div className={loginBodyStyle.firstTop}>
          <p>Get your next</p>
          <div className={loginBodyStyle.slideTitle}>
            <div
              style={{
                color: "red",
                transform: `translateY(${-index * 100}%)`,
              }}
            >
              red
            </div>
            <div
              style={{
                color: "blue",
                transform: `translateY(${-index * 100}%)`,
              }}
            >
              blue
            </div>
            <div
              style={{
                color: "green",
                transform: `translateY(${-index * 100}%)`,
              }}
            >
              green
            </div>
            <div style={{ transform: `translateY(${-index * 100}%)` }}>
              black
            </div>
            {colors.map((_, index) => (
              <div key={index}>{index}</div>
            ))}
          </div>
          <div className={loginBodyStyle.slideDots}>
            {colors.map((_, idx) => (
              <span
                key={idx}
                className={loginBodyStyle.slideshowDot}
                style={{
                  backgroundColor: `${
                    index === idx ? `${colors[idx]}` : "rgb(218, 218, 218)"
                  }`,
                }}
                onClick={() => {
                  setIndex(idx);
                }}
              ></span>
            ))}
          </div>
        </div>
        <div className={loginBodyStyle.slidePics}>
          <div className={loginBodyStyle.slidecolumn}>
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
          </div>
          <div
            className={loginBodyStyle.slidecolumn}
            style={{ marginTop: "100px" }}
          >
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
          </div>
          <div
            className={loginBodyStyle.slidecolumn}
            style={{ marginTop: "200px" }}
          >
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
          </div>
          <div
            className={loginBodyStyle.slidecolumn}
            style={{ marginTop: "300px" }}
          >
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
          </div>
          <div
            className={loginBodyStyle.slidecolumn}
            style={{ marginTop: "200px" }}
          >
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
          </div>
          <div
            className={loginBodyStyle.slidecolumn}
            style={{ marginTop: "100px" }}
          >
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
          </div>
          <div className={loginBodyStyle.slidecolumn}>
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "red",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBody;
