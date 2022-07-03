import loginBodyStyle from "../styles/loginBodyStyle.module.css";

function ForthLogPage() {
  return (
    <div className={loginBodyStyle.forthPage}>
      <div className={loginBodyStyle.forthPagePic}>
        <div className={loginBodyStyle.forthPagePics}>
          <div className={loginBodyStyle.forthPageFirstPic}></div>
          <div className={loginBodyStyle.forthPageSecPic}></div>
          <div className={loginBodyStyle.forthPagePicTitle}>
            <div>Scout the City</div>
            <div>56.7k followers</div>
          </div>
        </div>
      </div>
      <div className={loginBodyStyle.forthPageTexts}>
        <div className={loginBodyStyle.forthPageText}>
          <div>See it, make it, try it, do it</div>
          <div>
            The best part of Pinterest is discovering new things and ideas from
            people around the world.
          </div>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
}

export default ForthLogPage;
