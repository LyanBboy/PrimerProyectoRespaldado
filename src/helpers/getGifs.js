
export const getGifs = async( categorie ) => {

    const api = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorie)}&limit=10&api_key=Hk25yP5wgSvPC9Mfykd1tIQ2hwd2pn06`
    const resp = await fetch(api);
    const { data } = await resp.json();
    const gifs = data.map((img ,index) => {
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs;
}