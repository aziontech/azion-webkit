export default {
  title: 'Elements/Text Styles',
  tags: ['autodocs']
}

export const Default = {
  render: () => ({
    template: `
            <div class="flex flex-col gap-12 max-w-lg surface-ground p-8">
                <div class="flex flex-col gap-1">
                    <div class="text-heading-1 text-color">Heading 1</div>
                    <div class="text-body-1 text-color-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nisl nec arcu tristique vehicula. (Body 1)
                    </div>
                </div>
    
                <div class="flex flex-col gap-2">
                    <div class="text-overline text-color-secondary">OVERLINE</div>
                    <div class="text-heading-2 text-color">Heading 2</div>
                    <div class="text-body-2 text-color-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nisl nec arcu tristique vehicula. (Body 2)
                    </div>
                </div>
    
                <div class="flex flex-col gap-2">
                    <div class="text-overline text-color-secondary">OVERLINE</div>
                    <div class="text-heading-3 text-color">Heading 3</div>
                    <div class="text-body-3 text-color-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nisl nec arcu tristique vehicula. (Body 3)
                    </div>
                </div>
    
                <div class="flex flex-col gap-2">
                                <div class="text-overline text-color-secondary">OVERLINE</div>
                    <div class="text-heading-4 text-color">Heading 4</div>
                    <div class="text-body-4 text-color-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nisl nec arcu tristique vehicula. (Body 4)
                    </div>
                </div>
    
                <div class="flex flex-col gap-2">
                    <div class="text-heading-5 text-color">Heading 5</div>
                    <div class="text-body-5 text-color-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nisl nec arcu tristique vehicula. (Body 5)
                    </div>
                </div>
    
            </div>
        `
  })
}
