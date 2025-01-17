// .stylelintrc.js
module.exports = {
  // 继承的预设，这些预设包含了规则集插件
  plugins: [
    '@stylistic/stylelint-plugin',
  ],
  extends: [
    // 代码风格规则
    // 'stylelint-stylistic/config',
    // 基本 scss 规则
    'stylelint-config-standard-scss',
    // scss vue 规则
    'stylelint-config-recommended-vue/scss',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
  ],
  rules: {
    // 自定义规则集的启用 / 禁用
    // 'stylistic/max-line-length': null,
    // syntax rules from stylelint:
    'color-function-notation': 'modern',
    // 'selector-max-compound-selectors': 2,

    // stylistic rules from @stylistic/stylelint-plugin:
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/number-leading-zero': 'always',
    '@stylistic/unit-case': 'lower',
  },
};
