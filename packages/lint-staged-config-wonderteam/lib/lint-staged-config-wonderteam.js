'use strict';

module.exports = {
    "src/**/*.{js,ts,html}": ["eslint --ignore-path .open-cli/codestyle/.eslintignore --fix"],
    "src/**/*.{html, json}": ["prettier --write"]
}
  