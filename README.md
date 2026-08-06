# apps

Личный сайт: Кирилл Новгородцев — разработка веб-приложений, которые работают как нативные (офлайн, кроссплатформенно, без серверной инфраструктуры).

**Прод:** https://b-on-g.github.io/apps/

Дизайн — по образцу smalljs (builderui-токены: zinc + sky, Inter / EB Garamond, оранжевый акцент). Вместо формы заявок — кнопка в Telegram с подставленным сообщением.

## Dev

```bash
cd /path/to/mam && npm start
# Открыть http://localhost:9080/bog/apps/app/-/index.html
```

## Deploy

Push в `main` → GitHub Actions → GitHub Pages (если пуш-триггер не сработал — запустить деплой руками: `gh workflow run deploy.yml --repo b-on-g/apps --ref main`).
