import { useContext, useState } from "react";
import headerStyle from "../styles/headerStyle.module.css";
import Image from "next/image";
import { ForSearch } from "../pages/contexts/forSearchHover";
import { ForSearchClick } from "../pages/contexts/forSearchClick";
import Link from "next/link";

export default function Search({ photoes }) {
  const { searchHovered, searchIsHover, searchNotHover } =
    useContext(ForSearch);
  const hover = searchHovered ? searchIsHover : searchNotHover;
  const { searchHover } = useContext(ForSearch);
  const { searchClicked, searchIsClick, searchNotClick } =
    useContext(ForSearchClick);
  const click = searchClicked ? searchIsClick : searchNotClick;
  const { openSearch } = useContext(ForSearchClick);
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const [searchTerm, setSearchTerm] = useState("");
  const myphoto = photoes || [];

  return (
    <div
      className={headerStyle.allSearch}
      style={{ marginTop: click.searchMargin }}
    >
      <div
        className={headerStyle.searchDiv}
        onMouseOver={searchHover}
        onMouseOut={searchHover}
      >
        <div
          style={{ background: hover.imgBG, display: click.imgDisplay }}
          className={headerStyle.searchIcon}
        >
          <Image src="/searchIcon.png" width={20} height={20} />
        </div>
        <input
          style={{
            background: hover.inputBG,
            borderRadius: click.inputBR,
            outline: click.inputB,
          }}
          type="search"
          placeholder="Search"
          className={headerStyle.searchInput}
          onClick={openSearch}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div
        className={headerStyle.searches}
        style={{ display: click.searchesDis }}
      >
        {myphoto
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <Link key={val.id} href="photo/[id]" as={`/photo/${val.id}`}>
                <Image
                  loader={myLoader}
                  key={val.id}
                  src={val.url}
                  width={100}
                  height={100}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
