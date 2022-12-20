// //Ex. 1
// const checkThis = () => {
//   console.log(this);
// }

// document.querySelector("button").addEventListener("click", checkThis);

//Ex. 2
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach( (student) => {
      console.log(this)
      alert(this.title + ": " + student);
    });
  },
};

group.showList();
