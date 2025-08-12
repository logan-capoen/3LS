export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [7],
		"/Jammaze": [8,[2]],
		"/KIB": [9,[3]],
		"/MM": [10,[4]],
		"/RickyGames": [11,[5]],
		"/RickyGames/findcharacter": [12,[5]],
		"/RickyGames/findmorty": [13,[5]],
		"/RickyGames/findrick": [14,[5]],
		"/RickyGames/guesscharacter": [15,[5]],
		"/RickyGames/guessmorty": [16,[5]],
		"/RickyGames/guessrick": [17,[5]],
		"/SpaceCake": [18,[6]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';