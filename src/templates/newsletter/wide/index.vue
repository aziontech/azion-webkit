<template>
    <section class="newsletter-signup surface-section">
        <div class="lg:px-40 lg:py-28 py-8 px-4">
            <div class="lg:flex justify-between lg:gap-4">
                <div class="lg:w-2/4">
                    <Overline v-if="props.overline">
                        {{ props.overline }}
                    </Overline>
                    <h3 class="text-6xl font-normal text-color max-w-xl mt-2 mb-0">
                        {{ props.title }}
                    </h3>
                </div>
                <div class="lg:w-2/4">
                    <form
                        :id="formIdElement"
                        :name="formIdElement"
                        class="mt-8">

                        <InputText
                            class='min-w-full'
                            :placeholder="props.placeholderInput" />
                        <div class="flex lg:gap-4 mt-4 gap-2">
                            <InputText
                                type="e-mail"
                                class='w-1/2'
                                :placeholder="props.placeholderEmail" />
                            <Button
                                icon="pi pi-chevron-right"
                                iconPos="right" @click.prevent="onSubmit"
                                type="submit" class="w-1/2"
                                :label="buttonText" size="small"
                              />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import stringConcatRamdomNumber from '../../../helpers/stringConcatRamdomNumber';
    import Overline from '../../overline/index.vue'

    const formIdElement = stringConcatRamdomNumber('FormNewsletterSingleLine');
    const props = defineProps({
        overline: {
            type: String,
            required: false,
            default: ''
        },
        title: {
            type: String,
            required: true
        },
        placeholderInput: {
            type: String,
            required: false,
            default: 'Your Full Name'
        },
        placeholderEmail: {
            type: String,
            required: false,
            default: 'Your e-mail'
        },
        buttonText: {
            type: String,
            required: false,
            default: 'submit'
        },
        onSubmit: {
            type: Function,
            required: false,
            default: () => { console.log('[NewsletterWide] onSubmit') }
        }
    });
</script>
