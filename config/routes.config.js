export default [
    {
        path: '/login',
        component: './Login',
    },
    {
        path: '/',
        component: '../layout',
        routes: [
            {path:'/',redirect:"/question/list"},
            {path:'/question/list',component: './Question/QuestionList'},
            {path:'/question/ask',component: './Question/QuestionAsk'},
            {path:'/question/detail',component: './Question/QuestionDetail'},
        ]
    }
];