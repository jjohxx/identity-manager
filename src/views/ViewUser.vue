<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">
          View User
        </p>
        <p class="fst-italic">
          Access user information effortlessly, ensuring data accuracy and system security. Provide administrators with a streamlined interface to conveniently browse user details while upholding established access controls, fostering a secure and informed view of user data.
        </p>
      </div>
    </div>
  </div>

  <!--  Spinner -->
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <LoadingSpinner/>
        </div>
      </div>
    </div>
  </div>

  <!--  Error message-->
  <div v-if="!loading && errorMessage">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h4 text-danger fw-bold">{{errorMessage}}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container" v-if="!loading && isDone()">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img :src="user.photoUrl" alt="" class="user-img-big">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name : <span class = "fw-bold"> {{ user.details.firstName }} {{ user.details.lastName }}</span></li>
          <li class="list-group-item">Email : <span class = "fw-bold"> {{ user.email }}</span></li>
          <li class="list-group-item">Age : <span class = "fw-bold"> {{ user.details.age }}</span></li>
          <li class="list-group-item">Birthday : <span class = "fw-bold"> {{ user.details.birthday }}</span></li>
          <li class="list-group-item">Phone : <span class = "fw-bold"> {{ user.mobile }}</span></li>
          <li class="list-group-item">Company : <span class = "fw-bold"> {{ user.company }}</span></li>
          <li class="list-group-item">Title : <span class = "fw-bold"> {{ user.title }}</span></li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success"> <i class="fa fa-arrow-alt-circle-left"></i>
          Back
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {UserService} from "@/services/UserService";

export default {
  name: "ViewUser",
  data : function () {
    return {
      userId : this.$route.params.userId,
      loading : false,
      user : {},
      errorMessage : null
    }
  },
  created : async function () {
    try {
      this.loading = true;
      let response = await UserService.getUser(this.userId);
      this.user = response.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage=error;
      this.loading = false;
    }
  },
  methods : {
    isDone : function () {
      return Object.keys(this.user).length > 0;
    }
  }
}
</script>

<style scoped>

</style>