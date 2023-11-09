<template>
    <section class="newsletter-singleline">
        <div class="container mx-auto">
            <div class="lg:flex justify-between px-6 py-4 rounded surface-ground border border-solid surface-border">
                <div class="lg:w-2/4">
                    <h3 class="text-2xl max-w-xl">
                        {{ props.title }}
                    </h3>
                </div>
                <div class="lg:w-2/4">
                    <form
                        :id="formIdElement"
                        :name="formIdElement"
                        class="flex items-center h-full w-full"
                        >
                        <div class="md:flex md:gap-4 md:justify-between md:items-center mt-4 md:mt-0 w-full">
                            <div class="md:w-3/5">
                                <span class="p-input-icon-left w-full">
                                    <i class="pi pi-envelope" />
                                    <InputText
                                        type="email"
                                        class='w-full'
                                        :placeholder="props.placeholderInput" />
                                </span>
                            </div>
                            <Button
                              class='min-w-fit w-full mt-4 md:mt-0 md:w-2/5'
                              :label="props.buttonText" icon="pi pi-chevron-right"
                              iconPos="right" @click.prevent="onSubmit"
                              size="small"
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

    const formIdElement = stringConcatRamdomNumber('FormNewsletterSingleLine');
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        placeholderInput: {
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
            required: false
        }
    });
</script>
