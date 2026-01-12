async function checkResult() {
  const reg = document.getElementById("reg").value;

  const res = await fetch("/api/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ regNumber: reg })
  });

  const data = await res.json();

  if (data.success) {
    sessionStorage.setItem("token", data.token);
    window.location.href = "/result.html";
  } else {
    alert(data.message);
  }
}
