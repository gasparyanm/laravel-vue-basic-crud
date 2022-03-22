export const product = [
    {
        name: 'home',
        path: '/',
        component: () => import('../view/product/Index')
    },
    {
        name: 'create',
        path: '/create',
        component: () => import('../view/product/Create')
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: () => import('../view/product/Edit')
    },
    {
        name: 'show',
        path: '/show/:id',
        component: () => import('../view/product/Show')
    }
];
