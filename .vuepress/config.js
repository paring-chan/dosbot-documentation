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
                path: '/명령어/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ['/commands', '목차'],
                    ['/commands/customcommand', '커스텀 커맨드']
                ]
            }
        ]
    }
}
