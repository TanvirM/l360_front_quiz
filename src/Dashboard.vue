<template>

      <v-ons-page>

        <div class="dashboard_bg">
          <div class="dashboard_top" align="center">
          <v-ons-row class="timer_cover">
            <v-ons-col>
              <div @click="exams(2)">
                <strong>2 Minutes</strong>

                </div>
            </v-ons-col>
            <v-ons-col>
              <div @click="exams(5)">
                <strong>5 Minutes</strong>
                </div>
            </v-ons-col>
          </v-ons-row>
          <v-ons-row class="timer_cover">
            <v-ons-col>
              <div @click="exams(10)">
                <strong>10 Minutes</strong>
                </div>
            </v-ons-col>
          </v-ons-row>
              <v-ons-row>
            <v-ons-col>
              <div @click="exams(15)">
                <strong>15 Minutes</strong>
              </div>
            </v-ons-col>
          </v-ons-row>

          </div>
        </div>
      </v-ons-page>
    </template>
    <script>

        import Swal from 'sweetalert2';
        import test from './test';

        export default {
            data() {
                return {
                    minutes: 0


                }
            },

        mounted(){
            document.addEventListener("deviceready", this.onDeviceReady, false);

        },

            methods: {

                exams(e) {

                    this.pageStack.push({
                        extends: test,
                        data() {
                            return {
                                data: {
                                    'minutes': e,


                                }
                            }
                        },


                    });

                },
                onDeviceReady:  function  () {
                    document.addEventListener("backbutton", function(e){

                    navigator.notification.confirm("Are you sure you want to exit ?",this.onConfirm(e), "Confirmation", "Yes,No");
                        alert('Back Button is Pressed!');

                },false)
                },
                onConfirm: function (button) {
                    if (button === 2) {//If User selected No, then we just do nothing
                        return;
                    } else {
                        navigator.app.exitApp();// Otherwise we quit the app.
                    }
                },

            },


            props: ['pageStack']

        }
    </script>
    <style>


    </style>
