const plans = [
  'Отвлечь всех эффектным появлением. Если эффектное появление не сработает — назвать это отвлечением.',
  'Разделиться на две группы: я и моё отражение. Командная работа!',
  'Зайти через парадный вход. Выйти через тот, который ещё не взорвался.',
  'Импровизировать уверенно. Детали придумаем, когда начнут задавать вопросы.',
  'Сначала спасти кота. Потом выяснить, почему кот был в вентиляции.',
  'Найти злодея, объяснить ему план и сразу же передумать.',
  'План прост: красный костюм, быстрые ноги и никаких совещаний.',
  'Войти с фразы «у меня всё под контролем». Про контроль пока не уточнять.',
  'Подменить улики. Оставить записку с извинениями. Подписать своим именем.',
  'Спрятаться на виду. Если спросят, это называется психологическая война.',
  'Составить подробный список дел. Потерять список. Импровизировать.',
  'Вызвать подкрепление. Оказаться подкреплением.',
  'Отвлечь злодея монологом. Важно: монолог должен быть длиннее, чем его терпение.',
  'Зайти через окно. Если этаж первый, всё равно назвать это эффектным входом.',
  'Найти транспорт, который не задаёт вопросов. Велосипед тоже считается.',
  'Придумать кодовое имя. Использовать своё настоящее имя.',
  'Спросить дорогу у злодея. Он всё равно сейчас объясняет план.'
];
const planButton = document.querySelector('#plan-button');
const planOutput = document.querySelector('#plan-output');
let lastPlan = -1;

planButton.addEventListener('click', () => {
  let nextPlan = Math.floor(Math.random() * plans.length);
  if (plans.length > 1 && nextPlan === lastPlan) nextPlan = (nextPlan + 1) % plans.length;
  lastPlan = nextPlan;
  planOutput.textContent = plans[nextPlan];
  planOutput.classList.remove('plan-pop');
  requestAnimationFrame(() => planOutput.classList.add('plan-pop'));
});

const photoDialog = document.querySelector('.photo-dialog');
const dialogImage = document.querySelector('.dialog-image');
const dialogCaption = document.querySelector('.dialog-caption');

document.querySelectorAll('.photo-open').forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    dialogImage.src = button.dataset.full;
    dialogImage.alt = image.alt;
    dialogCaption.textContent = button.dataset.caption;
    photoDialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => photoDialog.close());
photoDialog.addEventListener('click', (event) => {
  if (event.target === photoDialog) photoDialog.close();
});
