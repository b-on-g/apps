namespace $ {

	const { rem } = $mol_style_unit

	// Utility / label voice — как в smalljs: monospace, uppercase, разрядка.
	const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"

	const eyebrow = {
		font: { family: mono, size: rem( 0.75 ), weight: 500 },
		letterSpacing: rem( 0.12 ),
		textTransform: 'uppercase',
		color: $bog_builderui_tokens.shade,
	} as const

	const feature_title = {
		display: 'block',
		font: { family: $bog_builderui_tokens.font_head, size: rem( 1.375 ), weight: 500 },
		letterSpacing: '-0.01em',
		'::first-letter': { color: $bog_builderui_tokens.special },
	} as const

	$mol_style_define( $bog_apps_app, {

		flex: { direction: 'column' },
		height: '100vh',
		overflow: { y: 'auto', x: 'hidden' },
		background: { color: $bog_builderui_tokens.back },
		color: $bog_builderui_tokens.text,

		// ── Top bar ──
		Top: {
			position: 'sticky',
			top: 0,
			zIndex: 10,
			flex: { direction: 'row' },
			align: { items: 'center' },
			justify: { content: 'space-between' },
			gap: rem( 1 ),
			padding: { top: rem( 0.625 ), bottom: rem( 0.625 ), left: rem( 1.25 ), right: rem( 1.25 ) },
			background: { color: $bog_builderui_tokens.card },
			border: { bottom: { width: '1px', style: 'solid', color: $bog_builderui_tokens.line } },
		},

		Top_name: {
			font: { family: $bog_builderui_tokens.font_head, size: rem( 1.125 ), weight: 600 },
			letterSpacing: '-0.01em',
			whiteSpace: 'nowrap',
			overflow: { x: 'hidden' },
			textOverflow: 'ellipsis',
			minWidth: 0,
		},

		Top_tools: {
			flex: { direction: 'row', grow: 0, shrink: 0 },
			align: { items: 'center' },
			gap: rem( 0.5 ),
		},

		Top_tg: {
			color: $bog_builderui_tokens.control,
			font: { weight: 600, size: rem( 0.9375 ) },
			padding: { left: rem( 0.5 ), right: rem( 0.5 ), top: rem( 0.375 ), bottom: rem( 0.375 ) },
			border: { radius: rem( 0.375 ) },
		},

		Body: {
			flex: { direction: 'column', grow: 1 },
		},

		// ── Hero ──
		Hero: {
			flex: { direction: 'column' },
			align: { items: 'center' },
			padding: { top: rem( 5 ), bottom: rem( 3 ), left: $mol_gap.block, right: $mol_gap.block },
		},

		Hero_head: {
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: rem( 1.5 ),
			width: '100%',
			maxWidth: rem( 52 ),
		},

		Hero_eyebrow: {
			display: 'block',
			... eyebrow,
			textAlign: 'center',
		},

		Hero_title: {
			display: 'block',
			font: { family: $bog_builderui_tokens.font_head, size: rem( 3.5 ), weight: 500 },
			lineHeight: '1.12',
			letterSpacing: '-0.02em',
			textAlign: 'center',
			color: $bog_builderui_tokens.text,
			maxWidth: '100%',
			overflowWrap: 'break-word',
		},

		Hero_title_accent: {
			display: 'inline',
			color: $bog_builderui_tokens.special,
			margin: { left: '0.22em' },
		},

		Hero_subtitle: {
			display: 'block',
			font: { size: rem( 1.1875 ) },
			lineHeight: '1.55',
			textAlign: 'center',
			maxWidth: rem( 40 ),
			color: $bog_builderui_tokens.shade,
		},

		Hero_actions: {
			flex: { direction: 'row', wrap: 'wrap' },
			gap: rem( 0.75 ),
			justify: { content: 'center' },
			align: { items: 'center' },
			margin: { top: rem( 0.5 ) },
		},

		// Primary — залитая control-синим, как Hero_cta_start в smalljs.
		Cta_tg: {
			flex: { direction: 'row' },
			align: { items: 'center' },
			gap: rem( 0.4 ),
			background: { color: $bog_builderui_tokens.current },
			color: $bog_builderui_tokens.back,
			padding: { left: rem( 1.125 ), right: rem( 1.125 ), top: rem( 0.625 ), bottom: rem( 0.625 ) },
			border: { radius: rem( 0.375 ) },
			font: { weight: 600 },
		},

		Cta_tg_icon: { width: rem( 0.9 ), height: rem( 0.9 ) },

		// Secondary — outline.
		Cta_cases: {
			flex: { direction: 'row' },
			align: { items: 'center' },
			gap: rem( 0.4 ),
			background: { color: 'transparent' },
			color: $bog_builderui_tokens.control,
			padding: { left: rem( 1.125 ), right: rem( 1.125 ), top: rem( 0.5625 ), bottom: rem( 0.5625 ) },
			border: { radius: rem( 0.375 ), width: '1px', style: 'solid', color: $bog_builderui_tokens.line },
			font: { weight: 600 },
		},

		// ── Features ──
		Features: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gap: rem( 2.5 ),
			padding: { top: rem( 2 ), bottom: rem( 3 ), left: $mol_gap.block, right: $mol_gap.block },
			maxWidth: rem( 62 ),
			width: '100%',
			boxSizing: 'border-box',
			margin: { left: 'auto', right: 'auto' },
		},

		Feature: { flex: { direction: 'column' }, gap: rem( 0.5 ), minWidth: 0 },

		Feature_title: feature_title,

		Feature_text: {
			display: 'block',
			color: $bog_builderui_tokens.shade,
			lineHeight: '1.6',
		},

		// ── Cases ──
		Cases: {
			flex: { direction: 'column' },
			gap: rem( 1.5 ),
			padding: { top: rem( 2 ), bottom: rem( 3 ), left: $mol_gap.block, right: $mol_gap.block },
			maxWidth: rem( 62 ),
			width: '100%',
			boxSizing: 'border-box',
			margin: { left: 'auto', right: 'auto' },
		},

		Cases_title: {
			display: 'block',
			... eyebrow,
		},

		Cases_list: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gap: rem( 1.25 ),
		},

		Case: {
			flex: { direction: 'column' },
			gap: rem( 0.5 ),
			minWidth: 0,
			background: { color: $bog_builderui_tokens.card },
			border: { width: '1px', style: 'solid', color: $bog_builderui_tokens.line, radius: rem( 0.75 ) },
			padding: { top: rem( 1.25 ), bottom: rem( 1.25 ), left: rem( 1.25 ), right: rem( 1.25 ) },
		},

		Case_title: feature_title,

		Case_text: {
			display: 'block',
			color: $bog_builderui_tokens.shade,
			lineHeight: '1.6',
			flex: { grow: 1 },
		},

		Case_links: {
			flex: { direction: 'row' },
			gap: rem( 1 ),
			margin: { top: rem( 0.5 ) },
		},

		Case_demo: {
			color: $bog_builderui_tokens.control,
			font: { weight: 600, size: rem( 0.9375 ) },
		},

		Case_source: {
			color: $bog_builderui_tokens.control,
			font: { weight: 600, size: rem( 0.9375 ) },
		},

		// ── Process ──
		Process: {
			flex: { direction: 'column' },
			gap: rem( 1.5 ),
			padding: { top: rem( 2 ), bottom: rem( 4 ), left: $mol_gap.block, right: $mol_gap.block },
			maxWidth: rem( 62 ),
			width: '100%',
			boxSizing: 'border-box',
			margin: { left: 'auto', right: 'auto' },
		},

		Process_title: {
			display: 'block',
			... eyebrow,
		},

		Process_list: {
			display: 'grid',
			gridTemplateColumns: 'repeat(4, 1fr)',
			gap: rem( 2 ),
		},

		Step: { flex: { direction: 'column' }, gap: rem( 0.5 ), minWidth: 0 },

		Step_num: {
			display: 'block',
			... eyebrow,
			color: $bog_builderui_tokens.special,
		},

		Step_title: feature_title,

		Step_text: {
			display: 'block',
			color: $bog_builderui_tokens.shade,
			lineHeight: '1.6',
			font: { size: rem( 0.9375 ) },
		},

		// ── Footer ──
		Footer: {
			flex: { direction: 'column' },
			gap: rem( 1 ),
			padding: { top: rem( 2.5 ), bottom: rem( 2.5 ), left: rem( 1.25 ), right: rem( 1.25 ) },
			border: { top: { width: '1px', style: 'solid', color: $bog_builderui_tokens.line } },
			margin: { top: 'auto' },
			align: { items: 'center' },
		},

		Requisites: {
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: rem( 0.375 ),
			font: { size: rem( 0.875 ) },
			color: $bog_builderui_tokens.shade,
			textAlign: 'center',
		},

		Requisites_title: {
			display: 'block',
			... eyebrow,
			padding: { bottom: rem( 0.375 ) },
		},

		Requisites_contacts: {
			flex: { direction: 'row', wrap: 'wrap' },
			justify: { content: 'center' },
			gap: rem( 1 ),
		},

		Mail_link: { color: $bog_builderui_tokens.control },
		Tg_link: { color: $bog_builderui_tokens.control },
		Github_link: { color: $bog_builderui_tokens.control },

		'@media': {

			'(max-width: 47.9375rem)': {

				Hero: {
					padding: { top: rem( 3 ), bottom: rem( 2 ), left: rem( 1 ), right: rem( 1 ) },
				},

				Hero_head: { gap: rem( 1.25 ) },

				Hero_title: { font: { size: rem( 1.875 ) } },

				Hero_subtitle: { font: { size: rem( 1.0625 ) } },

				Top_name: { font: { size: rem( 1 ) } },

				Features: {
					gridTemplateColumns: '1fr',
					gap: rem( 1.75 ),
					padding: { top: rem( 1 ), bottom: rem( 2 ), left: rem( 1.25 ), right: rem( 1.25 ) },
				},

				Cases_list: { gridTemplateColumns: '1fr' },

				Process_list: { gridTemplateColumns: '1fr 1fr', gap: rem( 1.5 ) },

			},

			'(max-width: 60rem) and (min-width: 48rem)': {
				Features: { gridTemplateColumns: '1fr 1fr' },
				Cases_list: { gridTemplateColumns: '1fr' },
			},

		},

	} )

	// Палитра поверх builderui-токенов — скопирована со smalljs (та же схема:
	// operator-blue для ссылок/CTA, тёплый оранжевый special, кремовый лайт,
	// цинковый дарк со свапнутыми back/card). Raw CSS: css-переменные на чужом
	// атрибуте через $mol_style_define не выразить.
	$mol_style_attach( '$bog_apps_app.palette', `
		[bog_apps_app][bog_builderui_base][bog_builderui_lights="light"] {
			--bog_builderui_control: hsl( 210, 68%, 42% );
			--bog_builderui_focus: hsl( 210, 72%, 36% );
			--bog_builderui_current: hsl( 210, 68%, 42% );
			--bog_builderui_special: hsl( 26, 82%, 44% );
			--bog_builderui_back: #faf9f7;
			--bog_builderui_card: #ffffff;
		}
		[bog_apps_app][bog_builderui_base][bog_builderui_lights="dark"] {
			--bog_builderui_control: hsl( 210, 72%, 64% );
			--bog_builderui_focus: hsl( 210, 76%, 72% );
			--bog_builderui_current: hsl( 210, 72%, 64% );
			--bog_builderui_special: hsl( 30, 85%, 60% );
			--bog_builderui_text: #d4d4d8;
			--bog_builderui_back: #18181b;
			--bog_builderui_card: #09090b;
		}
	` )

	// Ховеры, подъём CTA, тень карточек, входная анимация — как в smalljs.
	// Raw CSS: transition / transform / outline / keyframes не входят в типизированную схему.
	$mol_style_attach( '$bog_apps_app.craft', `
		[bog_apps_app_case] {
			box-shadow: 0 20px 48px -28px rgba( 0, 0, 0, 0.25 );
		}

		[bog_apps_app_hero_head] {
			animation: bog_apps_rise 0.7s cubic-bezier( 0.22, 1, 0.36, 1 ) both;
		}

		[bog_apps_app_cta_tg],
		[bog_apps_app_cta_cases] {
			transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease, background-color .12s ease, filter .12s ease;
		}
		[bog_apps_app_cta_tg]:hover {
			transform: translateY( -1px );
			filter: brightness( 1.06 );
			box-shadow: 0 6px 16px -8px var( --bog_builderui_current );
			background-color: var( --bog_builderui_current );
		}
		[bog_apps_app_cta_tg]:focus-visible {
			background-color: var( --bog_builderui_current );
		}
		[bog_apps_app_cta_tg]:active {
			color: var( --bog_builderui_back );
		}
		[bog_apps_app_cta_cases]:hover {
			transform: translateY( -1px );
			border-color: var( --bog_builderui_control );
			background: var( --bog_builderui_hover );
		}

		[bog_apps_app_cta_tg]:focus-visible,
		[bog_apps_app_cta_cases]:focus-visible {
			outline: 2px solid var( --bog_builderui_focus );
			outline-offset: 2px;
		}

		@keyframes bog_apps_rise {
			from { opacity: 0; transform: translateY( 10px ) }
			to { opacity: 1; transform: none }
		}
		@media ( prefers-reduced-motion: reduce ) {
			[bog_apps_app_hero_head] { animation: none }
		}
	` )

}
