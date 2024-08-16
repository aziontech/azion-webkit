import SelectLang from "../../templates/selectlang"

export default {
  title: 'Components/SelectLang',
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
