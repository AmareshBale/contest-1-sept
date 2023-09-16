const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(person => person.profession === "developer");
    developers.forEach(developer => console.log(developer.name));
  }
  printDeveloper();
  
  // 2. Add Data
  function addData(newData) {
    data.push(newData);
  }
  addData({ name: "Amaresh", age: 28, profession: "developer" });
  console.log(data);


  // 3. Remove Admins
  function removeAdmin() {
    const filteredData = data.filter(person => person.profession !== "admin");
    data.length = 0;
    data.push(filteredData); 
  }
  removeAdmin();
  console.log(data);
  
  // 4. Concatenate Array
  function concatenateArray(newArray) {
    data.push(newArray);
  }
  concatenateArray([{ name: "Amar", age: 26, profession: "developer" }]);
  console.log(data);
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    return totalAge / data.length;
  }
  console.log(averageAge());

  // 6. Age Check
  function checkAgeAbove25() {
    return data.every(person => person.age > 25);
  }
  console.log(checkAgeAbove25());

  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [new Set(data.map(person => person.profession))];
    return professions;
  }
  console.log(uniqueProfessions());
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
  }
  sortByAge();
  
  // 9. Update Profession
  function updateJohnsProfession(newProfession) {
    const john = data.find(person => person.name === "john");
    if (john) {
      john.profession = newProfession;
    }
  }
  updateJohnsProfession("developer");
  console.log(data);
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCounts = {};
    data.forEach(person => {
      if (professionCounts[person.profession]) {
        professionCounts[person.profession]++;
      } else {
        professionCounts[person.profession] = 1;
      }
    });
    return professionCounts;
  }
  console.log(getTotalProfessions());
  
  // Testing the functions
  
 
  
  
  
  
 
  
  