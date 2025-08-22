const COURSES = [
  {
    code: "3TIK40033",
    name: "Manajemen Proyek TI",
    sks: 2,
    class: "A",
    block: [1],
    lecturer: "Harvei Desmon Hutahaean, S.Kom., M.Kom.",
    sessions: [
      { day: "Senin", start: "08:00", end: "09:40", room: "89.03.01.A" },
      { day: "Rabu",  start: "08:00", end: "09:40", room: "89.03.01.A" },
    ],
  },
  {
    code: "3TIK40036",
    name: "Cloud Computing",
    sks: 2,
    class: "A",
    block: [1],
    lecturer: "Dr. Janner Simarmata, S.T., M.Kom.",
    sessions: [
      { day: "Senin", start: "16:00", end: "17:40", room: "Lab_Komputer_B.1" },
      { day: "Rabu",  start: "16:00", end: "17:40", room: "Lab_Komputer_B.1" },
    ],
  },
  {
    code: "3TIK40037",
    name: "Internet of Things (IoT)",
    sks: 3,
    class: "A",
    block: [1],
    lecturer: "Tansa Trisna Astono Putri, S.Kom., M.T.I., Ph.D.",
    sessions: [
      { day: "Senin", start: "09:41", end: "11:20", room: "Lab_Multi_Media" },
      { day: "Rabu",  start: "09:41", end: "11:20", room: "Lab_Multi_Media" },
    ],
  },
  {
    code: "1MKU40009",
    name: "ISBD",
    sks: 2,
    class: "A",
    block: [2],
    lecturer: "Sry Lestari Samosir, S.Pd., M.Sos.",
    sessions: [
      { day: "Selasa", start: "11:21", end: "13:00", room: "12.02.10A.1" },
      { day: "Kamis",  start: "11:21", end: "13:00", room: "12.02.10A.1" },
    ],
  },
  {
    code: "3TIK40031",
    name: "Micro Teaching",
    sks: 2,
    class: "A",
    block: [2],
    lecturer: "Prof. Dr. Muhammad Amin, S.T., M.Pd.",
    sessions: [
      { day: "Senin", start: "09:41", end: "11:20", room: "89.03.01.A.1" },
      { day: "Rabu",  start: "09:41", end: "11:20", room: "89.03.01.A.1" },
    ],
  },
  {
    code: "3TIK40032",
    name: "Pemodelan 3 Dimensi",
    sks: 2,
    class: "A",
    block: [2],
    lecturer: "Bagoes Maulana, S.Kom., M.Kom.",
    sessions: [
      { day: "Senin", start: "11:21", end: "13:00", room: "Lab_Multi_Media" },
      { day: "Rabu",  start: "11:21", end: "13:00", room: "Lab_Multi_Media" },
    ],
  },
  {
    code: "3TIK40035",
    name: "Sistem Pendukung Keputusan",
    sks: 2,
    class: "A",
    block: [2],
    lecturer: "Harvei Desmon Hutahaean, S.Kom., M.Kom.",
    sessions: [
      { day: "Selasa", start: "16:00", end: "17:40", room: "12.02.12A.2" },
      { day: "Kamis",  start: "16:00", end: "17:40", room: "12.02.12A.2" },
    ],
  },
  {
    code: "3TIK40038",
    name: "Kecerdasan Buatan (AI)",
    sks: 3,
    class: "A",
    block: [2],
    lecturer: "Fahmy Syahputra, S.Kom., M.Kom.",
    sessions: [
      { day: "Senin", start: "08:00", end: "09:40", room: "Lab_Multi_Media.2" },
      { day: "Rabu",  start: "08:00", end: "09:40", room: "Lab_Multi_Media.2" },
    ],
  },
  {
    code: "3TIK40034",
    name: "Multimedia",
    sks: 3,
    class: "A",
    block: [1,2], 
    lecturer: "Fahmy Syahputra, S.Kom., M.Kom.",
    sessions: [
      { day: "Jum'at", start: "08:00", end: "09:40", room: "Lab_Multi_Media" },
    ],
  },
];

const DAY_ORDER = ["Senin","Selasa","Rabu","Kamis","Jum'at"];
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

// Helpers
function timeToMinutes(t){ const [H,M] = t.split(":").map(Number); return H*60 + M; }

function courseBadge(blocks){
  if(!Array.isArray(blocks)) blocks = [blocks];
  return blocks.map(b => {
    if(b === 1) return '<span class="badge b1">Blok 1</span>';
    if(b === 2) return '<span class="badge b2">Blok 2</span>';
    return '<span class="badge bx">N/A</span>';
  }).join(" ");
}

