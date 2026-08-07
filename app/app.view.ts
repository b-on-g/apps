namespace $.$$ {

	const features = {
		platforms: {
			title: 'Все платформы сразу',
			text: 'Web, Windows, macOS, Linux, Android, iOS и браузерные расширения — из одной кодовой базы.',
		},
		offline: {
			title: 'Работает офлайн',
			text: 'Пропал интернет — приложение продолжает работать. Сеть вернулась — данные синхронизируются сами, без конфликтов.',
		},
		serverless: {
			title: 'Без серверной инфраструктуры',
			text: 'Не нужно поднимать БД, платить за сервер и хранить бэкапы: данные живут у пользователей и синхронизируются через распределённое хранилище.',
		},
		auth: {
			title: 'Вход без регистрации',
			text: 'Авторизация происходит мгновенно при первой загрузке — без паролей и подтверждений почты.',
		},
		crypto: {
			title: 'Шифрование end-to-end',
			text: 'Все изменения подписаны автором, а приватные данные можно шифровать прямо на устройстве — до отправки в сеть.',
		},
		hosting: {
			title: 'Хостинг от 0 ₽',
			text: 'Приложение — статика: GitHub Pages бесплатно, либо любой обычный сервер, если нужен SEO.',
		},
	} as Record< string, { title: string, text: string } >

	const cases = {
		gram: {
			title: 'Gram',
			text: 'Мессенджер: переписка синхронизируется между устройствами, правка и удаление сообщений, отметки о прочтении. Работает без своего сервера.',
			demo: 'https://b-on-g.github.io/gram/',
			source: 'https://github.com/b-on-g/gram',
		},
		blitz: {
			title: 'Blitz Quiz',
			text: 'Реалтайм-викторина: хост создаёт комнату, игроки подключаются по QR-коду и отвечают наперегонки. Таймер, лидерборд, админка с генерацией вопросов.',
			demo: 'https://b-on-g.github.io/blitz/',
			source: 'https://github.com/b-on-g/blitz',
		},
		music: {
			title: 'Bog Music',
			text: 'Музыкальный плеер: веб-версия и расширение Chrome, фоновое воспроизведение, шеринг треков по ссылке.',
			demo: 'https://b-on-g.github.io/music/',
			source: 'https://github.com/b-on-g/music',
		},
		smalljs: {
			title: 'smalljs',
			text: 'Сайт документации веб-фреймворка: гайды на 15 языках, полнотекстовый и семантический поиск, песочница с живым кодом и интерактивный курс.',
			demo: 'https://b-on-g.github.io/smalljs/',
			source: 'https://github.com/b-on-g/smalljs',
		},
	} as Record< string, { title: string, text: string, demo: string, source: string } >

	const steps = [
		{
			title: 'Заявка',
			text: 'Напишите в Telegram пару предложений: что за продукт и для кого — обсудим объём и сроки.',
		},
		{
			title: 'Прототип',
			text: 'Собираю рабочий прототип, чтобы идею можно было пощупать руками, а не смотреть на макеты.',
		},
		{
			title: 'Итерации',
			text: 'Дорабатываем короткими итерациями, каждая версия сразу доступна по ссылке.',
		},
		{
			title: 'Запуск',
			text: 'Деплой на ваш домен или GitHub Pages. Договор и безнал — работаю как ИП.',
		},
	]

	export class $bog_apps_app extends $.$bog_apps_app {

		tg_uri() {
			return 'https://t.me/Dev_cmyser?text=' + encodeURIComponent( 'Добрый день! Пишу с вашего сайта — есть задача на веб-приложение, хочу обсудить.' )
		}

		lights() {
			return this.Theme().is_light_now() ? 'light' : 'dark'
		}

		feature_cards() {
			return Object.keys( features ).map( id => this.Feature( id ) )
		}

		feature_title( id: string ) {
			return features[ id ].title
		}

		feature_text( id: string ) {
			return features[ id ].text
		}

		case_cards() {
			return Object.keys( cases ).map( id => this.Case( id ) )
		}

		case_title( id: string ) {
			return cases[ id ].title
		}

		case_text( id: string ) {
			return cases[ id ].text
		}

		case_demo_uri( id: string ) {
			return cases[ id ].demo
		}

		case_source_uri( id: string ) {
			return cases[ id ].source
		}

		step_cards() {
			return steps.map( ( _, i ) => this.Step( i ) )
		}

		step_num( i: number ) {
			return '0' + ( i + 1 )
		}

		step_title( i: number ) {
			return steps[ i ].title
		}

		step_text( i: number ) {
			return steps[ i ].text
		}

		@ $mol_action
		cases_scroll() {
			this.Cases().dom_node().scrollIntoView({ behavior: 'smooth' })
		}

	}

}
