import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestemunhosPage } from './testemunhos';

@NgModule({
  declarations: [
    TestemunhosPage,
  ],
  imports: [
    IonicPageModule.forChild(TestemunhosPage),
  ],
  exports: [
    TestemunhosPage
  ]
})
export class TestemunhosPageModule {}
