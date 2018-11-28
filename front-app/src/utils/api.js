const HOST_NAME = 'http://localhost:3000/';

export const dataLoader = (path, action = 'GET', data = null) => {
  const url = HOST_NAME + path;

  return (action === 'GET') ? getData(url) : postData(url, data);
};

const postData = async (url, data) => {
  console.log(url);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if(response.ok) {
      const jsonResponse = await response.json();

      return jsonResponse;
    } else {
      throw new Error('Failed!');
    }
  } catch (error) {
    console.log(error);
  }
};

const getData = async (url) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const jsonResponse = await response.json();

      return jsonResponse;
    } else {
      throw new Error('Failed!');
    }
  } catch (error) {
    console.log(error);
  }
};
