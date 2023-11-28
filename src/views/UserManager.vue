<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">User Management
          <router-link to="/users/add" class="btn btn-success btn-sm"><i class="fa fa-plus-circle"></i> New</router-link>
        </p>
        <p class="fst-italic">The "User Management" application aims to streamline administrative tasks related to user accounts, ensuring effective user management, data accuracy, and security within the system. It serves as a centralized hub for overseeing, maintaining, and controlling user-related activities, empowering administrators to efficiently manage user accounts while adhering to established security protocols and access controls.</p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Search Name">
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark">
                </div>
              </div>
            </div>
          </div>
        </form>
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

  <div class="container mt-3" v-if="users.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="user of users" :key="user">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img :src="user.photoUrl" alt="" class="user-img">
              </div>
              <div class="col-sm-7">
                  <ul class="list-group">
                    <li class="list-group-item">Name : <span class = "fw-bold"> {{ user.details.firstName }} {{ user.details.lastName }}</span></li>
                    <li class="list-group-item">Email : <span class = "fw-bold"> {{ user.email }}</span></li>
                    <li class="list-group-item">Age : <span class = "fw-bold"> {{ user.details.age }}</span></li>
                    <li class="list-group-item">Birthday : <span class = "fw-bold"> {{ user.details.birthday }}</span></li>
                  </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <router-link :to="`/users/view/${user.id}`" class="btn btn-warning my-1">
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link :to="`/users/edit/${user.id}`" class="btn btn-primary my-1">
                  <i class="fa fa-pen"></i>
                </router-link>
                <button class="btn btn-danger my-1" @click="deleteUser(user.id)">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {UserService} from "@/services/UserService";
import LoadingSpinner from "@/components/Spinner";

export default {
  name: "UserManager",
  components: {LoadingSpinner},
  data: function () {
    return {
      loading : false,
      users : [],
      errorMessage : null
    }
  },
  created : async function () {
    try {
      this.loading = true;
      let response = await UserService.getAllUsers();
      this.users = response.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods : {
    deleteUser: async function (userId) {
      try {
        this.loading = true;
        let response = await UserService.deleteUser(userId);
        if (response) {
          let response = await UserService.getAllUsers(); // refresh data
          this.users = response.data;
          this.loading = false;
        }
      } catch (error) {
        this.errorMessage = error;
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>

</style>