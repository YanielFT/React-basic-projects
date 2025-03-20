export const getGifs = async (category) => {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=AERnrdOAHxUeB4L0N2zP9hRvjuD5rPdv&q=${category}&limit=5&lang=es`
    );
    const { data = [] } = await resp.json();
    console.log(data.map((img) => img.title));
    const dataParsed = data.map((data) => ({
      id: data.id,
      title: data.title,
      url: data.images.downsized_medium.url
    })); 
    return dataParsed;
  };