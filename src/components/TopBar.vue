<template>
  <div class="topbar">
    <ul>
      <li
        v-tippy="{ placement : 'top', arrow: true }"
        class="text-center"
        title="Menu"><img
          class="menu-icon icon"
          src="/assets/img/menu.svg"></li>
      <li class=""><img
        class="search icon"
        src="/assets/img/search.svg"><input
          class="search"
          type="text"
          name=""
          placeholder="Search"></li>
      <li
        v-tippy="{ placement : 'top', arrow: true }"
        class="text-center"
        title="Profile">
        <router-link :to="{ name: 'profile'}">
          <img
            class="profile icon"
            src="/assets/img/user-b.png">
        </router-link>
      </li>
      <li
        v-tippy="{ placement : 'top', arrow: true }"
        class="text-center"
        title="Disconnect"><img
          class="sigout icon"
          src="/assets/img/signout-b.png"></li>
    </ul>
  </div><!--topbar-->
</template>
