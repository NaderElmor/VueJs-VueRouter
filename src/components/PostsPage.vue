<template>
    <div>
        <h1>Posts</h1>
        <ul>
            // ?q=1&name=test1 بباصي كويري استرينج عادي بإيدي
            <li><router-link to="/posts/1?q=1&name=test1">Post 1</router-link></li>
            <li>
                //params: {id:2}, query: {q:2,name:'test2'} بباصي كويري استرينج  كأوبجيكت
                <router-link :to="{name: 'single-post', params: {id:2}, query: {q:2,name:'test2'} }" >
                    Post 2
                </router-link>
            </li>
        </ul>
    </div>
</template>
