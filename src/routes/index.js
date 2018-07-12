
const routes = [
  {
    path: '/',
    component: require('../containers/DataSource/DataTreePage').default,
    routes: [
      ...require('./dataSource')
    ]
  }
]

console.log(routes,'routes')
module.exports = routes;
