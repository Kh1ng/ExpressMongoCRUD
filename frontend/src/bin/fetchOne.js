const fetchOne = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://localhost:3000/api/getOne/?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`getOne/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchOne;
