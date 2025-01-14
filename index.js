import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylisticJs from '@stylistic/eslint-plugin-js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

/**
 * 'off' or 0 - turn the rule off.
 * 'warn' or 1 - turn the rule on as a warning (doesn’t affect exit code).
 * 'error' or 2 - turn the rule on as an error (exit code is 1 when triggered).
 * */

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: [ '**/*.{js,mjs,cjs,ts,jsx,tsx}' ]
	},
	{
		ignores: [ 'src/vite-env.d.ts' ]
	},
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'error'
		}
	},
	{
		languageOptions: { globals: globals.browser },
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		...pluginReact.configs.flat.recommended,
		...pluginReact.configs.flat[ 'jsx-runtime' ],
	},
	{
		rules: {
			'array-callback-return': [ 'error', {
				checkForEach: true
			} ],
			'no-duplicate-imports': 'error',
			'no-fallthrough': [ 'error', {
				allowEmptyCase: true,
				// reportUnusedFallthroughComment: true
			} ],
			'no-useless-assignment': 'error',
			'camelcase': [ 'error', {
				properties: 'never'
			} ],
			'curly': 'error',
			'default-case': 'error',
			'default-param-last': 'error',
			'dot-notation': [ 'error', {
				allowPattern: '_'
			} ],
			'eqeqeq': 'error',
			'id-length': [ 'error', {
				exceptions: [ 'x', 'y', 'z', 't', 'L' ]
			} ],
			'no-bitwise': 'error',
			'no-else-return': 'error',
			'no-nested-ternary': 'error',
			'no-octal': 'error',
			'no-shadow-restricted-names': 'error',
			'no-unneeded-ternary': 'error',
			'no-useless-concat': 'error',
			'no-useless-computed-key': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			'prefer-object-has-own': 'error',
			'prefer-object-spread': 'error',
			'prefer-template': 'error',
			// 'require-await': 'error',
			'prefer-destructuring': 'error',
			'no-promise-executor-return': 'error',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'error',
			'no-unmodified-loop-condition': 'error',
			// 'no-use-before-define': 'error'
			// 'no-alert': 'error', // for prod
			// 'no-console': 'error', // for prod
		},
	},
	{
		plugins: {
			stylisticJs
		},
		rules: {
			'quotes': [ 'error', 'single' ],
			// 'array-bracket-newline': [ 'error', {
			//   multiline: true,
			// } ],
			'array-bracket-newline': [ 'error', 'consistent' ],
			'array-element-newline': [ 'error', {
				ArrayExpression: 'consistent',
				ArrayPattern: {
					multiline: true
				}
			} ],
			'arrow-spacing': 'error',
			'block-spacing': 'error',
			'brace-style': 'error',
			'comma-dangle': [ 'error', 'only-multiline' ],
			'comma-spacing': 'error',
			'comma-style': [ 'error', 'last' ],
			'function-call-argument-newline': [ 'error', 'consistent' ],
			'func-call-spacing': [ 'error', 'never' ],
			'function-paren-newline': [ 'error', 'consistent' ],
			'implicit-arrow-linebreak': 'error',
			'indent': [ 'error', 'tab', {
				SwitchCase: 1
				// can be configured
			} ],
			'react/jsx-child-element-spacing': 'error',
			'react/jsx-closing-bracket-location': [ 'error', 'tag-aligned' ],
			'react/jsx-closing-tag-location': 'error',
			'react/jsx-curly-brace-presence': [ 'error', 'never' ],
			'react/jsx-curly-newline': 'error',
			'react/jsx-curly-spacing': [ 2, 'never' ],
			'react/jsx-equals-spacing': [ 2, 'never' ],
			'react/jsx-first-prop-new-line': [ 2, 'multiline' ],
			'react/jsx-indent': [ 2, 'tab', {
				indentLogicalExpressions: true
			} ],
			'react/jsx-indent-props': [ 'error', 'tab' ],
			'react/jsx-max-props-per-line': [ 'error', {
				maximum: {
					multi: 1,
					single: 3
				}
			} ],
			'react/jsx-pascal-case': 'error',
			'react/jsx-props-no-multi-spaces': 'error',
			'jsx-quotes': [ 'error', 'prefer-single' ],
			'react/self-closing-comp': [ 'error', {
				component: true,
				html: true
			} ],
			'react/jsx-tag-spacing': [ 'error', {
				closingSlash: 'never',
				beforeSelfClosing: 'allow',
				afterOpening: 'never',
				beforeClosing: 'never',
			} ],
			'react/jsx-wrap-multilines': [ 'error', {
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
			} ],
			'key-spacing': 'error',
			'max-statements-per-line': 'error',
			'newline-per-chained-call': 'error',
			'no-confusing-arrow': 'error',
			'no-extra-semi': 'error',
			'no-floating-decimal': 'error',
			'no-mixed-operators': 'error',
			'no-mixed-spaces-and-tabs': 'error',
			'no-multi-spaces': 'error',
			'no-whitespace-before-property': 'error',
			'nonblock-statement-body-position': 'error',
			'object-curly-newline': 'error',
			'object-curly-spacing': [ 'error', 'always' ],
			'quote-props': [ 'error', 'consistent-as-needed' ],
			'rest-spread-spacing': 'error',
			'semi-spacing': 'error',
			'semi-style': 'error',
			'space-before-blocks': 'error',
			'space-in-parens': 'error',
			'space-infix-ops': 'error',
			'space-unary-ops': 'error',
			'switch-colon-spacing': 'error',
			'template-curly-spacing': 'error',
			'spaced-comment': 'error',
			'semi': [ 'error', 'always' ],
			'padded-blocks': [ 'error', 'never' ],
			// 'operator-linebreak': [ 'error', 'before' ],
			'arrow-parens': [ 'error', 'as-needed' ],
			'array-bracket-spacing': [ 'error', 'always', {
				singleValue: true,
				objectsInArrays: true,
				arraysInArrays: false
			} ]
		}
	},
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	}
];