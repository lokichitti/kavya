import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
@Injectable()
export class AlertService{
    
    loading: any;
    constructor(
        private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
    ){

    }
    
    async presentAlert(title: string, content: string) {
        const alert = await this.alertCtrl.create({
            header: title,
            message: content,
            buttons: ['OK']
        })

        await alert.present()
    }

    async showLoading(): Promise<void> {
        this.loading = await this.loadingCtrl.create();
        await this.loading.present();
       }
       
       hideLoading(): Promise<boolean> {
        return this.loading.dismiss();
       }
       
       async handleError(error): Promise<void> {
        const alert = await this.alertCtrl.create({
        message: error.message,
        buttons: [{ text: 'Ok', role: 'cancel' }]
        });
        await alert.present();
       }
}