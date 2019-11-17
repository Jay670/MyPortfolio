import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import resumeData from './resumeData.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mainData: resumeData.main,
      resume : resumeData.resume,
      portfolio : resumeData.portfolio,
      testimonials : resumeData.testimonials
    }
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.mainData}/>
        <About data={this.state.mainData}/>
        <Resume data={this.state.resume}/>
        <Portfolio data={this.state.portfolio}/>
        <Testimonials data={this.state.testimonials}/>
        {/*<Contact data={this.state.resumeData.main}/>*/}
        <Footer data={this.state.mainData}/>
      </div>
    );
  }
}

export default App;
