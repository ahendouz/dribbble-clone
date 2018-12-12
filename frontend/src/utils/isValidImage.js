import { imageTypes, imageMaxSize } from "./imageSizeAndType";

const isValidImage = image => {
  const currentImage = image;
  const currentImageSize = currentImage.size;
  const currentImageType = currentImage.type;
  const isValidType = imageTypes.includes(currentImageType);
  if (currentImageSize > imageMaxSize) {
    return false;
  }
  if (!isValidType) {
    return false;
  }
  return true;
};

export default isValidImage;
