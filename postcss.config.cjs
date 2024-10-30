module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 750, // 设计稿宽度 (通常为750)
            viewportHeight: 1624, // 设计稿高度，可选
            unitPrecision: 3, // 转换后保留的小数位数
            viewportUnit: 'vw', // 转换成的视口单位
            selectorBlackList: ['.ignore', '.hairlines'], // 不需要转换的类名
            minPixelValue: 1, // 最小的转换单位，避免一些小于1px的转换
            mediaQuery: false, // 是否允许在媒体查询中转换px
        },
    },
};