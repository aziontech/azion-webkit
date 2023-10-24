<template>
    <section class="newsletter-signup py-8">
        <div class="container mx-auto py-8">
            <div class="lg:flex justify-between py-8">
                <div class="lg:w-2/4">
                    <span class="uppercase">
                        sign up
                    </span>
                    <h3 class="text-6xl max-w-xl mt-2 mb-0">
                        Become an expert in Edge Computing
                    </h3>
                </div>
                <div class="lg:w-2/4">
                    <form id="FormNewsletterWide" class="mt-8">
                        <InputText
                            class='min-w-full'  
                            placeholder="Your Full Name" />
                        <div class="flex gap-4 justify-between mt-4 gap-2">
                            <InputText
                                class='w-3/5'
                                placeholder="Your e-mail" />
                            <Button
                                class='w-2/5 min-w-fit'
                                type="submit">
                                subscribe our newsletter
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

    // TODO
    // implement props to receive I18N
</script>