import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Momentum Mod 2018</span>
    <div class="socials">
      <a href="https://github.com/momentum-mod/" target="_blank" class="ion ion-social-github"></a>
      <a href="https://steamcommunity.com/groups/momentummod" target="_blank" class="ion-steam"></a>
      <a href="https://twitter.com/momentummod" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.reddit.com/r/MomentumMod" target="_blank" class="ion-social-reddit"></a>
      <a href="https://www.moddb.com/mods/momentum2" target="_blank" class="ion-wrench"></a>
      <a href="https://discordapp.com/invite/wQWkRb6" target="_blank">
        <img src="assets\\images\\Discord-Logo-White.png" height="35px" width="35px"></a>
      <a href="https://trello.com/momentum_mod" target="_blank">
        <img src="assets\\images\\trelloo.png" height="35px" width="35px"></a>
    </div>
  `,
})
export class FooterComponent {
}
