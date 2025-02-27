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
	...plugin
];