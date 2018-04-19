import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Parallax, Background } from 'react-parallax';
import city from './img/image3.jpg';
import city2 from './img/image2.jpg';
import space2 from './img/space2.jpg';
import city3 from './img/architecture.jpg';
import { Divider } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <div className="text">
          Mollit nulla sit aliqua in excepteur. Cillum incididunt adipisicing irure exercitation sunt excepteur aute in qui fugiat. Non culpa enim laboris esse consectetur amet. Reprehenderit anim sunt incididunt ipsum dolor aliquip cillum proident fugiat labore proident. Ex voluptate aute enim ullamco anim occaecat commodo laborum occaecat voluptate ipsum enim nostrud ipsum. Do commodo nulla et reprehenderit tempor qui in velit cillum proident sunt et veniam incididunt.
        </div> */}
        <Parallax bgImage={city} strength={320} blur={{ min: -1, max: 3 }}>
          <div className="parallax" style={{ height: "100vh" }}>
            <div className="banner">
              <span className="span">
                React Parallax</span></div>
          </div>
        </Parallax>
        <div className="text" style={{ minHeight: "100vh" }}>
          <p>
            Mollit nulla sit aliqua in excepteur. Cillum incididunt adipisicing irure exercitation sunt excepteur aute in qui fugiat. Non culpa enim laboris esse consectetur amet. Reprehenderit anim sunt incididunt ipsum dolor aliquip cillum proident fugiat labore proident. Ex voluptate aute enim ullamco anim occaecat commodo laborum occaecat voluptate ipsum enim nostrud ipsum. Do commodo nulla et reprehenderit tempor qui in velit cillum proident sunt et veniam incididunt.
        </p>
          <Divider />
          <br />
          <img src={city3} alt="city" height="400" width="auto" />
          <br />
          <Divider />
          <br />
          <p>
            Mollit nulla sit aliqua in excepteur. Cillum incididunt adipisicing irure exercitation sunt excepteur aute in qui fugiat. Non culpa enim laboris esse consectetur amet. Reprehenderit anim sunt incididunt ipsum dolor aliquip cillum proident fugiat labore proident. Ex voluptate aute enim ullamco anim occaecat commodo laborum occaecat voluptate ipsum enim nostrud ipsum. Do commodo nulla et reprehenderit tempor qui in velit cillum proident sunt et veniam incididunt.
        </p>


        </div>
        <Parallax bgImage={city2} strength={400} blur={{ min: -1, max: 3 }}
          bgImageSize={"cover"}
        >
          <div className="parallax" style={{ height: "100vh" }}>
            <div className="banner">
              <span className="span">
                Title</span></div>
          </div>
        </Parallax>
        <div className="text dark">
          <h2> Did you also know ... </h2>
          <p>
            Mollit nulla sit aliqua in excepteur. Cillum incididunt adipisicing irure exercitation sunt excepteur aute in qui fugiat. Non culpa enim laboris esse consectetur amet. Reprehenderit anim sunt incididunt ipsum dolor aliquip cillum proident fugiat labore proident. Ex voluptate aute enim ullamco anim occaecat commodo laborum occaecat voluptate ipsum enim nostrud ipsum. Do commodo nulla et reprehenderit tempor qui in velit cillum proident sunt et veniam incididunt.
        </p>
          <Divider />
          <p>
            Mollit nulla sit aliqua in excepteur. Cillum incididunt adipisicing irure exercitation sunt excepteur aute in qui fugiat. Non culpa enim laboris esse consectetur amet. Reprehenderit anim sunt incididunt ipsum dolor aliquip cillum proident fugiat labore proident. Ex voluptate aute enim ullamco anim occaecat commodo laborum occaecat voluptate ipsum enim nostrud ipsum. Do commodo nulla et reprehenderit tempor qui in velit cillum proident sunt et veniam incididunt.
        </p>
          <p>
            Mollit nulla sit aliqua in excepteur. Cillum incididunt adipisicing irure exercitation sunt excepteur aute in qui fugiat. Non culpa enim laboris esse consectetur amet. Reprehenderit anim sunt incididunt ipsum dolor aliquip cillum proident fugiat labore proident. Ex voluptate aute enim ullamco anim occaecat commodo laborum occaecat voluptate ipsum enim nostrud ipsum. Do commodo nulla et reprehenderit tempor qui in velit cillum proident sunt et veniam incididunt.
        </p>
        </div>
        <Parallax bgImage={city3} strength={220} blur={{ min: -1, max: 3 }}
          bgImageSize={"cover"}
        >
          <div className="parallax" style={{ height: "100vh" }}>
            <div className="banner">
              <span className="span">
                Title</span></div>
          </div>
        </Parallax>
        <div className="text dark">
          Mollit nulla sit aliqua in excepteur. Cillum incididunt adipisicing irure exercitation sunt excepteur aute in qui fugiat. Non culpa enim laboris esse consectetur amet. Reprehenderit anim sunt incididunt ipsum dolor aliquip cillum proident fugiat labore proident. Ex voluptate aute enim ullamco anim occaecat commodo laborum occaecat voluptate ipsum enim nostrud ipsum. Do commodo nulla et reprehenderit tempor qui in velit cillum proident sunt et veniam incididunt.
        </div>

        <Parallax bgImage={city} strength={120} blur={{ min: -1, max: 3 }}>
          <div className="parallax" style={{ height: "100vh" }}>
            <div className="banner">
              <span className="span">
                Title</span></div>
          </div>
        </Parallax>
        <div className="text dark" style={{ minHeight: "100vh" }} />
      </div>
    );
  }
}

export default App;
