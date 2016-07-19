const Router = {
  path: '/',
  component: BlogList,
  childRoutes: [
    { path: 'detail/:id', component: '../detail/index' }
  ]
}
export default Router;