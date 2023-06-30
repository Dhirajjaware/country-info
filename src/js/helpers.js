// Capital Name
const capitalName = function (word) {
  return word
    .toLowerCase()
    .split(' ')
    .map(c => c.replace(c[0], `${c[0].toUpperCase()}`))
    .join(' ');
};

const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

//This is public API , It means other modules can access these methods
export { capitalName, getJSON };
