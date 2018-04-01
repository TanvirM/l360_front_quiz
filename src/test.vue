<template>
  <v-ons-page>
    <div class="test_body">

      <v-ons-card class="test_card">
          {{this.data.minutes}}
        <!--
                        <div class="timer" v-if="!timeStop">
                            <div class="minutes" v-html="minutes"></div>
                            <div class="seconds" id="seconds" v-html="secondsShown"></div>
                        </div>
                        <div class="timer" v-else>
                            <div class="minutes" v-html="minutes"></div>
                            <div class="seconds" v-html="secondsShown"></div>
                        </div>

-->
        <div class="test_div"  v-for="(ques,index) in  questions">
          <div v-show="index === ques_index">

            <p class="test_text"><strong> {{ ques.question_text}} </strong>  </p>

            <ol align="center" >
              <li class="test_list " v-for="(choice,$index) in ques.choices" >
                <label class="center radio-button">
                  <input type="radio" @change="correct" :value="choice.is_right" :name="index" id="choice.choice_id"
                         v-model=" userResponses[index] ">
                  <v-ons-list-item tappable>{{ choice.choice_text }}</v-ons-list-item>

                </label>
              </li>


            </ol>

              <v-ons-button class="prev_next_button" v-show="ques_index >= 1" align ="center" modifier="cta" style="margin: 6px 0; " @click="prev()">
                  Prev
              </v-ons-button>
              <v-ons-button class="prev_next_button" align ="center" modifier="cta" style="margin: 6px 0; " @click="next()">
                  Skip
              </v-ons-button>
              <p class="test_number" align="center" > {{index+1}} / {{questions.length}} </p>

          </div>
        </div>


        <div v-if="ques_index === questions.length">

          <h2>
            Congratulations! You just Completed a Test
          </h2>
          <p>
            Total score: {{ score ()}} /  {{ questions.length }}
          </p>

          <v-ons-button v-if="this.c <=3" class="prev_next_button" modifier="cta" style="margin: 6px 0" >
            Next
          </v-ons-button>


        </div>


      </v-ons-card>


    </div>

  </v-ons-page>
</template>
<script>

    import Swal from 'sweetalert2';


    export default {

        data() {
            return {
                minutes:0,
                interval: null,
                started: true,
                ques_index: 0,
                questions: [],
                userResponses: [],
                c: 0,
                count: 0,
                answered: 0,
                ExamNo: 0,
                completed: false,
                Completed_list:[]

            }

        },
        created(){

                // so nice
                this.quest(this.data.minutes);


        },


        mounted() {

            this.userResponses = Array(this.questions.length);

        },
        methods: {


            next() {
                this.ques_index++;

            },
            prev() {
                this.ques_index--;
            },

            score: function () {
                this.c = this.userResponses.filter(function (val) {
                    return val
                }).length;

                return this.c;
            },

            correct: function () {


                if (this.userResponses[this.ques_index] === true || this.userResponses[this.ques_index] === false) {
                    this.ques_index++;
                    console.log(this.ques_index);
                }

                this.answered = this.userResponses.filter(ur => (ur === true || ur === false)).length;
                console.log(this.answered);
                return this.answered;
            },
       
        },

        computed: {


        },

        props: ['pageStack']
    }
</script>
<style>
     input[type="radio"] {
        display: none;
    }
</style>
