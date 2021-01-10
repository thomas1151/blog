export function generateUrl(componentType, slug) {
    const base = `/${componentType}s/`
    return {
        as: base + slug,
        href: base + "[slug]"
    }
}

export function generateAssetUrl(componentType, slug, assetName) {
    return `/assets/${componentType}s/${slug}/${assetName}`
}