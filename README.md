# apps

Личный сайт: Кирилл Новгородцев — разработка веб-приложений, которые работают как нативные (офлайн, кроссплатформенно, без серверной инфраструктуры).

**Прод:** https://b-on-g.github.io/apps/

Дизайн — по образцу smalljs (builderui-токены: zinc + sky, Inter / EB Garamond, оранжевый акцент). Вместо формы заявок — кнопка в Telegram с подставленным сообщением.

## Dev

```bash
cd /path/to/mam && npm start
# Открыть http://localhost:9080/bog/apps/app/-/index.html
```

## OG-картинка

Превью для соцсетей — `assets/og.png` (1200×630), путь в мете абсолютный:
`https://b-on-g.github.io/apps/bog/apps/assets/og.png`.

Исходник картинки — `og.html`, вёрстка теми же шрифтами и токенами, что и сайт.
Пересобрать после правки текста:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
	--headless=old --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
	--window-size=1200,630 --virtual-time-budget=6000 \
	--user-data-dir=/tmp/og-chrome --screenshot=bog/apps/assets/og.png \
	'http://127.0.0.1:9080/bog/apps/og.html'
```

## Deploy

Push в `main` → GitHub Actions → GitHub Pages (если пуш-триггер не сработал — запустить деплой руками: `gh workflow run deploy.yml --repo b-on-g/apps --ref main`).
