module.exports = {
    compact: (path, variables = {}) => {

        let data = require('fs').readFileSync(path, 'utf8');

        let replacements = Object.assign(Object.create(null), variables);

        return data.replace(/{{[^}]+}}/g, function (m) {

            m = m.replace(/[{{,}}]/g, '');

            return replacements[m] || m;
        });
    }
};