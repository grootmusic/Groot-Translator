module.exports = {
    "filters": {
        "8d": require('./Filters/8d.js'),
        "bassboost": require('./Filters/bassboost.js'),
        "chipmunk": require('./Filters/chipmunk.js'),
        "daycore": require('./Filters/daycore.js'),
        "lofi": require('./Filters/lofi.js'),
        "nightcore": require('./Filters/nightcore.js'),
        "slowmo": require('./Filters/slowmo.js'),
        "terriblebass": require('./Filters/terriblebass.js'),
        "vaporwave": require('./Filters/vaporwave.js'),
        "vibrate": require('./Filters/vibrate.js')
    },
    "general": {
        "afk": require('./General/afk.js'),
        "help": require('./General/help.js'),
        "ping": require('./General/ping.js'),
        "premium": require('./General/premium.js'),
        "profile": require('./General/profile.js'),
        "uptime": require('./General/uptime.js'),
        "vote": require('./General/vote.js')
    },
    "giveaways": {
        "edit": require('./Giveaway/edit.js'),
        "end": require('./Giveaway/end.js'),
        "list": require('./Giveaway/list.js'),
        "quick": require('./Giveaway/quick.js'),
        "reroll": require('./Giveaway/reroll.js'),
        "start": require('./Giveaway/start.js')
    },
    "moderation": {
        "ban": require('./Moderation/ban.js'),
        "hackban": require('./Moderation/hackban.js'),
        "hide": require('./Moderation/hide.js'),
        "kick": require('./Moderation/kick.js'),
        "lock": require('./Moderation/lock.js'),
        "unban": require('./Moderation/unban.js'),
        "unhide": require('./Moderation/unhide.js'),
        "unlock": require('./Moderation/unlock.js'),
        "nuke": require('./Moderation/nuke.js')
    },
    "music": {
        "clear": require('./Music/clear.js'),
        "forward": require('./Music/forward.js'),
        "join": require('./Music/join.js'),
        "leave": require('./Music/leave.js'),
        "loop": require('./Music/loop.js'),
        "move": require('./Music/move.js'),
        "nowplaying": require('./Music/nowplaying.js'),
        "pause": require('./Music/pause.js'),
        "play": require('./Music/play.js'),
        "previous": require('./Music/previous.js'),
        "queue": require('./Music/queue.js'),
        "remove": require('./Music/remove.js'),
        "removeduplicate": require('./Music/removedups.js'),
        "resume": require('./Music/resume.js'),
        "rewind": require('./Music/rewind.js'),
        "search": require('./Music/search.js'),
        "shuffle": require('./Music/shuffle.js'),
        "skip": require('./Music/skip.js'),
        "volume": require('./Music/volume.js')
    },
    "playlist": require('./Playlist/playlist.js'),
    "setting": {
        "247": require('./Settings/247.js'),
        "announce": require('./Settings/announce.js'),
        "autoplay": require('./Settings/autoplay.js'),
        "blacklistchannel": require('./Settings/blacklistchannel.js'),
        "prefix": require('./Settings/prefix.js'),
        "requester": require('./Settings/requester.js'),
        "language": require('./Settings/language.js')
    },
    "common": require('./common.js'),
    "errors": require('./error.js'),
    "response": require('./response.js')
}