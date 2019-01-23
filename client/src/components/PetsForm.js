class PetsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      owner: '',
      description: '',
      tag: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('A Pet was submitted: ' + this.state.name);
    event.preventDefault();
    const newPet = {
      name: this.state.name,
      owner: this.state.owner,
      description: this.state.description,
      tag: this.state.tag
    };
    //Add name via addUser action
    this.props.addUser(newUser, this.props.history);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pet:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PetsForm;
