PlayerEvents.loggedIn(event => {
    event.player.tell(["Welcome to ", Text.gold("EMC: Reach For The Stars!"), " on 1.20.1"]);
    event.player.tell(["Report pack issues to ", Text.blue("the Discord").underlined().clickOpenUrl("https://discord.com/sm7YwM57cR").hover("Click to open"), "."]);
    event.player.tell(["Feel free to support me on ", Text.blue("KO-FI").underlined().clickOpenUrl("https://ko-fi.com/invxrt").hover("Click to open"), "."]);
})

