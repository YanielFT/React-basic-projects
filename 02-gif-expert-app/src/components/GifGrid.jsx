import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// eslint-disable-next-line react/prop-types
const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(images, isLoading);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ol className="card-grid">
          {images &&
            images.length > 0 &&
            images.map(({ id, title, url }) => (
              <GifItem key={id} id={id} title={title} url={url} />
            ))}
        </ol>
      )}
    </>
  );
};

export default GifGrid;
