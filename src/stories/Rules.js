// rules.js

const Rules = {
  general: {
    overline: '- **Overline:** Overlines should not exceed 32 characters to maintain their auxiliary purpose.',
  },
  hero: {
    title: '- **Title:** The title should be between 40 and 60 characters, or a maximum of 3 lines in 1440px (width) for better readability.',
    description: '- **Description:** The ideal length for the description is between 80 and 160 characters, ensuring it remains concise and informative, without overwhelming the user.',
    overline: '- **Overline:** Overlines should not exceed 32 characters to maintain their auxiliary purpose.',
    image: '- **Image/Video:** A image or video can be included to enrich the content. Ensure that the option enhances the message without distracting from the main purpose of the Hero.',
    cards: '- **Cards:** It is recommended to limit the number of cards to a maximum of 4, with each card title limited to 30 characters and the card description to 60 characters.',
    cta: '- **Actions (CTA):** Limit the number of CTA buttons to a maximum of 2. The first should be a primary button, and the second a secondary button. Ensure button labels are concise, with a maximum of 20 characters, and all links should be valid.',
    forms: '- **Forms:** Use clear and descriptive placeholders for fields, and avoid including too many fields. Keep the form as practical as possible to increase the likelihood of user submission.',
    logos: '- **Logos:** Try to put multiples of 4 logos in logo-content-block. The title is optional, when used try to limit to the maximum of 50 characters.',
    banner: '- **Banner:** The banner is optional. Use it to inform some important news about the product or company, try to keep the text between 40 and 100 characters for better banner esthetic.'
  },
  heroProduct: {
    overline: '- **Overline:** The overline must always mention the pillar where the product is categorized (e.g., "Build", "Secure", "Deploy", "Observe") or if it is a "Solution".',
    title: '- **Title:** The title should clearly state the product’s value proposition, summarizing its key benefits in a concise way. Also, the product name needs to appear above in gray. The title should be between 40 and 60 characters.',
    cta: '- **Actions (CTA):** Limit to 2 CTA buttons. The primary button should lead to key product actions, and the secondary button should offer additional options. Labels should not exceed 20 characters.',
    image: '- **Image:** The image must clearly reflect a key feature of the product, ensuring visual coherence with the product’s message and benefits.',
    list: '- **List:** The list of benefits should contain short and direct items, with a clear focus on the main features and advantages of the product. Each item title should not exceed 30 characters, and each description should not exceed 80 characters.'
  }
};

export default Rules;
