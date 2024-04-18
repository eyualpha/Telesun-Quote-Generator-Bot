function SettingWebHook() {

  const botToken = "add your bot token";
  const webhookUrl = "your given webhook from google appScript";
  Bot.setWebHook(botToken, { url: webhookUrl });
}
