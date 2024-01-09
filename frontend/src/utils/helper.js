export const getData = async (link) => {
    const res = await fetch(link)
    const data = await res.json()
    return data
}

export const getBookData = async () => {
  const options = {
    method: 'GET',
    url: 'https://hapi-books.p.rapidapi.com/search/hunger%20games',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  
}


export const timeAgo = (timestamp) => {
    const current_time = new Date();
    const timestamp_date = new Date(timestamp);
  
    const seconds = Math.floor((current_time - timestamp_date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  }