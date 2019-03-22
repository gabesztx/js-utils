module.exports = {
	'env':{
		'jquery': true
	},
	'parser': 'babel-eslint',
	'extends': 'airbnb-base',
	'plugins': [
		'lit'
	],
	'globals': {
		'window': true,
		'customElements': true,
		'CustomEvent': true,
		'browser': true,
		'document': true,
		'localStorage': true,
		'mocha': true,
		'describe': true,
		'before': true,
		'after': true,
		'beforeEach': true,
		'afterEach': true,
		'it': true,
		'__VERSION__': false,
		'Event': true,
		fetch: true
	},
	'rules': {
		//disagree with these
		'no-underscore-dangle': 0,
		'class-methods-use-this': 0,
		//TODO - broken with JSCore currently
		'import/no-unresolved': 0,
		'import/extensions': 0,
		//reassigning CustomEvent detail is common pattern
		'no-param-reassign': 0,
		//as project is small, many files that will export multiple only export one thing
		'import/prefer-default-export': 0,
		'linebreak-style': 0,
		'no-console': 0,

		//lit-html rules : https://github.com/43081j/eslint-plugin-lit
		'lit/no-duplicate-template-bindings': 2,
		'lit/no-template-bind': 2,
		'lit/no-template-map': 2,
		'lit/attribute-value-entities': 2,
		'lit/binding-positions': 2,
		'lit/no-invalid-html': 2,
		'lit/no-useless-template-literals': 2
	},
	'parserOptions': {
		'ecmaFeatures': {
			'legacyDecorators': true
		}
	}
};
