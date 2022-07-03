import Image from "next/image";
import loginBodyStyle from "../styles/loginBodyStyle.module.css";

function SecLogPage() {
  return (
    <div className={loginBodyStyle.SecPageBody}>
      <div className={loginBodyStyle.secPageImages}>
        <div>
          <div className={loginBodyStyle.textImage}>
            <Image src="/searchIcon.png" width={25} height={25} />
            <div>easy chicken dinner</div>
          </div>
          <div className={loginBodyStyle.secPageImage1}>
            <Image src="/secondPage1.png" width={300} height={450} />
          </div>
          <div className={loginBodyStyle.secPageImage2}>
            <Image src="/secondPage2.png" width={180} height={220} />
          </div>
          <div className={loginBodyStyle.secPageImage3}>
            <Image src="/secondPage3.png" width={165} height={260} />
          </div>
          <div className={loginBodyStyle.secPageImage4}>
            <Image src="/secondPage4.png" width={205} height={285} />
          </div>
        </div>
      </div>
      <div className={loginBodyStyle.secPageText}>
        <div>Search for an idea</div>
        <div>
          What do you want to try next? Think of something you’re into—like
          “easy chicken dinner”—and see what you find.
        </div>
        <button>Explore</button>
      </div>
    </div>
  );
}

export default SecLogPage;
