import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IntroductionPage.vue') }],
  },

  {
    path: '/cv',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CVPage.vue') }]
  },


  {
    path: "/article-editor",
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ArticleEditor.vue')}]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
