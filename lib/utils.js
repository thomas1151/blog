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
export const generateAwsImage = ({ src, width, quality }) => `/${src}?w=${width}&q=${quality || 75}`
