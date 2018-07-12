import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'


const defaultProps = {}

//如果在组件中你想用到store中的数据和方法，需要通过inject注入进来，然后在组件中通过this.props获取他们。
//将组件设置为@observer的目的是，将组件变成响应式组件，即当 [observable数据] 发生变化时，会自动调用render方法重新渲染组件。

@inject('store')
@observer
class DataTree extends Component {

  componentWillMount() {
    const { store } = this.props;
    store.dataTreeStore.fetchDataTree({
      variables: {
        project_id: '5a39e49841728a75c0feb0fc',
        app_id: '5b2cb6c68d17c02d560f8bea',
        __DC: true
      }
    });
  }

  render() {
    return (
      <h1>DataTree Page</h1>
    );
  }

}

DataTree.defaultProps = defaultProps;
export default DataTree;
