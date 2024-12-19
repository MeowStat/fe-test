import { PhotoList } from "./PhotoList"

export const Album = ({albumName, albumId}) => {
    return (
        <>
            <h2>{albumName}</h2>
            <div className="album-imgs">
                <PhotoList albumId={albumId}/>
            </div>
        </>)
}