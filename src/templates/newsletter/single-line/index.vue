<template>
    <section class="newsletter-singleline">
        <div class="container mx-auto">
            <div class="lg:flex justify-between px-6 py-4 rounded shadow-xl">
                <div class="lg:w-2/4">
                    <h3 class="text-2xl max-w-xl">
                        {{ props.title }}
                    </h3>
                </div>
                <div class="lg:w-2/4">
                    <form id="FormNewsletterSingleLine">
                        <div class="md:flex md:gap-4 md:justify-between mt-4">
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
                                type="submit"
                                class='min-w-fit w-full mt-4 md:mt-0 md:w-2/5'>
                                {{ props.textButton }}
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
        title: {
            type: String,
            required: true
        },
        placeholderInput: {
            type: String,
            required: true,
            default: 'Your e-mail'
        },
        textButton: {
            type: String,
            required: true,
            default: 'submit'
        },
        onSubmit: {
            type: Function,
            required: false
        }
    });
</script>
