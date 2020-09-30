<template>
  <div>
    <div class="row"></div>
    <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s3"><a href="#test1">About</a></li>
          <li class="tab col s3">
            <a class="active" href="#test2">Schedule</a>
          </li>
        </ul>
      </div>
      <div id="test1" class="col s12">
        <div class="row">
          <div class="col m4 s12">
            <h5>Description</h5>
            <span class="left-align left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptates debitis eaque vel omnis fugit qui repellat
              odit necessitatibus ipsa, voluptatibus expedita sunt, esse
              tempora? Inventore quod laboriosam repellendus ipsum!
            </span>
          </div>
        </div>
      </div>
      <div id="test2" class="col s12">
        <div class="row">
          <card>
            <vc-calendar is-expanded></vc-calendar>
          </card>
          <card title="Open Timeslots">
            <ul class="collapsible">
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">filter_drama</i>First
                </div>
                <div class="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">place</i>Second
                </div>
                <div class="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
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

<style scoped></style>
