import { useQuery } from "@tanstack/react-query";
import getAll from "../bin/getAll.js";
import fetchOne from "../bin/fetchOne.js";

const Details = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["_id"],
    queryFn: fetchOne,
  });

  if (isPending) {
    return (
      <div className="loading-pane">
        <h2 className="loader">loading...</h2>
      </div>
    );
  }

  if (error) {
    return <div>ERROR!@#!@#!#!@#</div>;
  }

  const todo = data.todo;
  console.log(data.completed)
  return (
    <div className="todo">
      <div>{todo}</div>
      <div>ID: {data._id}</div>
      <div>Due: {data.due}</div>
    </div>
  );
};
export default Details;
