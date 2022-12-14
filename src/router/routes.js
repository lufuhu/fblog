
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') },
      { path: '/node', component: () => import('pages/node.vue') },

    ]
  },
  {
    path: '/',
    component: () => import('layouts/ChildLayout.vue'),
    children: [
      { path: '/icons', component: () => import('pages/icons.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
