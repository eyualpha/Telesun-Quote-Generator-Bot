function SettingWebHook() {

  const botToken = "6786892817:AAHCVE_tl-2ffsUp0Eh0Gm_ZA3N8s9ujqkE";
  const webhookUrl = "https://script.google.com/macros/s/AKfycbzN9lBeVVUpJYiaMPB7ZQ0FuReQcMw2aVxfp22-zQtJgR8k_glieHb3dwfh7Q16u2808w/exec";
  Bot.setWebHook(botToken, { url: webhookUrl });
}
