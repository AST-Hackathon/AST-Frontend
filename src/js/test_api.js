const apiURL = process.env.API_URL;

const fetchBooks = async() => {
  try{
    const response = await fetch(`${apiURL}api/book/2`);
    const data = await response.json();
    console.log(data);
  }
  catch(error) {
    console.error(error);
  };
}

fetchBooks();