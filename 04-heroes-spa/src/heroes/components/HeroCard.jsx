/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {
  const heroeImageUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className={`col animate__animated animate__fadeIn `}>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroeImageUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <p>
                {characters
                  ?.split(",")
                  ?.filter((ch) => ch != alter_ego)
                  ?.join(",")}
              </p>
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
