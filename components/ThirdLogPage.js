import loginBodyStyle from "../styles/loginBodyStyle.module.css";

function ThirdLogPage() {
  return (
    <div className={loginBodyStyle.thirdBody}>
      <div className={loginBodyStyle.thirdBodyText}>
        <div>Save ideas you like</div>
        <div>Collect your favorites so you can get back to them later.</div>
        <button>Explore</button>
      </div>
      <div className={loginBodyStyle.thirdBodyImg}>
        <div className={loginBodyStyle.thirdBodyFirstImg}>
          <div>Fern future home vibes</div>
          <div className={loginBodyStyle.thirdBodyFirstImges}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={loginBodyStyle.thirdBodySecImg}>
          My Scandinavian bedroom
        </div>
        <div className={loginBodyStyle.thirdBodyThirdImg}>
          The deck of my dreams
        </div>
        <div className={loginBodyStyle.thirdBodyForthImg}>
          Serve my drinks in style
        </div>
        <div className={loginBodyStyle.thirdBodyFifthImg}>
          Our bathroom upgrade
        </div>
      </div>
    </div>
  );
}

export default ThirdLogPage;
