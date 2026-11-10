# MWS AI Cowork — регистрация

Одностраничная форма регистрации: email, имя, фамилия и компания. На мобильном экране сразу отображается форма. Фирменные шрифты: MTS Wide, MTS Text и MTS Compact.

## Публикация

GitHub Pages: https://katokuneva-tech.github.io/mws-ai-cowork-registration/

Изменения в `main` автоматически собираются и публикуются через GitHub Actions. Настройка Pages: Source → GitHub Actions.

## Разработка

Node.js 22.13+; `npm ci`, `npm run dev`, `npm run build`.

## Сохранение заявок

Форма отправляет JSON POST на `https://mws-ai-cowork-register.littleclock.chatgpt.site/api/register`. Сервер сохраняет заявку и передаёт её в настроенную Google Таблицу. Повторные заявки по email не создают дубликаты. CORS разрешён только для origin `https://katokuneva-tech.github.io`.

В этом репозитории находятся только публичные файлы сайта. Google Apps Script, ключи интеграции, база заявок и администрирование остаются на сервере.

Логотип, иллюстрация и шрифты взяты с https://mts.ai/product/mws-ai-cowork/ по запросу владельца сайта.
