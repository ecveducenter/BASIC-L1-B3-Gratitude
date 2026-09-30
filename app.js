const questions = [
  { text: "Thanks.", answer: "Cảm ơn.", distractors: ["Xin lỗi.", "Tạm biệt.", "Không sao."] },
  { text: "Thank you.", answer: "Cảm ơn anh/chị/ông/bà.", distractors: ["Bạn khỏe không?", "Hẹn gặp lại.", "Xin hãy giúp tôi."] },
  { text: "Don’t mention it.", answer: "Không có chi.", distractors: ["Đừng làm phiền tôi.", "Đừng nhắc đến việc đó.", "Tôi không hiểu."] },
  { text: "You’re welcome.", answer: "Không có chi.", distractors: ["Bạn được chào đón.", "Bạn thật tốt.", "Tôi rất tiếc."] },
  { text: "I really appreciate this.", answer: "Tôi rất biết ơn về việc này.", distractors: ["Tôi thật sự không thích việc này.", "Tôi muốn thay đổi việc này.", "Tôi không biết việc này."] },
  { text: "Thanks for your help.", answer: "Cảm ơn bạn đã giúp đỡ.", distractors: ["Tôi cần bạn giúp đỡ.", "Đừng giúp tôi.", "Bạn cần cảm ơn tôi."] },
  { text: "Is there some way I can repay you for this?", answer: "Có cách nào tôi có thể đền đáp anh về việc này không?", distractors: ["Tôi có thể trả lại món đồ này không?", "Bạn có cần tôi giúp việc này không?", "Tôi không muốn nhận việc này."] },
  { text: "This is a big favor.", answer: "Đây là một đặc ân lớn.", distractors: ["Đây là một lỗi lớn.", "Đây là một món quà nhỏ.", "Đây không phải việc quan trọng."] },
  { text: "You’ve been a big help.", answer: "Bạn đã giúp rất nhiều.", distractors: ["Bạn đã gây nhiều rắc rối.", "Bạn cần được giúp đỡ.", "Bạn không giúp được gì."] },
  { text: "I can’t express how grateful I am.", answer: "Tôi không biết diễn tả tôi mang ơn biết chừng nào.", distractors: ["Tôi không thể nói tôi buồn thế nào.", "Tôi không biết phải cảm ơn ai.", "Tôi không muốn bày tỏ cảm xúc."] },
  { text: "I’m much obliged.", answer: "Tôi rất mang ơn.", distractors: ["Tôi rất bận rộn.", "Tôi không có nghĩa vụ.", "Tôi rất vui được gặp bạn."] },
  { text: "You don’t know how much this means to me.", answer: "Bạn không biết điều này có ý nghĩa với tôi biết chừng nào.", distractors: ["Bạn không biết tôi đang ở đâu.", "Điều này không có ý nghĩa gì cả.", "Tôi không hiểu ý bạn."] },
  { text: "You’re too kind.", answer: "Bạn thật tốt.", distractors: ["Bạn quá lạnh lùng.", "Bạn thật xấu tính.", "Bạn quá im lặng."] },
  { text: "Thank you for everything you’ve done.", answer: "Cảm ơn anh về mọi việc anh đã làm.", distractors: ["Anh chưa làm gì cả.", "Cảm ơn anh vì đã đến.", "Tôi sẽ làm mọi việc thay anh."] },
  { text: "I’m indebted to you.", answer: "Tôi rất mang ơn anh.", distractors: ["Tôi đang nợ tiền anh.", "Tôi không quen anh.", "Tôi không cần anh giúp."] }
];

