const DataUser = () => {
    return fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  
  export default DataUser;