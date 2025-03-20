import HeroCard from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import { getHerosByName } from "../helpers/getHeroByName";
import { useNavigate, useSearchParams } from "react-router-dom";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const querySearch = searchParams.get("superhero") ?? "";
  const asc = searchParams.get("asc") ?? false;
  const {
    formState: { searchText },
    onInputChange,
  } = useForm({ searchText: querySearch });

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length > 0)
      navigate(`?superhero=${searchText}&asc=false`);
  };
  const result = getHerosByName(querySearch, asc);

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={onInputChange}
              value={searchText}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {querySearch.length == 0 && (
            <div className="alert alert-primary">Search a hero</div>
          )}
          {result.length == 0 && querySearch?.length > 0 && (
            <div className="alert alert-danger">
              No hero with <b>{querySearch}</b>
            </div>
          )}
          {result.length > 0 &&
            result.map((res) => <HeroCard key={res.id} {...res} />)}
        </div>
      </div>
    </>
  );
};
