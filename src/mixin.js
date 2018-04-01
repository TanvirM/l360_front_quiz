module.exports = {
    methods: {
        quest(el) {
            this.ExamNo++;
            if (this.ExamNo > 1) {
                alert("You must complete the exam");

            }
            var that = this;
            that.$http({
                method: 'post',
                url: this.base_url + '/exam/api/',
                auth: {
                    username: 'l360_mobile_app',
                    password: 'itsd321#'
                },
                data: {
                    "id": 202,
                    "duration": el
                }

            }).then((response) => {
                console.log(response);
                if (response.status === 200) {

                    this.questions = response.data.questions
                    console.log(this.questions);

                }


            })
                .catch((error) => {
                    alert(error);
                });


            localStorage.setItem('k', this.data.minutes);
            let val = localStorage.getItem('k');
            console.log(val);

        },
    }


    };