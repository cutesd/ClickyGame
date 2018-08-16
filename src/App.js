import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron'
import Row from './components/Row';
import Col from './components/Col'
import Footer from './components/Footer';
import images from './images.json';
import './App.css';

class App extends Component {

  state = {
    images: images,
    msg: "Click an image to begin!",
    clicked: [],
    classes: "row no-gutters",
    topScore: 0
  };

  onImgClick = evt => {
    evt.preventDefault();
    this.setState({
      images: this.randomizeImages(),
      clicked: this.imgClicked(evt.target.id)
    });
  };

  randomizeImages = () => {
    const _arr = this.state.images.slice(0);
    let new_arr = [];

    while (_arr.length > 0) {
      const _obj = _arr.splice(Math.floor(Math.random() * _arr.length), 1);
      new_arr = [...new_arr, _obj[0]];
    }
    return new_arr;
  }

  msgDisplay = (_arr, message, classes) => {
    const _score = (_arr.length > this.state.topScore) ? _arr.length : this.state.topScore;
    this.setState({
      msg: message,
      classes: classes || "row no-gutters",
      topScore: _score
    });
  }

  imgClicked = id => {
    const _arr = this.state.clicked.slice(0);
    if (_arr.indexOf(id) > -1) return this.wrongAnswer();

    const new_arr = [..._arr, id];
    if (new_arr.length === 12) return this.youWin(new_arr);
    this.msgDisplay(new_arr, "You guessed correctly!");
    return new_arr;
  }

  wrongAnswer = () => {
    this.msgDisplay([], "You guessed incorrectly!", "row row-shake no-gutters");
    return [];
  }

  youWin = _arr => {
    this.msgDisplay(_arr, "You guessed them all!");
    return [];
  }

  render() {
    return (
      <Wrapper>
        <Nav
          msg={this.state.msg}
          numCorrect={this.state.clicked.length}
          topScore={this.state.topScore} />
        <Jumbotron />
        <Row rowClasses={this.state.classes}>
          {this.state.images.map(img =>
            <Col
              key={img.id}
              id={img.id}
              img={img.image}
              name={img.name}
              btnClick={this.onImgClick} />)}
        </Row>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
