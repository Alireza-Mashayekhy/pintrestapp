import dynamicPics from '../styles/dynamicPics.module.css'

function MyModal({photoes}) {
    const url = photoes.url
    const showPic = () => {
        Swal.fire({
            imageUrl: url,
            showConfirmButton: false,
            showCloseButton: true,
            width: 700,
        })
    }
    return (
        <div>
            <button onClick={showPic} className={dynamicPics.showPic}>show Pic</button>
        </div>
    );
}

export default MyModal;