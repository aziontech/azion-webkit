// rules.js

const Rules = {
  general: {
    overline: '- **Overline:** Overlines should not exceed 32 characters to maintain their auxiliary purpose.',
  },
  hero: {
    title: '- **Title:** The title should be between 40 and 60 characters, or a maximum of 2 lines for better readability.',
    description: '- **Description:** The ideal length for the description is between 80 and 160 characters, ensuring it remains concise and informative, without overwhelming the user.',
    overline: '- **Overline:** Overlines should not exceed 32 characters to maintain their auxiliary purpose.',
    video: '- **Video:** A video or image can be included to enrich the content. Ensure the video enhances the message without distracting from the main purpose of the Hero.',
    cards: '- **Cards:** It is recommended to limit the number of cards to a maximum of 4, with each card title limited to 30 characters and the card description to 60 characters.'
  }
};

export default Rules;
