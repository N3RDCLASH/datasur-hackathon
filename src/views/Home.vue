<template>
  <div>
    <div class="row">
      <card title="Calendar" class="scale-up-center"
        ><vc-calendar
          is-expanded
          mode="single"
          :value="null"
          color="red"
          class=""
        ></vc-calendar
      ></card>
      <card title="Schedule" class="scale-up-center">
        <ul
          class="collapsible"
          :key="appointment.id"
          v-for="appointment of appointments"
        >
          <li>
            <div class="collapsible-header">
              <i class="material-icons secondary" color="">event</i
              >{{ appointment.name }}
            </div>
            <div class="collapsible-body">
              <h6>Apointment Information</h6>
              <div class="row">
                <div class="col s12">
                  <input type="text" class="datepicker" value disabled />
                </div>
              </div>
              <div class="row">
                <div class="col s6">
                  <label for="from">From</label>
                  <input
                    type="text"
                    class="timepicker"
                    name="from"
                    :value="appointment.time_from.toDate()"
                    disabled
                  />
                </div>
                <div class="col s6">
                  <label for="to">To</label>
                  <input
                    type="text"
                    class="timepicker"
                    name="to"
                    :value="appointment.time_from.toDate()"
                    disabled
                  />
                </div>
              </div>
              <div class="row">
                <label for="">Description</label>
                <span class=" left left-align">{{
                  appointment.description
                }}</span>
              </div>
            </div>
          </li>
        </ul>
      </card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import M from "materialize-css";
import Card from "@/components/Card";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      user: firebase.auth().currentUser.uid,
      appointments: [],
      attributes: [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
      ],
    };
  },
  methods: {},
  async mounted() {
    let appointments = await firebase
      .firestore()
      .collection("appointments")
      .where("uid", "==", "")
      .get();

    if (appointments) {
      appointments.forEach((element) => {
        this.appointments.push(element.data());
      });
    }
  },
  updated() {
    M.AutoInit();
  },
};
</script>
<style scoped>
.card-title {
  color: #af301d;
}
</style>
