'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = [...listOfEmployees.querySelectorAll('li')];

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList() {
  const arr = getEmployees(employees);

  arr.sort((a, b) => b.salary - a.salary);

  const liMap = new Map(employees.map((li) => [li.textContent.trim(), li]));

  arr.forEach((emp) => {
    const li = liMap.get(emp.name);

    if (li) {
      listOfEmployees.appendChild(li);
    }
  });
}

function getEmployees(list) {
  return list.map((element) => ({
    name: element.textContent.trim(),
    position: element.dataset.position,
    salary: parseSalary(element.dataset.salary),
    age: Number(element.dataset.age),
  }));
}

sortList();
