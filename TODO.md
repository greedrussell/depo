## NextJS SSR project МАКСИМАЛЬНЫЕ НАСТРОЙКИ

1. Работа со стилями
- next-purgecss, основная проблема вызникает из-за модульного css
- добавить валидацию для формата файлов на .mobule.styl для модульных и .styl для глобальных
- примеры работ со стилями есть в проекте youdo

2. Plugins
- next-inferno подробная инфа в официальном разделе next.js плагины
- next-optimized-images подробная инфа в официальном разделе next.js плагины
- next-pino подробная инфа в официальном разделе next.js плагины

3. Проверка фронтенд ядра при деплое. Условно выкатить версию с внедренным плагином,
   на оптимизацию приложения и посмотреть ускорилась ли текущая версия
4. [Прикольная штука про HTTP/2 Server Push](https://habr.com/ru/company/badoo/blog/331216/)

## Сноска
- Я сначала frontend, и только потом продукт
- Для меня важно время с близкими
- Для меня важно мое здоровье и тело

## Этап 5. С 25 июля - 8 августа (Запуск в банке)
1. Проверить деплой

## Этап 6. С 29 июня - 11 июля
1. Проработать каждую секцию главной страницы
   - Дизайн
     - Главная страница
      SubMenuComponent получить элементы меню с апихи (getStaticProps)
     - Страница каталога
       - использовать getServerSideProps так как при смене фильтра происходит обновление
2. advanced раздел прочитать, чтобы получить больше информации о разделе
   - [Custom server](https://nextjs.org/docs/advanced-features/custom-server)
   - [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization)
   - [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode)
3. typescript
   - [как определять алиасы пути](https://nextjs.org/docs/advanced-features/module-path-aliases)
4. Роутинг
   - [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) прочитать только про getStaticPaths
5. Билд приложения и его деплой (смогу запустить в банке)
6. [Разделение приложения на множественные зоны](https://nextjs.org/docs/advanced-features/multi-zones) (смогу запустить в банке)

## Этап 7.
0. Написать бек чтобы получить 404 и 500 ошибки. Отработка кастомных ошибок
0. AMP Support почитать что это, один знакомый фронт сказал, это очень важно
1. Production and development доступ к апи и разделение кода посмотреть next.config.js у youdo
   - написать простенький апи crud
   - Неплохо бы потыкать
     - Взаимодействие клиент сервер
     - next config - Runtime Configuration для настройки клиентско серверного рендера
     - HTTP
       - Disabling ETag Generation
       - x-powered-by раздел для безопастности
2. Оптимизация приложения
   - [Early flush](https://www.willhastings.me/posts/speeding-up-page-load-with-early-flush/)
   - [Быстрый SSR](https://medium.com/@reactcomponentcaching/speedier-server-side-rendering-in-react-16-with-component-caching-e8aa677929b1)
     предлагает две либы чтобы кешировать компоненты при серверном рендеринге используя
     renderToNodeStream и renderToStaticNodeStream. А надо ли мне это? Провести тест на
     производительность приложения
   - [Динамический импорт](https://nextjs.org/docs/advanced-features/dynamic-import)
   - [Реакт советы по разбиению кода](https://loadable-components.com/docs/code-splitting/)
   - [Метрики для оптимизация отображения](https://nextjs.org/docs/advanced-features/measuring-performance)
   - [Вроде как оптимизация от гугла](https://web.dev/vitals/)
   - Производительность приложения
     - [TTFB (Time to First Byte, время до первого байта) — время между кликом по ссылке и поступлением первого фрагмента содержимого](https://en.wikipedia.org/wiki/Time_to_first_byte) если по простому это время когда сервер хоть что-то вернул пользователю
       - Расположение сервера влияет на TTFB если целевая аудитория в россии, то и сервер должен быть в России
       - чтение файлов, таких как css, js, images влияет на TTFB
       - Запросы к базам данных тоже жрет TTFB
       - Дешёвый хостинг. Хостинг должен удовлетворять нуждам приложения
       - DDoS-атаки, высокая нагрузка на проект. Предусматреть и избежать их возможности
     - [FP (First Paint, первая отрисовка) — первый случай, когда пользователю становится виден любой пиксель и FCP (First Contentful Paint, первая содержательная отрисовка) — время первого отображения запрашиваемого содержимого (например, статьи)](https://web.dev/user-centric-performance-metrics/#first_paint_and_first_contentful_paint)
       - Когда появились визуальные элементы сайта, навигация и тд
       - Как быстро подгрузились JS компоненты
       - Может ли пользователь взаимодействовать со страницей
       - Плавность состояния компонентов
     - [TTI (Time To Interactive, время до интерактивности) — момент времени, в который страница становится интерактивной (закрепляются все события и т. д.)](https://web.dev/interactive/)
   - Service Worker для оптимизации как применить
   - [проверка оптимизации для гугла](https://search.google.com/test/mobile-friendly)
3. Оптимизация шрифтов
   - [Оптимизация шрифтов](https://css-live.ru/articles/ischerpyvayushhee-rukovodstvo-po-strategiyam-zagruzki-veb-shriftov.html#fout-class)
   - [<link rel="preload">](https://www.zachleat.com/web/preload/)