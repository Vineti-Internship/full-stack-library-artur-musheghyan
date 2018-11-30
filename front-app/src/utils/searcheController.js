export const getSearchResult = (data, searchingValue) => {
  let result = [];

  result.push(...searchByTitle(data, searchingValue));
  result.push(...searchByAuthorName(data, searchingValue));

  return result;
};

const searchByTitle = (data, value) => {
  let result  = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].title === value) {
      result.push(data[i]);
    }
  }

  return result;
};

const searchByAuthorName = (data, value) => {
  let result  = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].author.name === value) {
      result.push(data[i]);
    }
  }

  return result;
};