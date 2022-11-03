
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'IndexPage', path: '', component: () => import('pages/IndexPage.vue'),}, 
      { name: 'InstagramFeed', path: '/feed', component: () => import('pages/InstagramFeed.vue') }
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
