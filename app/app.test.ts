namespace $ {

	$mol_test({

		'all content sections are filled'() {
			const app = new $bog_apps_app

			$mol_assert_equal( app.feature_cards().length, 6 )
			$mol_assert_equal( app.case_cards().length, 4 )
			$mol_assert_equal( app.step_cards().length, 4 )
			$mol_assert_equal( app.step_num( 0 ), '01' )
			$mol_assert_equal( app.case_title( 'gram' ), 'Gram' )
		},

		'tg_uri carries prefilled message'() {
			const app = new $bog_apps_app
			const uri = app.tg_uri()

			$mol_assert_equal( uri.startsWith( 'https://t.me/Dev_cmyser?text=' ), true )
			$mol_assert_equal( decodeURIComponent( uri ).includes( 'есть задача на веб-приложение' ), true )
		},

		/** Тема читает системную настройку через `this.$.$mol_lights()` — подменяем её в контексте. */
		'lights follow substituted $mol_lights'( $ ) {
			const day: $ = Object.create( $ )
			day.$mol_lights = ()=> true

			const night: $ = Object.create( $ )
			night.$mol_lights = ()=> false

			$mol_assert_equal( $bog_apps_app.make({ $: day }).lights(), 'light' )
			$mol_assert_equal( $bog_apps_app.make({ $: night }).lights(), 'dark' )
		},

		/** Хранилище тоже берётся из контекста — подсовываем объект в памяти вместо localStorage. */
		'saved theme mode beats substituted system preference'( $ ) {
			const storage = {} as Record< string, string >
			const reads = [] as string[]

			class Storage_mock< Value > extends $.$mol_state_local< Value > {
				static override value< Value >( key: string, next?: Value | null ): Value | null {
					if( next !== undefined ) storage[ key ] = JSON.stringify( next )
					else reads.push( key )
					return JSON.parse( storage[ key ] ?? 'null' )
				}
			}

			const context: $ = Object.create( $ )
			context.$mol_lights = ()=> true
			context.$mol_state_local = Storage_mock

			const app = $bog_apps_app.make({ $: context })
			const key = `${ app.Theme() }.mode()`
			storage[ key ] = JSON.stringify( 'dark' )

			$mol_assert_equal( app.lights(), 'dark' )
			$mol_assert_equal( reads.includes( key ), true )
		},

		/** Подменяем сам DOM-узел секции, чтобы поймать вызов скролла. */
		'cases_scroll smooth-scrolls to the cases block'() {
			const app = new $bog_apps_app
			const scrolls = [] as ScrollIntoViewOptions[]

			app.Cases().dom_node().scrollIntoView = ( options: ScrollIntoViewOptions )=> { scrolls.push( options ) }
			app.cases_scroll()

			$mol_assert_equal( scrolls.length, 1 )
			$mol_assert_equal( scrolls[0].behavior, 'smooth' )
		},

	})

}
