import CardGridBento from '../templates/grid-bento-block/index.vue';
import Card from 'primevue/card'

export default {
  title: 'Blocks/Grid Bento',
  component: CardGridBento,
  tags: ['autodocs'],
  argTypes: {
    gridType: String,
  }
};

const Template = (args) => ({
  components: { CardGridBento, Card },
  setup() {
    return { args }
  },
  template: `      <CardGridBento v-bind="args">
                    <template #item-0>
                      <Card class="h-full p-6">
                        <template #title> Simple Card </template>
                        <template #content>
                          <div class="flex gap-3 flex-col items-center">
                            <p class="m-0">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                              esse,
                              cupiditate neque
                              quas!
                            </p>
                            <Error404 />
                          </div>
                        </template>
                      </Card>
                    </template>
                    <template #item-1>
                      <Card class="h-full p-6">
                        <template #title> Simple Card </template>
                        <template #content>
                          <div class="flex gap-3 flex-col items-center">
                            <p class="m-0">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                              esse,
                              cupiditate neque
                              quas!
                            </p>
                          </div>
                        </template>
                      </Card>
                    </template>
                    <template #item-2>
                      <Card class="h-full p-6">
                        <template #title> Simple Card </template>
                        <template #content>
                          <div class="flex gap-3 flex-col items-center">
                            <p class="m-0">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                              esse,
                              cupiditate neque
                              quas!
                            </p>
                            <Error404 />
                          </div>
                        </template>
                      </Card>
                    </template>
                    <template #item-3>
                      <Card class="h-full p-6">
                        <template #title> Simple Card </template>
                        <template #content>
                          <div class="flex gap-3 flex-col items-center">
                            <p class="m-0">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                              esse,
                              cupiditate neque
                              quas!
                            </p>
                            <Error404 />
                          </div>
                        </template>
                      </Card>
                    </template>
                    <template #item-4>
                    <Card class="h-full p-6">
                      <template #title> Simple Card </template>
                      <template #content>
                        <div class="flex gap-3 flex-col items-center">
                          <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                            esse,
                            cupiditate neque
                            quas!
                          </p>
                        </div>
                      </template>
                    </Card>
                  </template>
                  <template #item-5>
                  <Card class="h-full p-5">
                    <template #title> Simple Card </template>
                    <template #content>
                      <div class="flex gap-3 flex-col items-center">
                        <p class="m-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                          numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                          esse,
                          cupiditate neque
                          quas!
                        </p>
                      </div>
                    </template>
                  </Card>
                </template>
                  </CardGridBento>`
})

export const _2Columns3Itens = Template.bind({});
_2Columns3Itens.args = {
  gridType: '2-columns-3-items'
}

export const _2Columns4Itens = Template.bind({});
_2Columns4Itens.args = {
  gridType: '2-columns-4-items'
}

export const _2Columns5Itens = Template.bind({});
_2Columns5Itens.args = {
  gridType: '2-columns-5-items'
}

export const _2Columns6Itens = Template.bind({});
_2Columns6Itens.args = {
  gridType: '2-columns-6-items'
}
