import { observable, action, autorun, computed } from 'mobx';
import sendRequest from '../middlewares/request';
import * as actions from '../actions/dataSource';
/**
 * 对数据的增删改查等操作都放在这里。在使用到的组件里面直接调这里的方法就行。
 * 这样的好处是将view 和 data／action 更好地分离了。
 */
class DataTreeStore {
  @observable dataTree = [];

  constructor() {
    // autorun 是当autorun函数体中引用的任何数据发生变化时，都会自动执行该函数体内的东西。他和computed的区别是，computed会产生一个新的计算属性。而他不会。
    autorun(() => console.log(this.dataTree, 'inautorun'))
  }

  // action 用于改变observable的数据
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

  // 在属性前面加上get时，当你在其他任何地方获取 dataTreeStore.dataTreeLength, 都会进入该函数，并将该值返给你。
  // @computed用于创建新的计算属性，这里就创建了一个新的计算属性dataTreeLength。比如你获取 dataTreeStore.dataTreeLength 时，他会计算出一个新值返给你。
  @computed
  get dataTreeLength() {
    return this.dataTree.length || 0;
  }

  // 在属性前面加上set时，当你在其他任何地方通过 dataTreeStore.dataTreeLength = length 给dataTreeLength赋值时，都会进入该函数。
  set dataTreeLength(length) {
    this.length = length;
  }
}

const dataTreeStore = new DataTreeStore();

export default dataTreeStore;
