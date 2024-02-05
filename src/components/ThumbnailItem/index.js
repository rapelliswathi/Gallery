// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, displayImage} = props
  const {id, imageUrl} = imageDetails

  const onDisplayImage = () => {
    displayImage(id)
  }

  return (
    <li className="image-item">
      <button className="button" type="button" onClick={onDisplayImage}>
        <img
          src={imageUrl}
          alt="thumbnailAltText"
          value="thumbnailUrl"
          className="image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