const substitutionDrills = [
  { sentence: "Eric, did you finish the report?", target: "report", meaning: "Eric, anh đã làm xong bản báo cáo chưa?", options: [{ word: "assignment", meaning: "bài tập được giao về nhà" }, { word: "thesis", meaning: "luận án" }, { word: "exercise", meaning: "bài tập" }] },
  { sentence: "Yes, it’s about two blocks up and then go left.", target: "left", meaning: "Biết, đi khoảng hai dãy phố nữa rồi quẹo trái.", options: [{ word: "right", meaning: "quẹo phải" }, { word: "forward", meaning: "đi tiếp" }, { word: "straight", meaning: "đi thẳng" }] },
  { sentence: "I’m trying to find Clay Street.", target: "Street", meaning: "Tôi đang muốn tìm phố Clay.", options: [{ word: "Avenue", meaning: "đại lộ" }, { word: "Boulevard", meaning: "đại lộ" }, { word: "Road", meaning: "đường" }] },
  { sentence: "I’ll give him your thanks.", target: "thanks", meaning: "Tôi sẽ chuyển lời cảm ơn của bạn đến anh ấy.", options: [{ word: "regards", meaning: "lời hỏi thăm" }, { word: "message", meaning: "lời nhắn" }, { word: "comments", meaning: "lời nhận xét" }] },
  { sentence: "As a sign of our gratitude, you’re the new manager.", target: "gratitude", meaning: "Để tỏ lòng biết ơn của chúng tôi, chúng tôi chọn anh là trưởng phòng mới.", options: [{ word: "appreciation", meaning: "lòng tri ân" }, { word: "regard", meaning: "sự quan tâm" }, { word: "trust", meaning: "sự tin tưởng" }] },
  { sentence: "Yes, it’s about two blocks up and then go left.", target: "two blocks", meaning: "Biết, đi khoảng hai dãy phố nữa rồi quẹo trái.", options: [{ word: "kilometers", meaning: "kilômét" }, { word: "miles", meaning: "dặm" }, { word: "houses", meaning: "căn nhà" }] },
  { sentence: "I thought you might like this book.", target: "book", meaning: "Tôi nghĩ là có lẽ cô thích cuốn sách này.", options: [{ word: "CD", meaning: "đĩa CD" }, { word: "gift", meaning: "món quà" }, { word: "toy", meaning: "món đồ chơi" }] },
  { sentence: "It was tough to get it done promptly, but it was not too bad.", target: "promptly", meaning: "Thật khó để hoàn thành nó nhanh chóng, nhưng cũng không đến nỗi.", options: [{ word: "on time", meaning: "đúng hạn" }, { word: "quickly", meaning: "nhanh chóng" }, { word: "rapidly", meaning: "nhanh chóng" }] },
  { sentence: "It was tough to get it done promptly, but it was not too bad.", target: "tough", meaning: "Thật khó để hoàn thành nó nhanh chóng, nhưng cũng không đến nỗi.", options: [{ word: "difficult", meaning: "khó" }, { word: "challenging", meaning: "khó" }, { word: "demanding", meaning: "cần nỗ lực" }] },
  { sentence: "Besides, Mark did most of the cheering.", target: "cheering", meaning: "Hơn nữa, Mark cổ vũ nhiều nhất đấy.", options: [{ word: "clapping", meaning: "vỗ tay" }, { word: "yelling", meaning: "reo hò" }, { word: "encouraging", meaning: "động viên / cổ vũ" }] },
  { sentence: "She is my favorite author.", target: "author", meaning: "Bà ấy là tác giả tôi yêu thích nhất.", options: [{ word: "writer", meaning: "tác giả" }, { word: "novelist", meaning: "tiểu thuyết gia" }, { word: "poet", meaning: "nhà thơ" }] },
  { sentence: "Were there any difficulties for you?", target: "difficulties", meaning: "Có khó khăn gì đối với anh không?", options: [{ word: "problems", meaning: "vấn đề" }, { word: "complications", meaning: "phiền phức" }, { word: "obstacles", meaning: "trở ngại" }] },
  { sentence: "This is just what I wanted.", target: "wanted", meaning: "Đây đúng là cuốn tôi cần.", options: [{ word: "needed", meaning: "cần" }, { word: "desired", meaning: "mong muốn" }, { word: "required", meaning: "cần" }] },
  { sentence: "I’m glad you like it.", target: "glad", meaning: "Tôi rất vui vì cô thích cuốn sách này.", options: [{ word: "happy", meaning: "vui" }, { word: "pleased", meaning: "vui" }, { word: "satisfied", meaning: "hài lòng" }] },
  { sentence: "I couldn’t have finished this race without you and Mark encouraging me.", target: "race", meaning: "Tôi đã không thể hoàn thành cuộc đua này nếu không có bạn và Mark cổ vũ tôi.", options: [{ word: "competition", meaning: "cuộc tranh tài" }, { word: "contest", meaning: "cuộc thi" }, { word: "event", meaning: "cuộc thi đấu" }] }
];

