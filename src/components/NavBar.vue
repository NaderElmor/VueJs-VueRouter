<template>
    <ul class="nav nav-pills">
      <li class="nav-item">
      <!-- بستخدم اسم الراوت هنا بقا بس لازم تعمل بايند  -->
      <!-- router-link بتتحول للينك اتش تي ام ال  -->

        <router-link :to="{name: 'home'}" class="nav-link" active-class="active" exact href="#">
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link" active-class="active" href="#">
          About Us
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/posts" class="nav-link" active-class="active" href="#">
          Posts
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link" active-class="active" href="#">
          Users
        </router-link>
      </li>
    </ul>
</template>
