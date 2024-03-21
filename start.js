function start(ctx) {

 ctx.sendMessage({

     chat_id: ctx.chat.id,
     text: "👋Hey, Welcome To Quote Generator Bot",
     reply_markup: {
      inline_keyboard: [
        [{ text: "View Quote", callback_data: "quote" }]]
        }
 });
}