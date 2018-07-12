import React, { Component } from 'react';
import { Frame } from '../../../components/Layout'
import DataTree from './DataTree';

class DataTreePage extends Component {
  render() {
    return (
      <Frame>
        <DataTree />
      </Frame>
    );
  }
}

export default DataTreePage;
