function CheckImage(Url){
    const imageUrl =Url;
  const imageUrlRegex = /\.(jpeg|jpg|gif|png|webp)$/i;
  const isValidImageUrl = imageUrlRegex.test(imageUrl);
  return isValidImageUrl
}

export default CheckImage;