export default {
    path: '/pratice',
    name: 'PraticeView',
    component: () => import('@/components/praticies/Menu'),
    children: [
        {
            path: 'project-1',
            name: 'ProjectOne',
            component: () => import('@/components/praticies/ProjectOne'),
        },
        {
            path: 'counter',
            name: 'ProjectTwo',
            component: () => import('@/components/praticies/ProjectTwo'),
        },
        {
            path: 'search',
            name: 'ProjectThree',
            component: () => import('@/components/praticies/ProjectThree'),
        },
        {
            path: 'project-4',
            name: 'ProjectFour',
            component: () => import('@/components/praticies/ProjectFour'),
        },
        {
            path: 'project-5',
            name: 'ProjectFive',
            component: () => import('@/components/praticies/ProjectFive'),
        },
        {
            path: 'project-6',
            name: 'ProjectSix',
            component: () => import('@/components/praticies/ProjectSix'),
        },
        {
            path: 'project-7',
            name: 'ProjectSeven',
            component: () => import('@/components/praticies/ProjectSeven'),
        },
        {
            path: 'project-8',
            name: 'ProjectEight',
            component: () => import('@/components/praticies/ProjectEight'),
        },
        {
            path: 'project-9',
            name: 'ProjectNine',
            component: () => import('@/components/praticies/ProjectNine'),
        },
        {
            path: 'project-10',
            name: 'ProjectTen',
            component: () => import('@/components/praticies/ProjectTen'),
        },
        {
            path: 'project-11',
            name: 'ProjectEleven',
            component: () => import('@/components/praticies/ProjectEleven'),
        },
        {
            path: 'project-12',
            name: 'ProjectTwelve',
            component: () => import('@/components/praticies/ProjectTwelve'),
        },
    ]
}