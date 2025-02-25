// rules.js

const Rules = {
  hero: {
    title:
      '- **Title:** Titles should be between 40 and 60 characters, or a maximum of 3 lines in 1440px (width) for better readability.',
    description:
      '- **Description:** Descriptions should be between 80 and 160 characters, ensuring they are concise and informative, without overwhelming the user.',
    overline:
      '- **Overline:** Overlines should not exceed 32 characters to maintain their auxiliary purpose.',
    image:
      '- **Image:** A image need to be included to enrich the content. Ensure that the option enhances the message without distracting from the main purpose of the Hero.',
    imageVideo:
      '- **Image/Video:** A image or video can be included to enrich the content. Ensure that the option enhances the message without distracting from the main purpose of the Hero.',
    cards:
      '- **Cards:** It is recommended to limit the number of cards to a maximum of 4, with each card title limited to 30 characters and the card description to 60 characters.',
    cta: '- **Actions (CTA):** Limit the number of CTA buttons to a maximum of 2. The first should be a primary button, and the second a secondary button. Ensure button labels are concise, with a maximum of 20 characters, and all links should be valid.',
    form: '- **Forms:** Use clear and descriptive placeholders for fields, and avoid including too many fields. Keep the form as practical as possible to increase the likelihood of user submission.',
    logos:
      '- **Logos:** Try to put multiples of 4 logos in logo-content-block. Ensure the svg logos are balanced and with the currentColor property in fill. The title is optional, when used try to limit to the maximum of 50 characters.',
    banner:
      '- **Banner:** The banner is optional. Use it to inform some important news about the product or company, try to keep the text between 40 and 100 characters for better banner esthetic.',
    avatar: '- **Avatar:** The avatar need to have a photo of the person face, the name and role.'
  },
  heroProduct: {
    overline:
      '- **Overline:** The overline must always mention the pillar where the product is categorized (e.g., "Build", "Secure", "Deploy", "Observe") or if it is a "Solution".',
    title:
      '- **Title:** The title should clearly state the product’s value proposition, summarizing its key benefits in a concise way. Also, the product name needs to appear above in gray. The title should be between 40 and 60 characters.',
    cta: '- **Actions (CTA):** Limit to 2 CTA buttons. The primary button should lead to key product actions, and the secondary button should offer additional options. Labels should not exceed 20 characters.',
    image:
      '- **Image:** The image must clearly reflect a key feature of the product, ensuring visual coherence with the product’s message and benefits.',
    list: '- **List:** The list of benefits should contain short and direct items, with a clear focus on the main features and advantages of the product. Each item title should not exceed 30 characters, and each description should not exceed 80 characters.'
  },
  section: {
    overline:
      '- **Overline:** Overlines should not exceed 32 characters to maintain their auxiliary purpose.',
    title:
      '- **Title:** Titles should be between 40 and 120 characters, or a maximum of 3 lines in 1440px (width) for better readability.',
    description:
      '- **Description:** Descriptions should be between 80 and 280 characters, ensuring they are concise and informative, without overwhelming the user.',
    cta: '- **Actions (CTA):** Limit the number of CTA buttons to a maximum of 2. Ensure button labels are concise, with a maximum of 20 characters, and all links should be valid.',
    navigation:
      '- **Navigation:** Navigations is like a buttons, ensure the labels are concise, with a maximum of 20 characters, and all links should be valid. ',
    logos:
      '- **Logos:** Try to put multiples of 2 logos in logo-content-block. Ensure the svg logos are balanced and with the currentColor property in fill.',
    cards:
      '- **Cards:** Cards highlight important information and can have an overline and a title, both following the same rules outlined above.',
    cardsProducts:
      '- **Product Cards:** The product name should be used as the title, followed by a brief description of up to 240 characters. Ensure that all product and add-ons links are valid.',
    cardsRelease:
      "- **Carousel Cards:**  The tag can only be filled with either 'Tech Article' or 'Award'. The card title must not exceed 180 characters. Each card should include a valid link leading to an article with detailed information. Ensure that the logo functions well in both dark and light themes, and the description below the logo is concise yet provides additional details about the source and date. Additionally, ensure the call-to-action (CTA) is clear and follows the established CTA guidelines.",
    cardsNavigation:
      '- **Cards Navigation:** Follow the same rules above for title and description. Cards navigation can have a multiple links, try to not exceed more of 6.',
    bigNumbers:
      '- **Big Numbers:** Each number should include a concise title and a brief description (maximum 60 characters) explaining its significance. The title should highlight key achievements or statistics. Ensure that all icons are clear, visually support the metric, and maintain consistency with the overall visual style.',
    cardsCases:
      '- **Cases Cards:** Each card should include a recognizable logo, a concise description (up to 240 characters) highlighting the key benefits and outcomes, and a valid link to the full success story. Ensure that the description clearly conveys the value of the solution in a brief and engaging manner. The tag should reflect the type of success, and the logo should be visually consistent across dark and light modes. The CTA link should direct users to detailed case study pages.',
    image: '- **Image:** A image is required. Ensure that the option enhances the message.',
    list: '- **List:** A clear and concise title (up to 50 characters), and a brief description (up to 240 characters) that summarizes the key point. Ensure that the icon used is relevant to the content. Avoid of more of 6 itens.',
    avatars:
      "- **Avatars:** Each avatar should include a clear image (minimum size of 160x160px). Ensure that the name and role of the person are displayed below the avatar. All avatars should link to the individual's LinkedIn profile, and the link should open in a new tab.",
    link: '- **Link:** Links buttons can be used to gave more details for the section content that already existis in another. Try to be clear and dont use more than 6 words to compose the label.',
    form: '- **Forms:** Use clear and descriptive placeholders for fields, and avoid including too many fields. Keep the form as practical as possible to increase the likelihood of user submission.'
  },
  banner: {
    overline:
      '- **Overline:** Overlines should not exceed 32 characters to maintain their auxiliary purpose.',
    title:
      '- **Title:** Titles should be between 40 and 60 characters, or a maximum of 3 lines in 1440px (width) for better readability.',
    description:
      '- **Description:** Descriptions should be between 80 and 160 characters, ensuring they are concise and informative, without overwhelming the user.',
    cta: '- **Actions (CTA):** Limit the number of CTA buttons to a maximum of 2. Ensure button labels are concise, with a maximum of 20 characters, and all links should be valid.',
    image: '- **Image:** A image is required. Ensure that the option enhances the message.',
    list: '- **List:** A clear and concise title (up to 50 characters) that summarizes the key point. Ensure that the icon used is relevant to the content.'
  }
}

export default Rules
