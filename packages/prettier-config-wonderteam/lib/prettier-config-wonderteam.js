'use strict';

module.exports = {
    $schema: "http://json.schemastore.org/prettierrc",
    trailingComma: "es5",
    useTabs: false,
    printWidth: 140,
    overrides: [
        {
            files: ["*.html"],
            options: {
                tabWidth: 4
            }
        },
        {
            files: ["*.json", "*.jsonc"],
            options: {
                tabWidth: 2
            }
        }
    ],
    endOfLine: "lf"
}
