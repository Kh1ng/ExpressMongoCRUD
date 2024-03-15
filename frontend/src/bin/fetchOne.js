const fetchOne = async ({ queryKey }) => {
  var id = queryKey[1];
  id = "65efb787a6f9a056e81397e8";
  const apiRes = await fetch(`http://localhost:3000/api/getOne/${id}`);

  if (!apiRes.ok) {
    throw new Error(`getOne/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchOne;
