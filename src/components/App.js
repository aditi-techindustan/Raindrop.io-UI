import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Sidebar from './Sidebar/';
import Topbar from './Topbar/';
import Edit from './Links/Edit';
import Info from './Links/Info';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
    }
  }

  onEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const topBar = this.state.edit ? 5 : 0;
    const editBar = this.state.edit ? 4 : 9;

    return (
      <Grid fluid >
        <Row className="show-grid">
          <Col xs={12} md={3} sm={3}>
            <Sidebar />
          </Col>
          <Col xs={12} md={editBar} sm={editBar}>
            <Topbar onEdit={this.onEdit} edit={this.state.edit} />
          </Col>
          {topBar ? <Col xs={12} md={topBar} sm={topBar}>
            <Edit onEdit={this.onEdit} />
          </Col> : null}
        </Row>
      </Grid>
    );
  }
}

export default App;