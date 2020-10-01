<template>
  <div>
    <div class="row">
      <div class="col s12">
        <h2 class="primary">Datasur</h2>
        <ul class="tabs">
          <li class="tab col s3"><a href="#test1">About</a></li>
          <li class="tab col s3">
            <a class="active" href="#test2">Schedule</a>
          </li>
        </ul>
      </div>
      <div id="test1" class="col s12">
        <div class="row">
          <img height="200px" src="../assets/Datasur-Favicon.png" alt="" />
          <div class="col m8 s12">
            <h6><b>Description</b></h6>
            <span class="left-align left">
              Leading the professionalization of ICT services in Suriname and
              the growth of the Surinamese sector, through the provision and
              development of high quality, sustainable and economically sound
              ICT solution.
              <br />
              We deliver reliable and flexible ICT infrastructures from an
              internationally certified data center in Suriname to safely manage
              and house business critical applications and data for our
              customers.
            </span>
          </div>
        </div>
        <div class="row">
          <card class="col m8 s12 slide-left">
            <h5 class="primary">Services</h5>
            <table class="centered responsive-table">
              <thead>
                <tr>
                  <th>Name</th>

                  <th>Item Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Colocation</td>
                  <td>$87</td>
                </tr>
                <tr>
                  <td>Infrastructures</td>
                  <td>$37</td>
                </tr>
                <tr>
                  <td>Cloud Storage</td>
                  <td>$70</td>
                </tr>
              </tbody>
            </table>
          </card>
        </div>
      </div>
      <div id="test2" class="col s12">
        <div class="row">
          <card class="scale-up-center">
            <vc-calendar is-expanded></vc-calendar>
          </card>
          <card title="Timeslots Available" class="scale-up-center">
            <ul class="collapsible">
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">access_time</i>8:30 AM
                </div>
                <div class="collapsible-body">
                  <span
                    class="col s12 left-align 
                  "
                  >
                    Create an appointment</span
                  >
                  <a class="waves-effect waves-light btn book"
                    ><i class="material-icons right">event_available</i> Book</a
                  >
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">access_time</i>10:00 AM
                </div>
                <div class="collapsible-body ">
                  <span
                    class="col s12 left-align 
                  "
                  >
                    Create an appointment</span
                  >
                  <a class="waves-effect waves-light btn book"
                    ><i class="material-icons right">event_available</i> Book</a
                  >
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  <i class="material-icons primary">access_time</i>12:30 PM
                </div>
                <div class="collapsible-body">
                  <span
                    class="col s12 left-align 
                  "
                  >
                    Create an appointment</span
                  >
                  <a class="waves-effect waves-light btn book"
                    ><i class="material-icons right">event_available</i> Book</a
                  >
                </div>
              </li>
            </ul>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  components: { Card },
  data() {
    return {};
  },
};
</script>

<style scoped>
.book {
  background-color: #af301d;
}
i {
  color: #efba98;
}
</style>
