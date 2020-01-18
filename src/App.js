import React from 'react';
import './stylesheets/App.css';

function AnimationCard(props) {
  return(
    <div className="card">
      {props.number}
    </div>
  );
}

function AnimationList() {
  const numbers = [1,2,3,4,5, 6];
  const doubled = numbers.map((number) =>
    <AnimationCard number=""/>
  );

  return(doubled);
}

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div id="app">
        <header>
          <span>Animation Suite</span>
          <div>
            <img src="magnifying-glass.png" alt="magnifying glass"/>
            <input type="text" placeholder="Search"/>
          </div>
        </header>

        <main>
          <AnimationList/>
        </main>
      </div>
    );
  }
}

export default App;
