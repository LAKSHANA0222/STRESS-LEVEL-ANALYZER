document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const val = document.querySelector(`input[name=q${i}]:checked`).value;
    score += parseInt(val);
  }

  const name = localStorage.getItem("entry.1681885843");
  const email = localStorage.getItem("entry.159947109");

  let resultText = "";
  let tips = "";

  if (score <= 15) {
    resultText = "🟢 Low Stress (0–15): You're doing great!";
    tips = `
      ✅ Keep a routine of regular sleep, physical activity, and breaks.<br>
      ✅ Continue engaging in hobbies and social activities.<br>
      ✅ Practice gratitude daily.<br>
      ❌ Don’t ignore small stress signals—prevention is key!<br><br>
      🎧 Songs:<br>
      “Weightless” – Marconi Union<br>
      “Better Together” – Jack Johnson<br>
      “Here Comes the Sun” – The Beatles
    `;
  } else if (score <= 30) {
    resultText = "🟡 Moderate Stress (16–30): You could use some relaxation.";
    tips = `
      ✅ Try 5–10 minutes of deep breathing or meditation.<br>
      ✅ Take short walks or do yoga.<br>
      ✅ Limit screen time before bed.<br>
      ❌ Don’t rely on caffeine or skip meals.<br><br>
      🎧 Songs:<br>
      “Let Her Go” – Passenger<br>
      “Sunflower” – Post Malone<br>
      “Fix You” – Coldplay
    `;
  } else if (score <= 45) {
    resultText = "🟠 High Stress (31–45): Take control before it gets worse.";
    tips = `
      ✅ Journal your thoughts daily.<br>
      ✅ Talk to a friend or counselor.<br>
      ✅ Schedule breaks and avoid multitasking.<br>
      ❌ Don’t isolate or overwork.<br><br>
      🎧 Songs:<br>
      “River Flows in You” – Yiruma<br>
      “Someone Like You” – Adele<br>
      “Ocean Eyes” – Billie Eilish
    `;
  } else {
    resultText = "🔴 Very High Stress (46+): Prioritize your mental health.";
    tips = `
      ✅ Seek help from a mental health professional.<br>
      ✅ Break big tasks into small steps.<br>
      ✅ Consider a digital detox.<br>
      ❌ Don’t ignore this level of stress.<br><br>
      🎧 Songs:<br>
      “Weightless” – Marconi Union<br>
      “Clair de Lune” – Debussy<br>
      “Nocturne in E-flat Major” – Chopin
    `;
  }

  // Send to Google Form
  const params = new URLSearchParams();
  params.append("entry.1681885843", name);
  params.append("entry.159947109", email);
  params.append("entry.1411718699", resultText);

  fetch("https://docs.google.com/forms/d/e/1FAIpQLSfVziIwFC6Uco0hebu-DvFSeYoJx5Xi5qhr7HPyAxG2TsxgwA/formResponse", {
    method: "POST",
    mode: "no-cors",
    body: params
  });

  // Store result in localStorage for result.html
  localStorage.setItem("resultText", resultText);
  localStorage.setItem("tips", tips);

  // Redirect to result page
  window.location.href = "result.html";
});
