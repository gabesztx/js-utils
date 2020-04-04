import React, { Component } from "react";

class ListAndKeys extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log('Done: ', json)
      })
  }

  render() {
    return (
      <div>
        ListAndKeys
      </div>
    );
  }
}

export default ListAndKeys;
