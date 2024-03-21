function doPost(e) {
  const token = "6786892817:AAHCVE_tl-2ffsUp0Eh0Gm_ZA3N8s9ujqkE";
  const bot = new Bot.Telesun(token,e);

  bot.Start(start);
  bot.Action("quote",quote);

  bot.Text((ctx)=>{
  ctx.reply(`
🤖
Please only use the specified commands! 
For new quote click start command or New-Quote button.
`)
    })
  }
