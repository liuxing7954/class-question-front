export default [
    [
        'umi-plugin-react',
        {
            antd: true,
            dva: true,
        }
    ],
    [
        "babel-plugin-import",
        {
            "libraryName": "ant-design-pro",
            "libraryDirectory": "lib",
            "style": true,
            "camel2DashComponentName": false
        },
        "ant-design-pro"
    ]
];