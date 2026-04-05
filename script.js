function selectPlan(amount) {

  let points;

  if (amount == 100) points = 29;
  else if (amount == 200) points = 49;
  else if (amount == 500) points = 99;
  else if (amount == 1000) points = 199;
  else if (amount == 1500) points = 289;
  else if (amount == 2000) points = 379;

  localStorage.setItem("amount", amount);
  localStorage.setItem("points", points);

  window.location.href = "form.html";
}

function customPlan() {
  let amount = document.getElementById("customAmount").value;

  if (!amount || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  let points = amount / 5;

  localStorage.setItem("amount", amount);
  localStorage.setItem("points", points);

  window.location.href = "form.html";
}