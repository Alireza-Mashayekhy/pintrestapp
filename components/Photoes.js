import Image from 'next/image'
import photoStyles from '../styles/photoes.module.css'
import { useContext } from 'react'
import { ForSearchClick } from '../pages/contexts/forSearchClick'
import Link from 'next/link'

export default function Photoes({photoes}) {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
      const {searchClicked, searchIsClick, searchNotClick} = useContext(ForSearchClick)
      const click = searchClicked ? searchIsClick : searchNotClick
      const {closeSearch} = useContext(ForSearchClick)

    return (
        <div className={photoStyles.container} style={{filter:click.bodyBG}} onClick={closeSearch}>
                {photoes.map(photo => (
                <Link href="photo/[id]" as={`/photo/${photo.id}`}><Image loader={myLoader} key={photo.id} src={photo.url} width={100} height={100}/></Link>
                ))}
        </div>  
    );
}
