/* Theme Toggle */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
};

/* Category Switch */
function showCategory(cat) {
  document.querySelectorAll(".category").forEach(c => c.classList.remove("active"));
  document.getElementById(cat).classList.add("active");
}

/* Data */
const mcuData = [
  {
    name: "ESP32",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/ESP32_Dev_Module.jpg",
    desc: "บอร์ด IoT WiFi + Bluetooth"
  },
  {
    name: "Arduino Uno",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg",
    desc: "บอร์ดยอดนิยมสำหรับผู้เริ่มต้น"
  }
];

const sensorData = [
  {
    name: "Ultrasonic",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/HC-SR04.jpg",
    desc: "วัดระยะด้วยคลื่นเสียง"
  },
  {
    name: "IR Sensor",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Infrared_Sensor_Module.jpg",
    desc: "ตรวจจับวัตถุด้วยแสงอินฟราเรด"
  }
];

/* Create Cards */
function createCards(data, container) {
  container.innerHTML = "";
  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.img}">
        <div class="info">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
    `;
  });
}

createCards(mcuData, document.querySelector("#mcu .grid"));
createCards(sensorData, document.querySelector("#sensor .grid"));

/* Cursor Effect */
const canvas = document.getElementById("cursorCanvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

window.addEventListener("mousemove", e => {
  particles.push({
    x: e.clientX,
    y: e.clientY,
    life: 20
  });
});

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,i) => {
    ctx.beginPath();
    ctx.arc(p.x,p.y,5,0,Math.PI*2);
    ctx.fillStyle = "rgba(79,70,229,0.5)";
    ctx.fill();
    p.life--;
    if(p.life<=0) particles.splice(i,1);
  });
  requestAnimationFrame(animate);
}
animate();
