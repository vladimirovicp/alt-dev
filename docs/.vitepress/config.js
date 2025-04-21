const admcMenu = [
    { text: 'Описание проекта', link: '/projects/admc/'},
    { text: 'Лицензия', link: '/projects/admc/license/'},
    { text: 'Релизы', link: '/projects/admc/releases/'},
    { text: 'Ссылка на исходники', link: '/projects/admc/link-to-sources/'},
    { text: 'Зависимости', link: '/projects/admc/dependencies/'},
    { text: 'Документация', link: '/projects/admc/documentation/'},
    { text: 'Полезная информация', link: '/projects/admc/useful-information/'},
    { text: 'Инструменты', link: '/projects/admc/tools/'},
    { text: 'Участники проекта', link: '/projects/admc/project-participants/'},
    { text: 'Changelog', link: '/projects/admc/changelog/'},
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
                href: '/favicon.ico' 
            }
        ]
    ],

    themeConfig: {
        nav: nav(),
        sidebar: {
            '/projects/admc': admcMenu,
        },
        outline: { label: 'Содержание страницы' },
        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },
        footer: {
            message: 'Опубликовано под лицензией ???.',
            copyright: '© 2025'
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
            link: '/news/',
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