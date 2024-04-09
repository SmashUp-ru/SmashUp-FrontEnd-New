# Фронтенд [smashup.ru](https://smashup.ru/)

## Документация

Документация к бэкенду доступна [тут](https://github.com/LeonidMem/SmashUp-FrontEnd/wiki)

## Дизайн

Макет в Figma доступен [тут](https://www.figma.com/file/rRag5NIqwib0N69njQFTbK/SmashUp-2.0?node-id=139%3A1473)

## Первые шаги

Для начала установите все зависимости

```bash
yarn install
```

Далее, для работы OAuth через ВКонтакте, нужно создать .env файл и заполнить его, как показано
в [.env.example](.env.example)

```env
NEXT_PUBLIC_HOSTNAME=http://localhost:80

NEXT_PUBLIC_VK_APP_ID=66666666
NEXT_PUBLIC_VK_REDIRECT_URL=$NEXT_PUBLIC_HOSTNAME/redirect
```

* NEXT_PUBLIC_HOSTNAME - доменное имя
* NEXT_PUBLIC_VK_APP_ID - айди созданного приложения ВКонтакте, можно
  посмотреть [тут](https://id.vk.com/about/business/go)
* NEXT_PUBLIC_VK_REDIRECT_URL - путь для редиректа после авторизации, должен совпадать с указанным в приложении
  ВКонтакте, можно посмотреть [тут](https://id.vk.com/about/business/go)

После установки зависимостей и заполнения .env файла запустите дев. сервер

```bash
yarn run dev
```

Откройте [http://localhost:80](http://localhost:80) чтобы увидеть результат.
