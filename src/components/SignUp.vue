<template>
  <div>
    <section class="vh-100" :class="classObject">
      <select
        class="select form-control-lg m-3"
        @change="changeColor($event.target.value)"
      >
        <option value="1" disabled>主題色</option>
        <option value="2">泡泡粉</option>
        <option value="3">海洋藍</option>
      </select>
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div
              class="card shadow-2-strong card-registration"
              style="border-radius: 15px"
            >
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5" id="title">註冊表單</h3>
                <form>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="firstName">姓</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="lastName">名</label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 d-flex align-items-center">
                      <div class="form-outline datepicker w-100">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="birthdayDate"
                          v-model="age"
                        />
                        <label for="birthdayDate" class="form-label"
                          >年齡</label
                        >
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <h6 class="mb-2 pb-1">性別:</h6>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option1"
                          checked
                        />
                        <label class="form-check-label" for="femaleGender"
                          >男</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option2"
                        />
                        <label class="form-check-label" for="maleGender"
                          >女</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="option3"
                        />
                        <label class="form-check-label" for="otherGender"
                          >其他</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input
                          type="email"
                          id="emailAddress"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="emailAddress"
                          >Email</label
                        >
                      </div>
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input
                          type="tel"
                          id="phoneNumber"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="phoneNumber"
                          >電話號碼</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <select class="select form-control-lg">
                        <option value="1" disabled>隸屬部門</option>
                        <option value="2">部門 1</option>
                        <option value="3">部門 2</option>
                        <option value="4">部門 3</option>
                      </select>
                      <label class="form-label select-label">請選擇</label>
                    </div>
                  </div>

                  <div class="mt-4 pt-2">
                    <button class="btn btn-primary btn-lg" @click="signup">
                      提交
                    </button>
                    <router-link to="/signin">已有帳號?登入</router-link>
                    <!-- <input
                      class="btn btn-primary btn-lg"
                      type="submit"
                      value="提交"
                    /> -->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      age: "",
      color: 2,
      person: [],
    };
  },
  methods: {
    signup() {
      if (this.adult == false) {
        alert("您未成年，還不行加入山葵組");
      }
    },
    changeColor(color) {
      this.color = color;
    },
  },
  computed: {
    adult() {
      if (this.age < 18) {
        return false;
      } else {
        return true;
      }
    },
    classObject() {
      return {
        "pink-background": this.color == 2,
        "blue-background": this.color == 3,
      };
    },
  },
  mounted() {
    let url = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
    this.axios.get(url).then((res) => {
      // console.log(res);
      this.person = res.data;
      // console.log(this.person);
      for (let i = 0; i < this.person.length; i++) {
        alert("Fake api的神秘人物名字：" + this.person[i].name);
      }
    });
  },
};
</script>
<style lang="scss">
@import "../assets/scss/main.scss";

#title {
  color: $boyColor;
}
.blue-background {
  /* background: $boyColor; */
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to bottom right,
    rgba(240, 147, 251, 1),
    rgba(245, 87, 108, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: $blueBackground;
}
.pink-background {
  background: $pinkBackground;
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.card-registration .select-arrow {
  top: 13px;
}
</style>
