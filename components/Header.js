import { useContext } from 'react'
import Image from 'next/image'
import { ForSearchClick } from '../pages/contexts/forSearchClick'
import headerStyle from '../styles/headerStyle.module.css'
import Search from './Search'

export default function Header({photoes}) {
  const {closeSearch} = useContext(ForSearchClick)
  const {openSearch} = useContext(ForSearchClick)

  return (
    <div className={headerStyle.header} onClick={closeSearch}>
        <div className={headerStyle.pintrestIcon}>
            <Image src='/pintrestIcon.png' width={25} height={25}/>
        </div>
        <button className={headerStyle.homeButton}>Home</button>
        <Search onClick={openSearch} photoes={photoes}/>
        <div className={headerStyle.headerRight} >
          <div className={headerStyle.alertIcon}>
            <Image src='/alertIcon.png' width={25} height={25}/>
          </div>
          <div className={headerStyle.messageIcon}>
            <Image src='/messageIcon.png' width={25} height={25}/> 
          </div>
          <div className={headerStyle.profIcon}>
            <span></span>
          </div>
          <div className={headerStyle.menu}>
            <Image src='/downArrow.png' width={25} height={25}/> 
          </div>
        </div>
    </div>
  )
}


