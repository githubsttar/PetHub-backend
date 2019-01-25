import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap';
import GeoAutoComplete from './GeoAutoComplete';
import ActiveStorageProvider from 'react-activestorage-provider';


class PetsForm extends Component {
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
    }).then(
      (response) => response.json().then(
        (json) => this.props.history.push('/pets/' + json.id)
      )
    );
  }

  render() {
    return (
      <Container className='App'>
        <h1>Enter your pet information</h1>
        <Form onSubmit={this.handleSubmit} className="form">
          <Row form>
            <Col>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Pet name" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="owner">Owner</Label>
                <Input type="text" name="owner" id="owner" placeholder="Your name" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" id="description" placeholder="Describe the pet"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Picture</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Status</Label>
            <Input type="select" name="tag" id="exampleTag">
              <option>Lost</option>
              <option>Found</option>
              <option>Reunited</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="location">Last Seen Location</Label>
            <GeoAutoComplete />
          </FormGroup>

          <ActiveStorageProvider
          endpoint={{
            path: '/pets',
            model: 'pet',
            attribute: 'photo',
            method: 'POST',
            }}
          onSubmit={pet => this.setState({ photo: pet.photo })}
          render={({ handleUpload, uploads, ready }) => (
            <div>
              <input
                type="file"
                disabled={!ready}
                onChange={e => handleUpload(e.currentTarget.files)}
              />

              {uploads.map(upload => {
                switch (upload.state) {
                  case 'waiting':
                    return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                  case 'uploading':
                    return (
                      <p key={upload.id}>
                        Uploading {upload.file.name}: {upload.progress}%
                      </p>
                    )
                  case 'error':
                    return (
                      <p key={upload.id}>
                        Error uploading {upload.file.name}: {upload.error}
                      </p>
                    )
                  case 'finished':
                    return <p key={upload.id}>Finished uploading {upload.file.name}</p>
                }
              })}
            </div>
          )}
        />

          <Button color="dark" style={{marginTop: '2rem'}} block>Report</Button>
        </Form>
      </Container>
    );
  }
}

export default PetsForm;
