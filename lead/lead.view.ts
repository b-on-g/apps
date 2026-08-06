namespace $.$$ {

	export class $bog_apps_lead extends $.$bog_apps_lead {

		private base() {
			return this as unknown as $.$$.$bog_feedback2_form
		}

		// стабы из tree-редекларации перетирают методы базовой формы — делегируем обратно
		submit( next?: any ) {
			return $.$$.$bog_feedback2_form.prototype.submit.call( this )
		}

		draft_text( next?: string ) {
			return $.$$.$bog_feedback2_form.prototype.draft_text.call( this, next )
		}

		draft_contact( next?: string ) {
			return $.$$.$bog_feedback2_form.prototype.draft_contact.call( this, next )
		}

		submit_title() {
			return this.base().has_entry() ? 'Обновить заявку' : 'Отправить'
		}

		body() {
			const base = this.base()
			if( !base.is_configured() ) return [ this.Not_configured() ]
			if( !base.land() ) return [ this.Waiting() ]
			const rows = [
				this.Prompt(),
				this.Entry_my(),
				this.Contact_field(),
				this.Submit(),
			] as readonly any[]
			const tail = [] as any[]
			if( base.has_entry() ) tail.push( this.Sent_note() )
			if( base.is_owner() ) tail.push( this.Entries() )
			return [ ...rows, ...tail ]
		}

	}

}
