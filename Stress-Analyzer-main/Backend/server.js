const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// POST route for quiz result
app.post('/submit-stress', (req, res) => {
  const { score } = req.body;

  let advice = '';
  if (score < 5) {
    advice = "You're doing great! Keep it up!";
  } else if (score < 10) {
    advice = "You're a little stressed. Try to take breaks and relax.";
  } else {
    advice = "You seem very stressed. Consider talking to someone or getting more rest.";
  }

  res.json({ message: 'Score received', advice });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
