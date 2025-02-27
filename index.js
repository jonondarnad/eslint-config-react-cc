import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import plugin from 'eslint-config-csts';
/**
 * 'off' or 0 - turn the rule off.
 * 'warn' or 1 - turn the rule on as a warning (doesn’t affect exit code).
 * 'error' or 2 - turn the rule on as an error (exit code is 1 when triggered).
 * */

/** @type {import('eslint').Linter.Config[]} */
export default [
	...tseslint.configs.recommended,
	{
		...pluginReact.configs.flat.recommended,
		...pluginReact.configs.flat[ 'jsx-runtime' ],
	},
	{
		rules: {
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
		}
	},
	...plugin
];