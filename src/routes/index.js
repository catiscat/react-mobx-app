
const routes = [
  {
    path: '/',
    component: require('../containers/DataSource/DataTreePage').default,
    routes: [
      ...require('./dataSource')
    ]
  }
]

module.exports = routes;
