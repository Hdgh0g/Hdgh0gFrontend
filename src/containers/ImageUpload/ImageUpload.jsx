import React, {Component} from 'react'
import ImagesUtils from '../../utils/ImagesUtils.js'
import Button from "../Button/Button";
import Dropzone from "react-dropzone";
import "./ImageUpload.css"

class ImageUpload extends Component {

  componentWillMount() {
    this.props.clearImage();
  }

  render() {
    return (
      <div className="image-upload">
        <label>Изображение</label>
        {
          this.props.image
            ? this.renderUploadedImage()
            : this.renderDropzone()
        }
      </div>
    )
  }

  renderUploadedImage() {
    return (
      <div>
        <Button caption="✖" onClick={() => this.props.clearImage()}/>
        <div className="image-uploaded">
          <img alt={this.props.imageId}
               src={ImagesUtils.getThumbnailOrDefault(this.props.image)}
               className="image-upload-image"
          />
        </div>
      </div>
    )
  }

  renderDropzone() {
    return (
      <div>
        <Dropzone onDropAccepted={images => this.props.uploadImage(images[0])}/>
        <label>{this.props.imageError}</label>
      </div>
    )
  }

}

export default ImageUpload
