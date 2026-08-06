namespace $ {

	const section = {
		flex: { direction: 'column' },
		gap: '1rem',
		width: '100%',
		maxWidth: '56rem',
		margin: { left: 'auto', right: 'auto' },
		boxSizing: 'border-box',
		padding: { top: '2rem', bottom: '2rem', left: '1rem', right: '1rem' },
	} as const

	const section_title = {
		font: { size: '1.5rem', weight: 700 },
	} as const

	const card = {
		minWidth: 0,
		background: { color: $mol_theme.card },
		border: { radius: $mol_gap.round },
		padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' },
		gap: '.5rem',
	} as const

	$mol_style_define( $bog_apps_app, {

		Hero: {
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: '1.25rem',
			padding: { top: '4rem', bottom: '3rem', left: '1rem', right: '1rem' },
			textAlign: 'center',
		},

		Hero_title: {
			font: { size: '2.25rem', weight: 800 },
			lineHeight: '1.2',
			maxWidth: '44rem',
		},

		Hero_text: {
			font: { size: '1.125rem' },
			lineHeight: '1.6',
			maxWidth: '40rem',
			color: $mol_theme.shade,
		},

		Hero_actions: {
			flex: { wrap: 'wrap' },
			gap: '1rem',
			align: { items: 'center' },
			justify: { content: 'center' },
		},

		Lead_scroll: {
			font: { size: '1.125rem' },
			padding: { top: '.75rem', bottom: '.75rem', left: '1.5rem', right: '1.5rem' },
		},

		Features: section,
		Features_title: section_title,
		Features_list: {
			flex: { wrap: 'wrap' },
			gap: '1rem',
		},

		Feature: {
			...card,
			flex: { grow: 1, shrink: 1, basis: '16rem', direction: 'column' },
		},

		Feature_title: {
			font: { weight: 600 },
		},

		Feature_text: {
			lineHeight: '1.5',
			color: $mol_theme.shade,
		},

		Cases: section,
		Cases_title: section_title,
		Cases_list: {
			flex: { wrap: 'wrap' },
			gap: '1rem',
		},

		Case: {
			...card,
			flex: { grow: 1, shrink: 1, basis: '18rem', direction: 'column' },
		},

		Case_title: {
			font: { size: '1.125rem', weight: 600 },
		},

		Case_text: {
			lineHeight: '1.5',
			color: $mol_theme.shade,
			flex: { grow: 1 },
		},

		Case_links: {
			gap: '1rem',
		},

		Process: section,
		Process_title: section_title,
		Process_list: {
			flex: { direction: 'column' },
			gap: '1rem',
		},

		Step: {
			gap: '1rem',
			align: { items: 'baseline' },
		},

		Step_num: {
			font: { size: '1.5rem', weight: 800 },
			color: $mol_theme.special,
			minWidth: '2rem',
			textAlign: 'center',
		},

		Step_body: {
			flex: { direction: 'column', grow: 1, shrink: 1 },
			minWidth: 0,
			gap: '.25rem',
		},

		Step_title: {
			font: { weight: 600 },
		},

		Step_text: {
			lineHeight: '1.5',
			color: $mol_theme.shade,
		},

		Lead_section: section,
		Lead_title: section_title,

		Requisites: section,
		Requisites_title: section_title,

		Requisites_text: {
			color: $mol_theme.shade,
		},

	})

}
