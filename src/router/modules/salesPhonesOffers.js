
/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const salesPhonesOffersRouter = {
  path: '/salesPhonesOffers',
  component: Layout,

  meta: {
    title: 'Nested Routes',
    icon: 'nested'
  },
  children: [
    {
      path: 'salesPhonesOffers',
      component: () => import('@/views/salesPhonesOffers/index'), // Parent router-view
      name: 'salesPhonesOffers',
      meta: { title: '手机报价' }

    }

  ]
}

export default salesPhonesOffersRouter
