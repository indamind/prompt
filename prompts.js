/* ============================================================
   ТВОИ ПРОМПТЫ ЖИВУТ ЗДЕСЬ
   ------------------------------------------------------------
   Чтобы добавить новый промпт — скопируй один блок { ... }
   и впиши свои данные. Поля:

     title     — название карточки
     category  — категория (по ним строятся фильтры сверху)
     tags      — список тегов через запятую (для поиска), можно []
     prompt    — сам текст промпта (его копирует кнопка)
     note      — короткая подпись/комментарий (можно "" — пусто)
     image     — путь/ссылка на пример картинки (можно "" — пусто)

   Категории создаются автоматически из поля category —
   просто пиши нужное название, фильтр появится сам.
   ============================================================ */

window.PROMPTS = [
  {
    title: "Пример · кинематографичный портрет",
    category: "Соло",
    tags: ["noir", "rain", "neon"],
    prompt: "cinematic portrait, lone figure under neon rain, wet asphalt reflections, shallow depth of field, moody low-key lighting, 35mm film grain",
    note: "Это пример. Замени на свой промпт.",
    image: ""
  },
  {
    title: "Пример · сцена на двоих",
    category: "Пара",
    tags: ["interior", "warm"],
    prompt: "two characters in a dim tatami room, warm lantern light, intimate composition, soft shadows, cinematic colour grade",
    note: "",
    image: ""
  },
  {
    title: "Пример · образ / рестайл",
    category: "Образы",
    tags: ["fashion", "dark", "street"],
    prompt: "full body, dark alt streetwear, layered silhouette, oversized coat, urban backdrop at dusk, editorial fashion photography",
    note: "Сюда удобно складывать гардероб / рестайлы.",
    image: ""
  },
  {
    title: "Пример · атмосферная сцена",
    category: "Сцены",
    tags: ["mood", "city"],
    prompt: "wide establishing shot, rain-soaked city street at night, distant neon signs, volumetric fog, anamorphic lens flare",
    note: "",
    image: ""
  }
];
