let table = document.getElementById("tableBody");

let start = 0;
let end = 3;

// get input from alert
let day = 1;
let month = 15;
start = 1;
end = 27;

let content = '' ;
console.log(`start processing at ${start}`);

for(let i = start; i <= end; i+=3){
    content += `
    <tr>
      <td>${day}-${month}-${i}</td>
      <td>${day}-${month}-${i+1}</td>
      <td>${day}-${month}-${i+2}</td>
    </tr>
    `;
}
console.log(`end processing at ${end}`);

//console.log(content);

table.innerHTML = content;