import loginBodyStyle from "../styles/loginBodyStyle.module.css";
import { useEffect, useRef, useState } from "react";

function LoginBody() {
  const colors = ["rgb(194, 139, 0)", "rgb(97, 140, 123)", "blue", "green"];
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
    <div style={{ overflow: "hidden", height: "84%" }}>
      <div style={{ height: "100%" }}>
        <div className={loginBodyStyle.firstTop}>
          <p>Get your next</p>
          <div className={loginBodyStyle.slideTitle}>
            <div
              style={{
                color: "rgb(194, 139, 0)",
                transform: `translateY(${-index * 100}%)`,
              }}
            >
              weeknight dinner idea
            </div>
            <div
              style={{
                color: "rgb(97, 140, 123)",
                transform: `translateY(${-index * 100}%)`,
              }}
            >
              home decor idea
            </div>
            <div
              style={{
                color: "blue",
                transform: `translateY(${-index * 100}%)`,
              }}
            >
              new look outfit
            </div>
            <div
              style={{
                transform: `translateY(${-index * 100}%)`,
                color: "green",
              }}
            >
              green thumb idea
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
                background: "url(d1.jpg)",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                background: "url(d2.jpg)",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                background: "url(de1.jpg) no-repeat",
                backgroundSize: "cover",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                background: "url(de2.jpg)",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                background: "url(n1.jpg) no-repeat",
                backgroundSize: "cover",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                background: "url(n2.jpg)",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                background: "url(g1.jpg)",
                transform: `translateY(${-index * 210}%)`,
              }}
            ></div>
            <div
              style={{
                background: "url(g2.jpg)",
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
                background: "url(d3.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(d4.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de3.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de4.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n3.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n4.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g3.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g4.jpg)",
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
                background: "url(d5.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                background: "url(d6.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de5.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de6.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n5.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n6.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g5.jpg) no-repeat",
                backgroundSize: "cover",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "400ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g6.jpg)",
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
                background: "url(d7.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                background: "url(d9.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de7.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de8.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n7.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n8.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g7.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "600ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g8.jpg)",
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
                background: "url(d8.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                background: "url(d10.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de9.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de10.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n9.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n10.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g9.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "800ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g10.jpg)",
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
                background: "url(d11.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                background: "url(d12.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de11.jpg) no-repeat",
                backgroundSize: "cover",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de12.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n11.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n12.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g11.jpg) no-repeat",
                backgroundSize: "cover",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g12.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1000ms",
              }}
            ></div>
          </div>
          <div className={loginBodyStyle.slidecolumn}>
            <div
              style={{
                background: "url(d13.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(d14.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de13.jpg) no-repeat",
                backgroundSize: "cover",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(de14.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n13.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(n14.jpg)",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g13.jpg) no-repeat",
                backgroundSize: "cover",
                transform: `translateY(${-index * 210}%)`,
                transitionDelay: "1200ms",
              }}
            ></div>
            <div
              style={{
                background: "url(g14.jpg)",
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
