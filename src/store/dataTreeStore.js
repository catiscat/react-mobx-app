import { observable, action, autorun } from 'mobx';
import sendRequest from '../middlewares/request';
import * as actions from '../actions/dataSource';
/**
 * 对数据的增删改查等操作都放在这里。在使用到的组件里面直接调这里的方法就行。
 * 这样的好处是将view 和 data／action 更好地分离了。
 */
class DataTreeStore {
  @observable dataTree = [];

  constructor() {
    autorun(() => console.log(this.dataTree, 'inautorun'))
  }

  @action
  fetchDataTree({ variables }) {
    sendRequest({
      ...actions.fetchDataTreeOption({ variables })
    }).then((response) => {
      this.dataTree = response.data.ElementalList;
    })
  }

  @action
  addDataTree({ variables }) {
    sendRequest({
      ...actions.addDataTreeOption({ variables })
    }).then((response) => {
      this.dataTree = this.dataTree.concat(response.data);
    });
  }

}

const dataTreeStore = new DataTreeStore();

export default dataTreeStore;
