import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Injectable()
export class AlertService{
    
    constructor(
        private alertController: AlertController
    ){

    }
    async presentAlert(title: string, content: string) {
        const alert = await this.alertController.create({
            header: title,
            message: content,
            buttons: ['OK']
        })

        await alert.present()
    }
}