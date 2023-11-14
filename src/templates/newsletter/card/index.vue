<template>
	<section class="newsletter-signup border border-solid surface-section surface-border p-7 rounded max-w-md">
		<h5 class="max-w-xl mt-0 mb-0 lg:text-2xl">
			{{ title }}
		</h5>
		<form :id="formIdElement" class="mt-4">
			<div class="mt-4">
				<span class="p-input-icon-left w-full">
					<i class="pi pi-envelope" />
					<InputText :placeholder="placeholderInput" class="w-full" />

				</span>
				<Button class='mt-4 w-full' type="submit" @click.prevent="onSubmit" icon="pi pi-chevron-right"
					iconPos="right" :label="buttonText" size="small" />
			</div>
		</form>
	</section>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import stringConcatRamdomNumber from '../../../helpers/stringConcatRamdomNumber';

const props = defineProps({
	title: {
		type: String,
		required: true
	},
	placeholderInput: {
		type: String,
		required: false,
		default: 'Your Email'
	},
	buttonText: {
		type: String,
		required: false,
		default: 'submit'
	},
	onSubmit: {
		type: Function,
		required: false,
		default: () => { console.log('[NewsletterCard] onSubmit') }
	}
});

const formIdElement = stringConcatRamdomNumber('FormNewsletterSingleLine');
const { title, placeholderInput, buttonText, onSubmit } = props
</script>
