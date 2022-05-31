import ForSearchClickProvider from '../../contexts/forSearchClick'
import ForSearchProvider from '../../contexts/forSearchHover'
import Header from '../../../components/Header'
import PhotoDetails from '../../../components/PhotoDetails';

export default function photo({photo}) {

    return ( 
        <div>
            <ForSearchProvider>
                <ForSearchClickProvider>
                    <Header/>
                    <PhotoDetails photo={photo}/>    
                </ForSearchClickProvider>
            </ForSearchProvider>
        </div>
     );
}

export const getServerSideProps = async context => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`)
    const photo = await res.json()

    return{
        props: {
            photo
        }
    }
}



