import React, { Component } from 'react';

class PetsForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/pets', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="owner">owner</label>
        <input id="owner" name="owner" type="text" />

        <label htmlFor="description">Description</label>
        <input id="description" name="description" type="textarea" />

        <label htmlFor="tag">Tag</label>
        <input id="tag" name="tag" type="text" />

        <button>Send data!</button>
      </form>
    );
  }
}

export default PetsForm;
