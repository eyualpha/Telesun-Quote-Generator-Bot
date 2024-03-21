function quote(ctx) {
  try {
    const response = UrlFetchApp.fetch("https://zenquotes.io/api/random");

    const data = JSON.parse(response.getContentText());

    const quote = data[0].q;
    const author = data[0].a;

    Logger.log(`Quote: ${quote} - Author: ${author}`);

    ctx.reply(
      `
    <code>${quote} </code>

    Author:    ${author}`,
      { parse_mode: "HTML" }
    );

    ctx.sendMessage({
      chat_id: ctx.chat.id,
      text: "✨✨•✨•✨•✨•✨•✨•✨✨",
      reply_markup: {
        inline_keyboard: [[{ text: "New Quote", callback_data: "quote" }]],
      },
    });
  } catch (error) {
    Logger.log("Error fetching quote:", error);
  }
}
