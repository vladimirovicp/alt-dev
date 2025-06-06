const admcMenu = [
    {text: '--Проекты', link: '/projects/'},
    {text: '-Проекты альт Домен', link: '/projects/alt-domain/'},
    {text: 'ADMC',},
    { text: 'Описание проекта', link: '/projects/alt-domain/admc/'},
    { text: 'Лицензия', link: '/projects/alt-domain/admc/license/'},
    { text: 'Релизы', link: '/projects/alt-domain/admc/releases/'},
    { text: 'Исходники', link: '/projects/alt-domain/admc/link-to-sources/'},
    { text: 'Документация', link: '/projects/alt-domain/admc/documentation/'},
    { text: 'Полезная информация', link: '/projects/alt-domain/admc/useful-information/'},
    { text: 'Участники проекта', link: '/projects/alt-domain/admc/project-participants/'},
    { text: 'Changelog', link: '/projects/alt-domain/admc/changelog/'},
];

const gpupdate = [
    {text: '--Проекты', link: '/projects/'},
    {text: '-Проекты альт Домен', link: '/projects/alt-domain/'},
    {text: 'gpupdate',},
    { text: 'Описание проекта', link: '/projects/alt-domain/gpupdate/'},
    { text: 'Лицензия', link: '/projects/alt-domain/gpupdate/license/'},
    { text: 'Релизы', link: '/projects/alt-domain/gpupdate/releases/'},
    { text: 'Исходники', link: '/projects/alt-domain/gpupdate/link-to-sources/'},
    { text: 'Документация', link: '/projects/alt-domain/gpupdate/documentation/'},
    { text: 'Полезная информация', link: '/projects/alt-domain/gpupdate/useful-information/'},
    { text: 'Участники проекта', link: '/projects/alt-domain/gpupdate/project-participants/'},
];

const gpui = [
    {text: '--Проекты', link: '/projects/'},
    {text: '-Проекты альт Домен', link: '/projects/alt-domain/'},
    {text: 'GPUI',},
    { text: 'Описание проекта', link: '/projects/alt-domain/gpui/'},
    { text: 'Лицензия', link: '/projects/alt-domain/gpui/license/'},
    { text: 'Релизы', link: '/projects/alt-domain/gpui/releases/'},
    { text: 'Исходники', link: '/projects/alt-domain/gpui/link-to-sources/'},
    { text: 'Документация', link: '/projects/alt-domain/gpui/documentation/'},
    { text: 'Полезная информация', link: '/projects/alt-domain/gpui/useful-information/'},
    { text: 'Участники проекта', link: '/projects/alt-domain/gpui/project-participants/'},
];

const gpresult = [
    {text: '--Проекты', link: '/projects/'},
    {text: '-Проекты альт Домен', link: '/projects/alt-domain/'},
    {text: 'GPResult',},
    { text: 'Описание проекта', link: '/projects/alt-domain/gpresult/'},
    { text: 'Лицензия', link: '/projects/alt-domain/gpresult/license/'},
    { text: 'Релизы', link: '/projects/alt-domain/gpresult/releases/'},
    { text: 'Исходники', link: '/projects/alt-domain/gpresult/link-to-sources/'},
    { text: 'Документация', link: '/projects/alt-domain/gpresult/documentation/'},
    { text: 'Полезная информация', link: '/projects/alt-domain/gpresult/useful-information/'},
    { text: 'Участники проекта', link: '/projects/alt-domain/gpresult/project-participants/'},
];

const newsMenuYear = [
    {
        text: '2025',
        base: '/news/2025/',
        items: [
            { text: 'май', link: '05/'},
            { text: 'апрель', link: '04/'},
            { text: 'март', link: '03/'},
            { text: 'февраль', link: '02/'},
            { text: 'январь', link: '01/'},
        ]
    },
];

module.exports = {
    base: '/alt-dev/',
    lang: 'ru-RU',
    title: 'altLinux.dev',
    logo: '/logo.png',
    head: [
        ['link', 
            { 
                rel: 'icon',
                type: 'image/x-icon',
                href: '/alt-dev/favicon.ico' 
            }
        ]
    ],

    themeConfig: {
        logo: { src: '/logo.png', width: 24, height: 24 },
        nav: nav(),
        sidebar: {
            '/projects/alt-domain/admc': admcMenu,
            '/projects/alt-domain/gpupdate': gpupdate,
            '/projects/alt-domain/gpui': gpui,
            '/projects/alt-domain/gpresult': gpresult,
            '/news': newsMenuYear,
        },
        outline: { label: 'Содержание страницы' },
        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },
        footer: {
            copyright: 'Copyright © 2025 Все права защищены.'
        },

        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Вернуться к началу',
        langMenuLabel: 'Изменить язык',
        skipToContentLabel: 'Перейти к содержимому'
    }

    
}


function nav(){
    return [
        {
            text: 'Главная',
            link: '/',
        },
        {
            text: 'Новости',
            link: '/news/2025/05/',
            activeMatch: '/news/'
        },
        {
            text: 'Проекты',
            link: '/projects/',
            activeMatch: '/projects/',
        },
        {
            text: 'Обучение',
            link: '/education/',
            activeMatch: '/education/'
        },
        {
            text: 'Менторство',
            link: '/mentoring/',
            activeMatch: '/mentoring/'
        },
        {
            text: 'Взаимодействие',
            link: '/interaction/',
            activeMatch: '/interaction/'
        },
    ];
}