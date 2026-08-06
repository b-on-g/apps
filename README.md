# apps

Личный сайт: Кирилл Новгородцев — разработка веб-приложений, которые работают как нативные (офлайн, кроссплатформенно, без серверной инфраструктуры).

**Прод:** https://b-on-g.github.io/apps/

Заявки с формы падают в Гипер Базу (реестр feedback2, `feedback_id: apps`) — отвечать под своим аккаунтом прямо в форме на проде.

## Dev

```bash
cd /path/to/mam && npm start
# Открыть http://localhost:9080/bog/apps/app/-/test.html
```

## Deploy

Push в `main` → GitHub Actions → GitHub Pages.
