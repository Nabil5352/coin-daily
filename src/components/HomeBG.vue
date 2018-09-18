<template>
  <div id="home">
    <div id="home-bg">
      <img src="assets/img/home-bg.svg">
    </div>

    <div class="form">
      <div class="text-left title"><h1>Coin Daily</h1></div>
      <div class="input-group">
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your name">
      </div>
      <div class="input-group">
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password">
      </div>
      <div class="sign-in-note text-left">if you are not previously registered an account will be created automatically.</div>
      <div class="text-left"><img src="assets/img/loader.svg"></div>
      <div class="text-left"><button class="btn btn-primary"><router-link to="/dashboard">Sign In</router-link></button></div>

    </div>
  </div>
</template>

<script>

</script>