function renderWeek(){
  // clear
  $$(".day-col .slots").forEach(el => el.innerHTML = "");

  const block = $("#blockFilter").value;
  const day = $("#dayFilter").value;
  const search = $("#searchInput").value.trim().toLowerCase();

  const matches = COURSES.filter(c => {
    const blockOk = block === "all" ? true : c.block.includes(Number(block));
    const searchText = [c.name,c.lecturer,c.code, ...c.sessions.map(s => s.room)].join(" ").toLowerCase();
    const searchOk = !search || searchText.includes(search);
    return blockOk && searchOk;
  });

  // For each day, collect sessions
  DAY_ORDER.forEach(d => {
    const col = $(`.day-col[data-day="${d}"] .slots`);
    const items = [];
    matches.forEach(c => {
      c.sessions.forEach(s => {
        if(day !== "all" && s.day !== day) return;
        if(s.day === d){
          items.push({ ...s, course:c });
        }
      });
    });
    // sort by time
    items.sort((a,b) => timeToMinutes(a.start) - timeToMinutes(b.start));
    // render
    col.innerHTML = items.map(({course, start, end, room}) => `
      <article class="card">
        <div class="top">
          <span class="tag">${course.code} · ${course.class}</span>
          ${courseBadge(course.block)}
        </div>
        <div class="title">${course.name}</div>
        <div class="meta">
          <span class="pill time">🕒 ${start}–${end}</span>
          <span class="pill room">📍 ${room}</span>
          <span class="pill sks">🎓 ${course.sks} SKS</span>
        </div>
        <div class="meta" style="margin-top:8px;">
          <span class="pill lect">👨‍🏫 ${course.lecturer}</span>
        </div>
      </article>
    `).join("") || `<div class="meta" style="opacity:.6;">—</div>`;
  });
}

function renderList(){
  const block = $("#blockFilter").value;
  const day = $("#dayFilter").value;
  const search = $("#searchInput").value.trim().toLowerCase();

  const container = $("#coursesList");
  container.innerHTML = "";

  const matches = COURSES
    .filter(c => (block === "all" ? true : String(c.block) === block))
    .filter(c => {
      const searchText = [c.name,c.lecturer,c.code, ...c.sessions.map(s => s.room)].join(" ").toLowerCase();
      const hasDay = day === "all" ? true : c.sessions.some(s => s.day === day);
      const searchOk = !search || searchText.includes(search);
      return hasDay && searchOk;
    });

  matches.sort((a,b) => a.name.localeCompare(b.name));

  container.innerHTML = matches.map(c => `
    <article class="course-card">
      <div class="top" style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px;">
        <div>
          <h4>${c.name}</h4>
          <div class="meta"><span class="pill">${c.code} · ${c.class} · ${c.sks} SKS</span></div>
        </div>
        ${courseBadge(c.block)}
      </div>
      <div class="sessions">
        ${c.sessions
          .filter(s => day === "all" ? true : s.day === day)
          .sort((a,b) => timeToMinutes(a.start) - timeToMinutes(b.start))
          .map(s => `<div class="session"><span class="dot"></span> <strong>${s.day}</strong> · ${s.start}–${s.end} · ${s.room}</div>`)
          .join("")}
      </div>
      <div class="meta" style="margin-top:8px;"><span class="pill lect">👨‍🏫 ${c.lecturer}</span></div>
    </article>
  `).join("") || `<div class="meta" style="opacity:.6;">Tidak ada mata kuliah.</div>`;
}

function syncViews(){
  renderWeek();
  renderList();
}

// UI Wiring
window.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  // Filters
  ["blockFilter","dayFilter","searchInput"].forEach(id => {
    $(id.startsWith("#") ? id : "#"+id).addEventListener("input", syncViews);
  });

  // Layout toggle
  const viewWeekBtn = $("#viewWeek");
  const viewListBtn = $("#viewList");
  viewWeekBtn.addEventListener("click", () => {
    viewWeekBtn.classList.add("active");
    viewListBtn.classList.remove("active");
    $("#weekView").classList.remove("hidden");
    $("#listView").classList.add("hidden");
  });
  viewListBtn.addEventListener("click", () => {
    viewListBtn.classList.add("active");
    viewWeekBtn.classList.remove("active");
    $("#listView").classList.remove("hidden");
    $("#weekView").classList.add("hidden");
  });

  // Initial render
  syncViews();
});
