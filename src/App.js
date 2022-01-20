// import logo from "./logo.svg";
// import "./App.css";

// function Feature() {
//   return (
//     <div className="feature">
//       <img src="" alt="" className="feature-image" />
//       <h3 className="feature-title">Title 2</h3>
//       <p className="feature-desc">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
//         fugit reprehenderit voluptatum quo dolore, ipsum aliquam atque impedit
//         nulla ratione, consequatur necessitatibus adipisci inventore officia
//         repudiandae cumque vitae sit? Voluptate.
//       </p>
//     </div>
//   );
// }

function App() {
  // const name = "QuangNam";
  // function fullname(firstName, lastName) {
  //   return `${firstName} ${lastName}`;
  // }

  return (
    <div>
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      <YoutubeItem 
      image="https://znews-photo.zadn.vn/w660/Uploaded/ngogtn/2021_04_25/avatar_movie_Cropped.jpg" 
      avatar="https://img4.thuthuatphanmem.vn/uploads/2020/12/26/anh-nen-avatar-dep_021652403.jpg"
      author="NamHQ"
      title="Web Dev"
      ></YoutubeItem>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       <h2>namteer</h2>
  //       <h3>{name}</h3>
  //       <h4>{fullname("quang", "nam")}</h4>
  //       <p>Hello {name === 'QuangNam' ? 'yes' : 'no'}</p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

function YoutubeItem(props) {
  console.log(props);
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} width="100" height="100" alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
      </div>
      <div className="youtube-info">
        <h3 className="youtube-title">{props.title}</h3>
        <h4 className="youtube-author">{props.author}</h4>
      </div>
    </div>
  );
}

export default App;
