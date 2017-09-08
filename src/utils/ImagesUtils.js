class ImagesUtils {

  static DEFAULT_IMAGE_URL = "img/logo.jpg";

  static getDefaultImageLink() {
    return this.DEFAULT_IMAGE_URL;
  }

  static getThumbnailOrDefault(image) {
    if (image) {
      if (image.thumbnailUrl) {
        return image.thumbnailUrl;
      }
      if (image.url) {
        return image.url;
      }
    }
    return this.getDefaultImageLink();
  }

  static getFullOrDefault(image) {
    if (image) {
      if (image.url) {
        return image.url;
      }
      if (image.thumbnailUrl) {
        return image.thumbnailUrl;
      }
    }
    return this.getDefaultImageLink();
  }
}

export default ImagesUtils
