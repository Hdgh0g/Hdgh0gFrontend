import React, {Component} from 'react'
import ImagesUtils from '../../utils/ImagesUtils.js'
import Button from "../Button/Button";
import Dropzone from "react-dropzone";
import "./ImageUpload.css"

class ImageUpload extends Component {
  render() {
    return (
      <div className="image-upload">
        <label>Изображение</label>
        {!this.props.imageUploaded ? this.renderUploadedImage() : this.renderDropzone()}
      </div>
    )
  }

  renderUploadedImage() {
    return (
      <div>
        <Button caption="✖" onClick={() => this.clearImage()}/>
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
      <Dropzone/>
    )
  }

  clearImage() {
    console.log("clearing");
  }
}

export default ImageUpload
