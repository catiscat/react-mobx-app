import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import _ from 'lodash';


const defaultProps = {}

// 如果在组件中你想用到store中的数据和方法，需要通过inject注入进来，然后在组件中通过this.props获取他们。
// 将组件设置为@observer的目的是，将组件变成响应式组件，即当 [observable数据] 发生变化时，会自动调用render方法重新渲染组件。
const propTypes = {
  store: PropTypes.object
}

@inject('store')
@observer
class DataTree extends Component {

  componentWillMount() {
    this.fetchDataSource({
      project_id: '5a39e49841728a75c0feb0fc',
      app_id: '5b2cb6c68d17c02d560f8bea',
      __DC: true
    });
  }

  getColumns() {
    return [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      }
    ];
  }

  getDataSource() {
    const { store: { dataTreeStore: { dataTree } } } = this.props;
    return _.map(dataTree, item => ({
      ...item,
      key: item.id
    }));
  }

  fetchDataSource(variables) {
    const { store: { dataTreeStore } } = this.props;
    dataTreeStore.fetchDataTree({
      variables
    });
  }


  fetchTableData = () => {
    this.fetchDataSource({
      project_id: '59c0d7e7563f6b2043dea6bc',
      app_id: '5a13d44a6c78a81e6099a703',
      __DC: true
    });
  }


  render() {
    return (
      <div>
        <h1>DataTree Page</h1>
        <Button onClick={this.fetchTableData} >重新请求数据</Button><br />
        <Table
          dataSource={this.getDataSource()}
          columns={this.getColumns()}
        />
      </div>
    );
  }

}

DataTree.propTypes = propTypes;
DataTree.defaultProps = defaultProps;
export default DataTree;
