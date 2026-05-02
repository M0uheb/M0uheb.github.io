// ============================================
//   EDIT ONLY THIS SECTION — your info here
// ============================================

var MY_INFO = {
  name:     "Mouheb Mourek",
  role:     "Computer Engineer Student",
  location: "Tunis, Tunisia",
  status:   "Still Studying",
  about:    "I'm a computer engineering student and beginner CTF player. I enjoy Networking and learning new technologies every day.",

  education: [
    { degree: "Baccalaureat en Science Informatique (Mention Tres Bien)", school: "Lycee l'Aouina",                          year: "2024 - 2025" },
    { degree: "Licence Ingenierie Reseau et Systeme",                     school: "Institut Superieur d'Informatique Ariana", year: "2024"        }
  ],

  languages: [
    { name: "Arabic",  level: "Native"       },
    { name: "French",  level: "Fluent"       },
    { name: "English", level: "Professional" }
  ],

  skills: ["JavaScript", "C", "Python", "MySQL", "Git"],

  projects: [
    { name: "Project Alpha", desc: "A cool web app", link: "github.com/M0uheb/alpha" },
    { name: "Project Beta",  desc: "A mobile app",   link: "github.com/M0uheb/beta"  },
    { name: "Project Gamma", desc: "An API I built", link: "github.com/M0uheb/gamma" }
  ],

  contact: {
    email:    "itzmouheb69@gmail.com",
    github:   "github.com/M0uheb",
    linkedin: "linkedin.com/in/mouheb-mourek"
  }
};

// ============================================
//   STOP — do not touch anything below this
// ============================================

var output = document.getElementById("output");
var input  = document.getElementById("cmd");

function makeSkills() {
  var html = "";
  for (var i = 0; i < MY_INFO.skills.length; i++) {
    html += "<span class='tag'>" + MY_INFO.skills[i] + "</span>";
  }
  return html;
}

function makeEducation() {
  var html = "";
  for (var i = 0; i < MY_INFO.education.length; i++) {
    var e = MY_INFO.education[i];
    html += "<span class='cyan'>[0" + (i + 1) + "]</span> ";
    html += "<span class='pink'>" + e.degree + "</span><br>";
    html += "&nbsp;&nbsp;&nbsp;&nbsp;<span class='gray'>" + e.school + " — " + e.year + "</span>";
    if (i < MY_INFO.education.length - 1) { html += "<br><br>"; }
  }
  return html;
}

function makeLanguages() {
  var html = "";
  for (var i = 0; i < MY_INFO.languages.length; i++) {
    var l = MY_INFO.languages[i];
    html += "<span class='cyan'>" + l.name + ":</span> ";
    html += "<span class='pink'>" + l.level + "</span><br>";
  }
  return html;
}

function makeProjects() {
  var html = "";
  for (var i = 0; i < MY_INFO.projects.length; i++) {
    var p = MY_INFO.projects[i];
    html += "<span class='cyan'>[0" + (i + 1) + "]</span> ";
    html += "<span class='pink'>" + p.name + "</span> — " + p.desc + "<br>";
    html += "&nbsp;&nbsp;&nbsp;&nbsp;<span class='gray'>" + p.link + "</span>";
    if (i < MY_INFO.projects.length - 1) { html += "<br><br>"; }
  }
  return html;
}

function makeDate() {
  var now = new Date();
  var dateStr = now.toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  var timeStr = now.toLocaleTimeString();
  return "<span class='cyan'>date:</span> <span class='pink'>" + dateStr + "</span><br>" +
         "<span class='cyan'>time:</span> <span class='pink'>" + timeStr + "</span>";
}

var responses = {
  help:
    "<span class='cyan'>available commands:</span><br><br>" +
    "<span class='pink'>whoami</span>     — who I am<br>" +
    "<span class='pink'>about</span>      — about me<br>" +
    "<span class='pink'>education</span>  — my studies<br>" +
    "<span class='pink'>languages</span>  — languages I speak<br>" +
    "<span class='pink'>skills</span>     — tech stack<br>" +
    "<span class='pink'>projects</span>   — my work<br>" +
    "<span class='pink'>contact</span>    — get in touch<br>" +
    "<span class='pink'>date</span>       — current date and time<br>" +
    "<span class='pink'>pwd</span>        — current directory<br>" +
    "<span class='pink'>clear</span>      — clear the terminal",

  whoami:
    "<span class='cyan'>name:</span>     " + MY_INFO.name     + "<br>" +
    "<span class='cyan'>role:</span>     " + MY_INFO.role     + "<br>" +
    "<span class='cyan'>based:</span>    " + MY_INFO.location + "<br>" +
    "<span class='cyan'>status:</span>   <span class='yellow'>" + MY_INFO.status + "</span>",

  about:
    "<span class='cyan'>about:</span><br>" +
    "<span class='gray'>" + MY_INFO.about + "</span>",

  education:  makeEducation(),
  languages:  makeLanguages(),
  skills:     makeSkills(),
  projects:   makeProjects(),

  contact:
    "<span class='cyan'>email:</span>    " + MY_INFO.contact.email    + "<br>" +
    "<span class='cyan'>github:</span>   " + MY_INFO.contact.github   + "<br>" +
    "<span class='cyan'>linkedin:</span> " + MY_INFO.contact.linkedin,

  date: makeDate(),

  pwd:
    "<span class='gray'>/home/mouheb-mourek/portfolio</span>"
};

function printLine(cmd, reply) {
  output.innerHTML +=
    "<div class='cmd-line'><span class='p'>&gt;_</span> <span class='c'>" + cmd + "</span></div>" +
    "<div class='output-block'>" + reply + "</div>";
  output.scrollTop = output.scrollHeight;
}

input.addEventListener("keydown", function(e) {
  if (e.key !== "Enter") { return; }
  var val = input.value.trim().toLowerCase();
  input.value = "";
  if (val === "") { return; }
  if (val === "clear") { output.innerHTML = ""; return; }

  var reply;
  if (responses[val]) {
    reply = responses[val];
  } else {
    reply = "<span style='color:#ff3355'>command not found: <span class='pink'>" + val + "</span> — type <span class='pink'>help</span></span>";
  }

  printLine(val, reply);
});
