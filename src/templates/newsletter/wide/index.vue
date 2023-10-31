<template>
    <section class="newsletter-signup py-8">
        <div class="container mx-auto py-8">
            <div class="lg:flex justify-between py-8">
                <div class="lg:w-2/4">
                    <span class="uppercase" v-if="props.overline">
                        {{ props.overline }}
                    </span>
                    <h3 class="text-6xl max-w-xl mt-2 mb-0">
                        {{ props.title }}
                    </h3>
                </div>
                <div class="lg:w-2/4">
                    <form id="FormNewsletterWide" class="mt-8">
                        <InputText
                            class='min-w-full'  
                            :placeholder="props.placeholderInput" />
                        <div class="flex gap-4 justify-between mt-4 gap-2">
                            <InputText
                                type="e-mail"
                                class='w-3/5'
                                :placeholder="props.placeholderEmail" />
                            <Button
                                class='w-2/5 min-w-fit'
                                type="submit">
                                {{ buttonText }}
                            </Button>
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
            default: (e) => { console.log('[NewsletterWide] onSubmit') }
        }
    });
</script>