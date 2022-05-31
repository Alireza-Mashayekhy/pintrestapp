import { useState, useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import dynamicPics from '../styles/dynamicPics.module.css'
import { ForSearchClick } from '../pages/contexts/forSearchClick'

export default function PhotoDetails({photo}) {
    const[bool, setBool] = useState(true)
    const[classes, setClasses] = useState({
        displayIsNone : {imgDisplay : 'none', gridColumn : '1/-1', twoArrowDis: 'none', twoArrow2Dis: 'flex'},
        displayIsBlock : {imgDisplay : 'block', gridColumn : '1/4', twoArrowDis: 'flex', twoArrow2Dis: 'none'}
    })
    const click2 = bool ? classes.displayIsBlock : classes.displayIsNone
    const openPic = () =>{
        if(bool == true){
            setBool(false)
        }
    }
    const closePic = () =>{
        if(bool == false){
            setBool(true)
        }
    }
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
    const {searchClicked, searchIsClick, searchNotClick} = useContext(ForSearchClick)
    const click = searchClicked ? searchIsClick : searchNotClick
    const {closeSearch} = useContext(ForSearchClick)
    return ( 
        <div className={dynamicPics.fDiv} onClick={closeSearch} style={{filter: click.bodyBG}}>
            <div className={dynamicPics.imgDiv} style={{gridColumn: click2.gridColumn}}>
                <div className={dynamicPics.leftArrow}><Link href='/'><Image src='/leftArrow.png' width={25} height={25}/></Link></div>
                <Image className={dynamicPics.myImg} loader={myLoader} key={photo.id} src={photo.url} width={100} height={100}/>
                <div className={dynamicPics.twoArrow} style={{display: click2.twoArrowDis}}><div onClick={openPic}><Image src='/twoArrow.png' width={25} height={25}/></div></div>
                <div className={dynamicPics.twoArrow2} style={{display: click2.twoArrow2Dis}}><div onClick={closePic}><Image src='/twoArrow2.png' width={25} height={25}/></div></div>
            </div>
            <div className={dynamicPics.detailsDiv} style={{display: click2.imgDisplay}}>
                <h2>{photo.id}</h2>
                <h3>{photo.title}</h3>
            </div>
        </div>
     );
}
