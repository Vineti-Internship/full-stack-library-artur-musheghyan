const HOST_NAME = 'http://localhost:3000/';
export const EVENT_DATA_SHOULD_UPDATE = 'shouldUpdate';

export const dataLoader = (path, action = 'GET', data = null, item = null) => {
  const url = HOST_NAME + path;

  switch (action) {
    case 'GET':
      return getData(url);
    case 'POST':
      return postData(url, data);
    case 'DELETE':
      return deleteData(url, item);
    case 'PATCH':
      return patchData(url, data, item);
  }
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

    if (response.ok) {
      const jsonResponse = await response.json();

      document.dispatchEvent(new Event(EVENT_DATA_SHOULD_UPDATE));
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

const deleteData = async (url, item) => {
  url = url + '/' + item;
  try {
    const response = await fetch(url, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      // const jsonResponse = await response.json();
      document.dispatchEvent(new Event(EVENT_DATA_SHOULD_UPDATE));

      // return jsonResponse;
    } else {
      throw new Error('Failed!');
    }
  } catch (error) {
    console.log(error);
  }
};

const patchData = async (url, data, item) => {
  url = url + '/' + item;
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const jsonResponse = await response.json();

      document.dispatchEvent(new Event(EVENT_DATA_SHOULD_UPDATE));
      return jsonResponse;
    } else {
      throw new Error('Failed!');
    }
  } catch (error) {
    console.log(error);
  }
};
