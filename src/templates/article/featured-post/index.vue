<template>
    <div class="container mx-auto block lg:flex items-center">
        <picture class="block p-0 m-0 mb-82 lg:mb-0 lg:mr-10 min-w-fit">
            <img
                alt=""
                class="h-auto w-full"
                width="622"
                height="468"
                src="https://www.azion.com/static/images/uploads/thumbnailblogterraform440x343px-2.png?ims=622x" />
        </picture>
        <div class="content-center">
            <div class="flex gap-2">
                <Tag value="Featured" />
                <Tag value="Edge Computing" />
            </div>
            <h1 class="text-5xl my-8">
                Azion Listed in Forrester New Wave Report for Edge Development Platforms
            </h1>
            <p class="my-8">
                Here at Azion, we're very excited to announce that Azion Technologies has been named
                a “best fit for companies that need global edge performance…” in The Forrester New WaveTM:
                Edge Development Platforms, Q4 2021. 
            </p>
            <Button label="read more" />
        </div>
    </div>
</template>
<script setup>
    import Button from 'primevue/button';
    import Tag from 'primevue/tag';

    // TODO
    // implement props to receive I18N
</script>
