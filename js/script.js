var app = new Vue({
  el: "#app",
  data: {
    numders: [],
    items: [0, 0],
    item: "",
    midleVal: 0
  },
  methods: {
    average: function () {
    },
    addInput() {
      let newItem = this.items.length + 1;
      return this.items.push(newItem);
    },
    removeInput() {
      return this.items.pop();
    },
    inputValueCalc() {
      let inputs = document.querySelectorAll(".calculate__input-num");
      let sum = 0;
      for (let i = 0; i < inputs.length; i++) {
        let inputVal = Number(inputs[i].value);
        sum += inputVal;
      }
      return this.midleVal = sum / inputs.length;
    },
  },
  computed: {

  }
})

