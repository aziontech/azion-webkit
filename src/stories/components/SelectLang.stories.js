import SelectLang from "../../templates/selectlang"

export default {
  title: 'Azion Web Kit/Components/Select Lang',
  component: SelectLang,
  tags: ['autodocs'],
  argTypes: {
  }
}

export const Default = {
  args: {
    i18nPages: [
      {
        langPrefix: "en",
        slug: "/", // link
        lang: "English"
      }
    ],
    lang: "en"
  }
}
