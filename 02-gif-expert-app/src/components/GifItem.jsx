// eslint-disable-next-line react/prop-types
export const GifItem = ({ id, url, title }) => {
  return (
    <li className="card" key={id}>
      <img src={url} />
      <p>{title}</p>
    </li>
  );
};
