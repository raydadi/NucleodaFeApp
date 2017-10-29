import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { EquipePastoralPage } from '../equipe-pastoral/equipe-pastoral';
import { ComoChegarPage } from '../como-chegar/como-chegar';
import { ComoContribuirPage } from '../como-contribuir/como-contribuir';
import { SobrePage } from "../sobre/sobre";
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  user = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController
  ) {
  }

  openEquipePastoral() {
    this.menu.close();
    this.navCtrl.push(EquipePastoralPage);
  }

  openComoChegar() {
    this.menu.close();
    this.navCtrl.push(ComoChegarPage);
  }

  openComoContribuir() {
    this.menu.close();
    this.navCtrl.push(ComoContribuirPage);
  }

  openSobre() {
    this.menu.close();
    this.navCtrl.push(SobrePage);
  }

  openLogin() {
    this.menu.close();
    this.navCtrl.push(LoginPage);
  }


}
