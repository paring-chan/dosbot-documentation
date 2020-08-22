module.exports = {
    title: 'DOSBOT DOCS',
    description: '다스봇 문서',
    dest: 'public',
    themeConfig: {
        nav: [
            {
                text: '깃허브',
                link: 'https://github.com/parangee/dosbot-documentation'
            }
        ],
        sidebar: [
            {
                title: '명령어',
                path: '/commands/',
                collapsable: false,
                children: [
                    '/'
                ]
            }
        ]
    }
}
