/*
    الراوتس مفصولة في ملف لوحدها فلازم استدعي كل الكومبس هنااول
*/
import HomePage from './components/HomePage'
import AboutUsPage from './components/AboutUsPage'
import PostPage from './components/PostPage'
import PostsPage from './components/PostsPage'
import UsersPage from './components/UsersPage'
import UsersHomePage from './components/users/UsersHomePage'
import UsersViewPage from './components/users/UsersViewPage'
import NotFoundPage from './components/NotFoundPage'


// array of objects بعرف الراوتس في ثابت
const routes = [
    /*
        path     : هكتب اي في اللينك
        component:  هظهر الكومب ده  
        name     : بدي للراوت اسم

        ــــــــــــــــــــــــــــــــــــــــ

         // route guards
        beforeEnter: وانا داخل ع الصفحة دي هعمل حاجة معينة
            * to   : معلومات عن اللينك الي رايحه
            * from : معلومات عن اللينك الي منتقل منه
            * next : اوبجيكت بستخدمه و فيه فانكشن ده الي بيروح للي انا عاوزه
            
        :id         : اما اكون عاوز اباصي برامتر
        props: true : بعرفه اني هستقبل البرامتر ده في بروب بعد كده

         ــــــــــــــــــــــــــــــــــــــــ



        children : اما اكون عاوز اعمل راوت جوه راوت
            * path: ""     : الرووت
            * path: ":id"  : بيكمل يحطه بعد الاب 
            * path: "/:id" : كده بيفهم انك عاوز تحطه بعد اسم الموقع مباشرة 

        ــــــــــــــــــــــــــــــــــــــــ

        path: "*" : لو كتبت اي راوت مش موجود هينفذ ده 
    */

    {path: "/", component: HomePage, name: "home"},
    {path: "/about", component: AboutUsPage, beforeEnter: (to, from, next)=>{ 
        console.log('about beforeEnter'); 
        next();
    }},
    {path: "/posts", component: PostsPage},
    {path: "/posts/:id", component: PostPage, props: true, name: "single-post"},
    {path: "/users", component: UsersPage, children: [
        {path: "", component: UsersHomePage},
        {path: ":id", component: UsersViewPage, props: true}
    ]},
    {path: "*", component: NotFoundPage}
];

// عشان استقبله في ملف المين جي اس
export default routes;
