<template>
  <div class="contact-us full-screen error-page">
    <div class="wrapper wrapper-full-page section content">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="title text-danger">Not Found</h2>
              <h2 class="title">Oops! It seems that this page does not exist.</h2>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-md-12 text-center">
              <router-link
                :to="{path:'/'}"
                style="border-bottom: 2px solid;">Return to Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
