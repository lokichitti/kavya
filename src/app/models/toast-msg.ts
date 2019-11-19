import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

export class ToastMsg {
    
    constructor(private toastCtrl: ToastController) {
  
    }
  
    async presentToast(message, show_button, position, duration) {
      const toast = await this.toastCtrl.create({
        message: message,
        showCloseButton: show_button,
        position: position,
        duration: duration
      });
      toast.present();
    }
}