const fetchOne = async ({ queryKey }) => {
  var id = queryKey[1];
  id = "661a82c1e8f6d03e467a4a5d";
  const apiRes = await fetch(`http://localhost:3000/api/getOne/${id}`);

  if (!apiRes.ok) {
    throw new Error(`getOne/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchOne;
