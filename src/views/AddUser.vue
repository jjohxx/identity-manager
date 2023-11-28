<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">
          Add User
        </p>
        <p class="fst-italic">
          User addition, ensuring swift and secure integration of new accounts while maintaining data accuracy and
          system security. Streamline the process for administrators to efficiently onboard new users, adhering to
          established access controls.
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitCreated()">
          <div class="mb-2">
            <input required v-model="user.details.firstName" type="text" class="form-control" placeholder="First Name">
          </div>
          <div class="mb-2">
            <input required v-model="user.details.lastName" type="text" class="form-control" placeholder="Last Name">
          </div>
          <div class="mb-2">
            <input required v-model="user.details.age" type="number" class="form-control" placeholder="Age">
          </div>
          <div class="mb-2">
            <input
                required
                v-model="user.details.birthday"
                type="text"
                class="form-control"
                placeholder="Birthday (YYYY-MM-DD)"
                pattern="\d{4}-\d{2}-\d{2}"
                title="Please enter a date in the format YYYY-MM-DD"
            >
          </div>
          <div class="mb-2">
            <input required v-model="user.photoUrl" type="text" class="form-control" placeholder="Photo URL">
          </div>
          <div class="mb-2">
            <input required v-model="user.email" type="email" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <input
                required
                v-model="user.mobile"
                type="tel"
                class="form-control"
                placeholder="Phone (e.g., 77771111)"
                pattern="[0-9]{8}"
                title="Please enter a 10-digit phone number (e.g., 77771111)"
            >
          </div>
          <div class="mb-2">
            <input v-model="user.company" type="text" class="form-control" placeholder="Company">
          </div>
          <div class="mb-2">
            <input v-model="user.title" type="text" class="form-control" placeholder="Title">
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create">
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="user-img">
      </div>
    </div>
  </div>
</template>

<script>
import {UserService} from "@/services/UserService";

export default {
  name: "AddUser",
  data: function () {
    return {
      user: {
        name: '',
        details: {
          firstName: '',
          lastName: '',
          age: '',
          birthday: '',
        },
        photoUrl: '',
        email: '',
        phone: '',
        company: '',
        title: ''
      }
    }
  },
  methods: {
    submitCreated: async function () {
      try {
        let response = await UserService.createUser(this.user);
        if (response) {
          return this.$router.push('/');
        } else {
          return this.$router.push('/users/add');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>

</style>