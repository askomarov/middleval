var app = new Vue({
  el: "#app",
  data: {
    numders: [],
    items: [0, 0],
    item: "",
    midleVal: 0
  },
  methods: {
    calcme: function () {
      // return numMidle = (Number(this.num1) + Number(this.num2)) / 2;
    },
    average: function () {
    },
    updateList() {
      let newItem = this.items.length + 1;
      return this.items.push(newItem);
    },
    inputValueCalc() {
      let inputs = document.querySelectorAll(".calculate__input-num");
      console.log(inputs.length);
      let sum = 0;
      for (let i = 0; i < inputs.length; i++) {
        let inputVal = Number(inputs[i].value);
        console.log(inputVal);
        sum += inputVal;
      }
      return this.midleVal = sum / inputs.length;
    }

  },
  computed: {

  }
})

