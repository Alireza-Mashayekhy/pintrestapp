import Header from "../../components/Header";
import styles from "../../styles/Home.module.css";
import ForSearchClickProvider from "../contexts/forSearchClick";
import ForSearchProvider from "../contexts/forSearchHover";
import Photoes from "../../components/Photoes";

function Home({ photoes }) {
  return (
    <div className={styles.container}>
      <ForSearchProvider>
        <ForSearchClickProvider>
          <Header photoes={photoes} />
          <Photoes photoes={photoes} />
        </ForSearchClickProvider>
      </ForSearchProvider>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=200"
  );
  const photoes = await res.json();

  return {
    props: { photoes },
  };
}

export default Home;
