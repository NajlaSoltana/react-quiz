/*
 * ============= Question 5 =============
 *
 * There are 2 bugs in the AnimalSpotter component and 1 bug in the
 * CounterButton component. When you click the "I spotted an animal" button the
 * number of animals spotted number should increase by 1.
 *
 * Find and fix the bugs in the AnimalSpotter and CounterButton components.
 */

import React, { Component } from "react";

class AnimalSpotter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0};
  }
  

  render() {
    return (
      <div className="animal-spotter">
        <p>Number of animals spotted: {this.state.animalSpotted}</p>
        <CounterButton handleClick={this.spotAnimal({
          count: this.state.count + 1
        })} />
      </div>
    );
  }

function CounterButton(props) {
  return (
    <button style={{ background: "lightseagreen", color: "white" }} onClick>
      I spotted an animal!
    </button>
  );
}

export default AnimalSpotter;


 