const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../webpack.prod.js')

    it('entry', () => {
        assert.equal(baseConfig.entry.index, '/Users/qmp/my-project/webpack-demo/src/index/index.js');
        assert.equal(baseConfig.entry.search, '/Users/qmp/my-project/webpack-demo/src/search/index.js');
    });
});
