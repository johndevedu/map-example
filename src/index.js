const oldArray = ["a", "b", "c"];

const newArray = oldArray.map(item => {
  return {
    item: item,
    changedItem: item + "k"
  };
});

console.log(newArray);

const oldArrayStringified = JSON.stringify(oldArray, null, 2);
const newArrayStringified = JSON.stringify(newArray, null, 2);

document.getElementById(
  "old-array"
).innerHTML = `<pre>${oldArrayStringified}</pre>`;
document.getElementById(
  "new-array"
).innerHTML = `<pre>${newArrayStringified}</pre>`;
