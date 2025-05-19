const admcMenu = [
    { text: 'Описание проекта', link: '/projects/alt-domain/admc/'},
    { text: 'Лицензия', link: '/projects/alt-domain/admc/license/'},
    { text: 'Релизы', link: '/projects/alt-domain/admc/releases/'},
    { text: 'Ссылка на исходники', link: '/projects/alt-domain/admc/link-to-sources/'},
    { text: 'Документация', link: '/projects/alt-domain/admc/documentation/'},
    { text: 'Полезная информация', link: '/projects/alt-domain/admc/useful-information/'},
    { text: 'Участники проекта', link: '/projects/alt-domain/admc/project-participants/'},
    { text: 'Changelog', link: '/projects/alt-domain/admc/changelog/'},
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
    theme: './theme',
    base: '/alt-dev/',
    lang: 'ru-RU',
    title: 'altLinux.dev',
    logo: '/logo.png',
    head: [
        ['link', 
            { 
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico' 
            }
        ]
    ],

    themeConfig: {
        nav: nav(),
        sidebar: {
            '/projects/alt-domain/admc': admcMenu,
            '/news': newsMenuYear,
        },
        outline: { label: 'Содержание страницы' },
        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },
        footer: {
            // message: 'Опубликовано под лицензией ???.',
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
            activeMatch: '/projects/'
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