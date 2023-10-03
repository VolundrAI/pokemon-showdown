// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// Doubles
	///////////////////////////////////////////////////////////////////
	{
		section: "Singles",
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen9',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 9] Anything Goes",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen9',
		ruleset: ['Min Source Gen = 9', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Anything Goes",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen8',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 7] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen7',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Anything Goes",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen7',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 6] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] Anything Goes",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen6',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 5] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen5',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 5] Anything Goes",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen5',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 4] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen4',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] Anything Goes",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen4',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 3] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen3',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Anything Goes",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen3',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 2] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen2',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 2] Anything Goes",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen2',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 1] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen1',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Anything Goes",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen1',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},

	// Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Doubles",
		column: 2,
	},
	{
		name: "[Gen 9] Random Doubles",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen9',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 9] Anything Goes Doubles",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen9',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 8] Random Doubles",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 8] Anything Goes Doubles",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen8',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 7] Random Doubles",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen7',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 7] Anything Goes Doubles",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen7',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 6] Random Doubles",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 6] Anything Goes Doubles",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen6',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 5] Random Doubles",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen5',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 5] Anything Goes Doubles",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen5',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 4] Random Doubles",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen4',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 4] Anything Goes Doubles",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen4',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 3] Random Doubles",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen3',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 3] Anything Goes Doubles",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen3',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 2] Random Doubles",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen2',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 2] Anything Goes Doubles",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen2',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 1] Random Doubles",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen1',
		team: 'random',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		gameType: 'doubles'
	},
	{
		name: "[Gen 1] Anything Goes Doubles",
		desc: `Bring your own team of Pok&eacute;mon to battle, no limits`,
		mod: 'gen1',
		ruleset: ['Min Source Gen = 1', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		gameType: 'doubles'
	},
];
