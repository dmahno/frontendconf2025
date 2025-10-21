## Версии

- Node.js — v20.9.0
- npm — v10.1.0

Для переключения на нужную версию в терминале введите команду:

\`\`\`bash
nvm use
\`\`\`

Если \`nvm\` у вас не установлен, следуйте инструкции по установке ниже.

## Запуск проекта

\`\`\`bash
npm run dev
\`\`\`

## Описание команд в проекте

| Скрипт            | Назначение                                               |
| ----------------- | -------------------------------------------------------- |
| \`dev\`           | Запуск Vite‑dev‑сервера (\`localhost:3000\`).            |
| \`build\`         | Production‑сборка через \`vite build\`.                  |
| \`preview\`       | Локальный просмотр собранного бандла (\`vite preview\`). |
| \`test\`          | Запуск тестов с Vitest.                                  |
| \`test:coverage\` | Тесты + отчёт покрытия кода (V8).                        |
| \`test:ui\`       | Watch‑режим Vitest с TUI‑интерфейсом.                    |
| \`lint\`          | Проверка ESLint для \`src/\*_/_.{ts,tsx}\`.              |
| \`lint:fix\`      | ESLint fix                                               |
| \`prettier\`      | Форматирование кода стилем \`@pochta/prettier-config\`.  |
| \`release\`       | Семантический релиз через \`commit-and-tag-version\`.    |
| \`setup:ci\`      | \`npm ci\` — установка зависимостей в CI.                |

## В проекте используется

- **Vite 5** — сборщик проекта
- **Redux Toolkit 2** — state‑менеджер
- **Vitest 2** + Testing‑Library — юнит‑тестирование
- **Husky** — git‑хуки, **Commitlint** — контроль commit‑msg
- **TypeScript 5**
- **Feature Sliced Design**
- **React 18**
- **Styled‑components 5**

## Дополнительно

У проекта настроен стартовый ci/cd со следующими jobs:

- unit test
- sonar
- dependency‑check

## Установка nvm

## Установка nvm на Linux или macOS

\`\`\`bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc

```

3. Проверьте, что nvm установлен, выполнив команду:

```

nvm --version

```

4. Теперь можно использовать команду nvm для установки и управления версиями Node.js. Например, чтобы установить последнюю стабильную версию Node.js, выполните:

```

nvm install stable

```

# Примечание

Dependency-check ругается на критические замечания обнаруженные в библиотеке opener@1.5.2, которая устанавливается из webpack-bundle-analyzer. Т.к webpack-bundle-analyzer - это dev заивисимость, добавьте данные замечания в исключения.

```
