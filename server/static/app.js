const consoleEl = document.getElementById("console");
const memoryList = document.getElementById("memoryList");
const statusRuntime = document.getElementById("statusRuntime");
const statusLast = document.getElementById("statusLast");

function log(line) {
  const ts = new Date().toLocaleTimeString();
  consoleEl.textContent += `[${ts}] ${line}\n`;
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

function renderMemory(items) {
  memoryList.innerHTML = "";
  if (!items || items.length === 0) {
    memoryList.innerHTML = `<div class="memItem"><div class="memRole">empty</div><div class="memContent">No memory yet.</div></div>`;
    return;
  }

  items.slice().reverse().forEach((m) => {
    const div = document.createElement("div");
    div.className = "memItem";
    div.innerHTML = `
      <div class="memRole">${m.role} • ${m.timestamp}</div>
      <div class="memContent">${escapeHtml(m.content)}</div>
    `;
    memoryList.appendChild(div);
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function ping() {
  try {
    const res = await fetch("/api/ping");
    const data = await res.json();
    statusRuntime.textContent = data.status || "Online";
    statusLast.textContent = "Ping OK";
    log("Ping -> OK");
  } catch (e) {
    statusRuntime.textContent = "Offline";
    statusLast.textContent = "Ping failed";
    log("Ping -> FAILED (server not running)");
  }
}

async function fetchMemory() {
  try {
    const res = await fetch("/api/memory");
    const data = await res.json();
    renderMemory(data.items || []);
    statusLast.textContent = "Memory fetched";
    log(`Memory -> ${data.items?.length || 0} items`);
  } catch (e) {
    log("Memory -> FAILED (server not running)");
  }
}

document.getElementById("btnPing").addEventListener("click", ping);
document.getElementById("btnMemory").addEventListener("click", fetchMemory);

// Boot
log("Pumpin Dashboard loaded");
renderMemory([]);
ping();
