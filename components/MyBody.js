import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";
import SecLogPage from "./SecLogPage";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import loginBodyStyle from "../styles/loginBodyStyle.module.css";
import ThirdLogPage from "./ThirdLogPage";
import ForthLogPage from "./ForthLogPage";
import FifthLogPage from "./FifthLogPage";

const MyBody = () => (
  <ReactFullpage
    credits={{ enabled: false }}
    scrollBar={false}
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    render={({ fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <LoginHeader />
            <LoginBody />
            <div
              className={loginBodyStyle.firstFooter}
              onClick={() => fullpageApi.moveSectionDown()}
            >
              <div>
                Here's how it works
                <Image src="/downArrow.png" width={20} height={20} />
              </div>
            </div>
          </div>
          <div className="section">
            <SecLogPage />
          </div>
          <div className="section">
            <ThirdLogPage />
          </div>
          <div className="section">
            <ForthLogPage />
          </div>
          <div className="section">
            <FifthLogPage />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default MyBody;
