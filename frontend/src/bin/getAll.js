const getAll = async (queryKey) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://localhost:3000/api/getall/`);

  if (!apiRes.ok) {
    throw new Error(`getAll fetch not ok`);
  }

  return apiRes.json();
};

export default getAll;
