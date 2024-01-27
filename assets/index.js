const deg = 6

const hr = document.querySelector("#hr"),
      mn = document.querySelector("#mn"),
      sc = document.querySelector("#sc")

setInterval(() => {
  let today = new Date()
  let hh = today.getHours() * 30,
      mm = today.getMinutes() * deg,
      ss = today.getSeconds() * deg

  hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`
}, 500)
