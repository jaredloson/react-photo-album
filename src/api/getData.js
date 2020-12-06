export const fetchData = async (path, params = {}) => {
  let url = `https://jsonplaceholder.typicode.com/${path}`;

  const paramsArr = Object.entries(params);
  paramsArr
    .filter(([, value]) => typeof value !== "undefined")
    .forEach(([param, value], idx) => {
      const paramString = `${param}=${encodeURIComponent(value)}`;
      url += idx === 0 ? `?${paramString}` : `&${paramString}`;
    });

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export default fetchData;
