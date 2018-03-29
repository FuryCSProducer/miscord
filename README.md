# Miscord <img src="../gh-pages/img/icon.png" width="60">
> Simple Facebook Messenger to Discord bridge for Node.js build on [facebook-chat-api](https://github.com/Schmavery/facebook-chat-api) and [discord.js](https://discord.js.org)

**[Website](https://miscord.js.org/)** &nbsp; **[Donate](#donate)** &nbsp; **[FAQ](../../wiki/faq)**

<br>

<a href="https://miscord.js.org/">
  <img src="../gh-pages/img/screenshot.png" style="max-width: 80%">
</a>

## Setup

- Install Git - download [here](https://git-scm.com/download/win), make sure to add Git to PATH
- Install Node.js - download [here](https://nodejs.org/en/download/) (**version 8.x.x at least**)
- Create new Discord application [here](https://discordapp.com/developers/applications/me)
- Click "new app", choose a name for your application, confirm by clicking "create app"
- Create a Bot User on your app's page
- Open "OAuth URL Generator", choose scope `bot`
- Add permissions: `Manage Channels` and whole `Text Permissions` group, then copy link to your browser
- Add your bot to chosen guild(s)

**Try not to create channels in bots category. If you really need, make sure the channel hasn't got only numbers in its topic.**  
**Make sure you have "Show website preview info from links pasted into chat" enabled in "Text & Images" Discord settings**

## Usage

*If you don't know what Docker is, use "Local install"*

**Local install**
```bash
git clone https://github.com/Bjornskjald/miscord # or download a zip from GitHub repo and extract it to folder of your choice
cd miscord # if you download the zip you might need to provide a full path, like C:\Users\User\Downloads\miscord-master
npm install
```

Copy/rename "config.example.json" to "config.json" and fill it with needed info:
- Discord token
- Facebook username/email
- Facebook password

Everything else is optional.

**Docker install**
```bash
docker run -d -e MESSENGER_LOGIN=facebook@username.or.email -e MESSENGER_PASSWORD=yourfacebookpass -e DISCORD_TOKEN=token Bjornskjald/miscord
``` 

**Configuration**

| Environmental variable |  Value in config  | Description | Optional | Default value |
| ---------------------- | ----------------- | ----------- | -------- | ------------- |
| `MESSENGER_USERNAME` | `messenger.username` | Facebook username | :heavy_multiplication_x: | none |
| `MESSENGER_PASSWORD` | `messenger.password` | Facebook password | :heavy_multiplication_x: | none |
| `DISCORD_TOKEN` | `discord.token` | Discord token | :heavy_multiplication_x: | none |
| `MESSENGER_FORCE_LOGIN` | `messenger.forceLogin` | Forces logging in to Facebook (mostly caused by latest logins review) | :heavy_check_mark: | `false` |
| `DISCORD_GUILD` | `discord.guild` | Discord guild | :heavy_check_mark: | (first guild available) |
| `DISCORD_CATEGORY` | `discord.category` | Category of channels on Discord | :heavy_check_mark: | `messenger` |
| `DISCORD_SEND_NOTIFICATIONS` | `discord.sendNotifications` | Enables sending notifications when appending to existing embeds (see <a href="../../issues/71">#71</a>) | :heavy_check_mark: | `true` |
| `DISCORD_NO_EMBEDS` | `discord.noEmbeds` | Shows messages as plaintext | :heavy_check_mark: | `false` |
| `DISCORD_RENAME_CHANNELS` | `discord.renameChannels` | Enables renaming channels to FB chat names | :heavy_check_mark: | `true` |
| `MESSENGER_SHOW_USERNAME` | `messenger.showUsername` | Enables showing Discord username in Facebook messages | :heavy_check_mark: | `true` |
| `MESSENGER_BOLD_USERNAME` | `messenger.boldUsername` | Makes all Discord usernames on Facebook bold (see <a href="../../issues/88">#88</a>) | :heavy_check_mark: | `false` |
| `MISCORD_CHECK_UPDATES` | `checkUpdates` | Enables update checking | :heavy_check_mark: | `true` |
| `MISCORD_LOG_LEVEL` | `logLevel` | Log level (see <a href="https://github.com/npm/npmlog#loglevelprefix-message-">here</a>) | :heavy_check_mark: | `info` |

**Filtering**:
- to show **only** the channels you chose, fill the whitelist (`MESSENGER_FILTER_WHITELIST`)
- to **don't show** the channels you chose, fill the blacklist (`MESSENGER_FILTER_BLACKLIST`)

Whitelist/blacklist have to be in the format of an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
If you use enviromental variable, separate your thread IDs with a colon.
Use Discord-supported names or thread IDs. ([Where to find thread ID?](../../wiki/faq#where-to-find-thread-id))

**Custom mapping**:  
If you want to map multiple channels to one Facebook chat, you can use custom mapping. (`custom` in the config)  
Format: `"<facebook thread id>": "<discord channel name>"`  
Example:  
```javascript
{
  "100015962055831": "chat",
  "100015872888779": "backup"
}
```  
Enviromental variable (`MISCORD_CUSTOM`): `100015962055831:chat,100015872888779:backup`

**Usage**
```bash
npm start
```

The bot will automatically create channels corresponding to threads on Messenger, sending message to these channels will send it to Messenger

## Troubleshooting

- Restart the bridge
- Remove appstate.json file
- Check your internet connection
- Make sure no text in config has trailing spaces
- Login with a browser to check for pending login reviews
- If this doesn't work, create new issue [here](../../issues) with your error log

## Donate

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6MVRTWBXNH8J6)

**BTC**: <a href="bitcoin://36tci1gptNyPhvSJkrHg2EdVmH82cwW56R">36tci1gptNyPhvSJkrHg2EdVmH82cwW56R</a>  
**ETH**: 0xe841ef23e1b94ed2122d248377e9fbeffebaad35  
**ZEC**: t1ULEWqCCmVxmaxsRn5KGRXnDmeBY68uMWL