const quizForm = document.querySelector("#quiz-form");
const progressBar = document.querySelector("#progress-bar");
const progressText = document.querySelector("#progress-text");
const statusPill = document.querySelector("#status-pill");
const resultPanel = document.querySelector("#result-panel");

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function renderQuiz() {
  quizForm.innerHTML = questions.map((question, index) => {
    const options = shuffle([question.answer, ...question.distractors]);
    return `
      <article class="question-card" data-index="${index}">
        <div class="question-top">
          <span class="question-number">${String(index + 1).padStart(2, "0")}</span>
          <p class="question-text">${question.text}</p>
        </div>
        <div class="options">
          ${options.map((option, optionIndex) => `
            <div class="option">
              <input id="q${index}-${optionIndex}" type="radio" name="question-${index}" value="${option}" />
              <label for="q${index}-${optionIndex}">
                <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>
                <span>${option}</span>
              </label>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");

  quizForm.addEventListener("change", updateProgress, { once: true });
}

function updateProgress() {
  const answered = questions.filter((_, index) => document.querySelector(`input[name="question-${index}"]:checked`)).length;
  progressText.textContent = `${answered} / ${questions.length} câu`;
  progressBar.style.width = `${(answered / questions.length) * 100}%`;
  if (answered < questions.length) {
    quizForm.addEventListener("change", updateProgress, { once: true });
  }
}

function checkAnswers() {
  let score = 0;
  let unanswered = 0;

  questions.forEach((question, index) => {
    const card = document.querySelector(`[data-index="${index}"]`);
    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    card.classList.remove("is-correct", "is-wrong");
    card.querySelector(".feedback")?.remove();

    if (!selected) {
      unanswered += 1;
      card.classList.add("is-wrong");
      addFeedback(card, "Bạn chưa chọn đáp án.", false);
    } else if (selected.value === question.answer) {
      score += 1;
      card.classList.add("is-correct");
      addFeedback(card, "Chính xác.", true);
    } else {
      card.classList.add("is-wrong");
      addFeedback(card, `Đáp án đúng: ${question.answer}`, false);
    }
  });

  const completed = unanswered === 0;
  statusPill.textContent = completed ? "Đã nộp bài" : "Còn câu chưa chọn";
  resultPanel.hidden = false;
  resultPanel.textContent = completed
    ? `Bạn đúng ${score}/${questions.length} câu. ${score === questions.length ? "Tuyệt vời!" : "Hãy xem lại những câu được đánh dấu để củng cố bài học."}`
    : `Bạn đúng ${score}/${questions.length} câu. Vui lòng chọn đáp án cho ${unanswered} câu còn lại.`;
}

function addFeedback(card, message, isCorrect) {
  const feedback = document.createElement("p");
  feedback.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
  feedback.textContent = message;
  card.append(feedback);
}

function resetQuiz() {
  renderQuiz();
  progressText.textContent = `0 / ${questions.length} câu`;
  progressBar.style.width = "0%";
  statusPill.textContent = "Chưa nộp bài";
  resultPanel.hidden = true;
  resultPanel.textContent = "";
}

function renderSentenceOrdering() {
  const orderingList = document.querySelector("#ordering-list");
  orderingList.innerHTML = substitutionDrills.map((drill, index) => {
    const words = shuffle(drill.sentence.split(" "));
    return `
      <article class="ordering-card" data-ordering-index="${index}">
        <div class="ordering-card-top">
          <span class="question-number">${String(index + 1).padStart(2, "0")}</span>
        </div>
        <div class="ordering-bank">
          ${words.map((word, wordIndex) => `<button class="ordering-word" type="button" draggable="true" data-word-index="${wordIndex}" data-word="${word}">${word}</button>`).join("")}
        </div>
        <div class="ordering-answer" data-answer></div>
        <p class="ordering-meaning">${drill.meaning}</p>
        <p class="ordering-substitutions"><strong>Từ thay thế:</strong> ${drill.options.map((option) => `<span>${option.word} (${option.meaning})</span>`).join("· ")}</p>
      </article>
    `;
  }).join("");

  const placeWord = (card, wordButton) => {
    if (wordButton.classList.contains("is-placed")) return;
    const placedWord = wordButton.cloneNode(true);
    placedWord.classList.add("is-placed");
    card.querySelector("[data-answer]").append(placedWord);
    wordButton.classList.add("is-placed");
  };

  orderingList.onclick = (event) => {
    const wordButton = event.target.closest(".ordering-word");
    if (!wordButton) return;
    const card = event.target.closest(".ordering-card");
    const answer = card.querySelector("[data-answer]");

    if (wordButton.classList.contains("is-placed")) {
      const sourceWord = card.querySelector(`.ordering-bank .ordering-word[data-word-index="${wordButton.dataset.wordIndex}"]`);
      answer.querySelector(`[data-word-index="${wordButton.dataset.wordIndex}"]`)?.remove();
      sourceWord?.classList.remove("is-placed");
      return;
    }

    placeWord(card, wordButton);
  };

  orderingList.ondragstart = (event) => {
    const wordButton = event.target.closest(".ordering-word");
    if (wordButton) event.dataTransfer.setData("text/plain", wordButton.dataset.wordIndex);
  };

  orderingList.querySelectorAll("[data-answer]").forEach((answer) => {
    answer.ondragover = (event) => event.preventDefault();
    answer.ondrop = (event) => {
      event.preventDefault();
      const card = answer.closest(".ordering-card");
      const wordButton = card.querySelector(`.ordering-word[data-word-index="${event.dataTransfer.getData("text/plain")}"]`);
      if (wordButton) placeWord(card, wordButton);
    };
  });
}

function checkOrdering() {
  let score = 0;
  substitutionDrills.forEach((drill, index) => {
    const card = document.querySelector(`[data-ordering-index="${index}"]`);
    const answerWords = [...card.querySelectorAll("[data-answer] .ordering-word")].map((word) => word.dataset.word);
    const isCorrect = answerWords.join(" ") === drill.sentence;
    card.classList.toggle("is-correct", isCorrect);
    card.classList.toggle("is-wrong", !isCorrect);
    card.querySelector(".feedback")?.remove();
    if (isCorrect) score += 1;
    const feedback = document.createElement("p");
    feedback.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
    feedback.textContent = isCorrect ? "Chính xác." : `Đáp án đúng: ${drill.sentence}`;
    card.append(feedback);
  });

  document.querySelector("#ordering-status").textContent = "Đã nộp bài";
  const result = document.querySelector("#ordering-result");
  result.hidden = false;
  result.textContent = `Bạn đúng ${score}/${substitutionDrills.length} câu.`;
}

function resetOrdering() {
  renderSentenceOrdering();
  document.querySelector("#ordering-status").textContent = "Chưa nộp bài";
  document.querySelector("#ordering-result").hidden = true;
}

document.querySelector("#check-button").addEventListener("click", checkAnswers);
document.querySelector("#reset-button").addEventListener("click", resetQuiz);
document.querySelector("#check-ordering-button").addEventListener("click", checkOrdering);
document.querySelector("#reset-ordering-button").addEventListener("click", resetOrdering);
renderQuiz();
renderSentenceOrdering();
