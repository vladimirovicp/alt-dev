module.exports = {
    lang: 'ru-RU',
    title: 'AltLinux.dev',
    logo: '/logo.png',

    themeConfig: {
        nav: nav(),
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