import ReactDOM from "react-dom";
import React from "react";
import "../../App.css";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      currentPage: 1,        //
      usersPerPage: 3,       // default 3 user
    };
  }

  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  select = (event) => {      // get by number user per page
    this.setState({
      usersPerPage: event.target.value,
    });
  };

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    const dataUser = items.data;
    console.log(dataUser);
    const currentPage = this.state.currentPage;  // page number current
    const usersPerPage = this.state.usersPerPage;  // user number per page
    const indexOfLastUser = currentPage * usersPerPage;  // last index user in list
    const indexOfFirstUser = indexOfLastUser - usersPerPage;  // first index user in list
    const currentTodos = dataUser.slice(indexOfFirstUser, indexOfLastUser);  // slice arr index first to last
    console.log(currentTodos); 
    const renderTodos = currentTodos.map((todo, index) => {
      return (
        <div className="item-user">
          <h2>{todo.first_name}</h2>
          <p>{todo.email}</p>
          <img src={todo.avatar} />
        </div>
      );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(dataUser.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <div className="list-user">{renderTodos}</div>
        <div className="pagination">
          <div className="news-per-page">
            <select defaultValue="0" onChange={this.select}>
              <option value="0" disabled>
                Get by
              </option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="pagination-custom">
            <ul id="page-numbers">
              {pageNumbers.map((number) => {
                if (this.state.currentPage === number) {
                  return (
                    <li key={number} id={number} className="active">
                      {number}
                    </li>
                  );
                } else {
                  return (
                    <li key={number} id={number} onClick={this.chosePage}>
                      {number}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
