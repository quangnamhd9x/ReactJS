import React from "react";
import { ReactDOM } from "react";

var newsList = [
  {
    id: "abc01",
    title: "The Highs and Lows of Life as a Black Editor in Chief",
    content: "ct1",
  },
  {
    id: "abc02",
    title: "The Real Reason Apple Wants You to Use Its Sign-in Service",
    content: "ct2",
  },
  {
    id: "abc03",
    title: "Men Need To Think More About Fertility",
    content: "ct3",
  },
  {
    id: "abc04",
    title: "Reactive Streams and Kotlin Flows",
    content: "ct4",
  },
  {
    id: "abc05",
    title: "The Incredible Creative Power of the Index Card",
    content: "ct5",
  },
  {
    id: "abc06",
    title: "The Man Who Helped the Beatles Admit It’s Getting Better",
    content: "ct6",
  },
  {
    id: "abc07",
    title: "Facebook Can Resolve Its Issues — How Will We Resolve Ours?",
    content: "ct7",
  },
  {
    id: "abc08",
    title: "The Personal Newsletter Fad Needs to End",
    content: "ct8",
  },
  {
    id: "abc09",
    title: "How Do You Know You Have a Good Idea?",
    content: "ct9",
  },
  {
    id: "abc10",
    title: "Ronaldo & Messi",
    content: "ct10",
  },
];

class TableItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.stt}</td>
        <td>
          <span>{this.props.data.title}</span>
        </td>
      </tr>
    );
  }
}

class TableList extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      newsPerPage: 3,
    };
  }

  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  select = (event) => {
    this.setState({
      newsPerPage: event.target.value,
    });
  };

  render() {
    const currentPage = this.state.currentPage;
    const newsPerPage = this.state.newsPerPage;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((todo, index) => {
      return (
        <TableItem
          stt={index + 1 + (currentPage - 1) * newsPerPage}
          key={index}
          data={todo}
        />
      );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>{renderTodos}</tbody>
        </table>
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
    );
  }
}

ReactDOM.render(<TableList />, document.getElementById("app"));

