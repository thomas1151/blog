export const generateUrl = (componentType, slug) => {
  const base = `/${componentType}/`
  return {
    as: base + slug,
    href: base + "[slug]"
  }
}

export const generateAssetUrl = (componentType, slug, assetName) => `/assets/${componentType}/${slug}/${assetName}`


/**
* TODO
*/
export const generateAwsImage = ({ src, width, quality = 125 }) => {
  if(width < 1){
    return ``;
  }
  let fullSize = src.split('.');
  let roundedWidth = Math.ceil(width / 50) * 50;
  let extension = fullSize.pop();
  return `https://do81dh5co5ote.cloudfront.net${fullSize.join('.')}_${roundedWidth*Math.floor(quality/100)}.${extension}`
}
