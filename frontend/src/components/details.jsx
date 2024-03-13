import { useQuery } from "@tanstack/react-query";
import getAll from "../bin/getAll.js";
import { useParams } from "react-router-dom";

const Details = () => {
  const { data } = useParams();

  const results = useQuery({ queryKey: [data], getAll });

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const stuff = results;

  console.log(stuff);

  return (
    <div>
      {stuff.data.map((id) => (
        <div key={id}>{id}</div>
      ))}
    </div>
  );
};
export default Details;
