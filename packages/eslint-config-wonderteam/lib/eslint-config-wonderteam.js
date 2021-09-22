'use strict';

module.exports = {
    extends:[
        ".open-cli/codestyle/.eslintrc.json"
    ],

    overrides: [
        {
            "files": [
                "*.ts"
            ],
            "rules":{
                "eqeqeq": [
                    2,
                    "allow-null"
                ],
                "indent": [
                    "error",
                    4
                ],
                "keyword-spacing": [
                    2
                ],
                "space-before-blocks": [
                    "error",
                    "always"
                ],
                "key-spacing":"error",
                "func-call-spacing":"error",
                "computed-property-spacing":"error",
                "space-in-parens":"error",
                "array-bracket-spacing":"error",
                "object-curly-spacing": [
                    "error",
                    "always"
                ],
                "padded-blocks": [
                    "error",
                    "never"
                ],
                "no-multiple-empty-lines": [
                    "error",
                    {
                    "max":1
                    }
                ],
                "comma-style": [
                    "error",
                    "last"
                ],
                "comma-dangle": [
                    "error",
                    "always-multiline"
                ],
                "newline-per-chained-call":"error",
                "no-whitespace-before-property":"error",
                "space-infix-ops":"error",
                "no-multi-assign":"error",
                "nonblock-statement-body-position":"error",
                "arrow-parens":[
                    "error",
                    "always"
                ],
                "arrow-spacing":"error",
                "prefer-destructuring":"error",
                "prefer-template":"error",
                "template-curly-spacing":"error",
                "no-useless-escape":"error",
                "no-param-reassign":"error",
                "prefer-spread":"error",
                "function-paren-newline":"error",
                "function-call-argument-newline":[
                    "error",
                    "consistent"
                ],
                "brace-style":"error",
                "no-else-return":"error",
                "radix":"error",
                "no-new-wrappers":"error"
            }
        }
    ]
}