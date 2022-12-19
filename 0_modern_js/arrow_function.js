//Ex. 1
function checkThis() {
  console.log(this);
}

document.querySelector("button").addEventListener("click", checkThis);

//Ex. 2
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function () {
      alert(this.title + ": " + student);
    });
  },
};

group.showList();
