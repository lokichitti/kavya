import { Component, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { SmsRetriever } from '@ionic-native/sms-retriever';
@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.page.html',
  styleUrls: ['./send-sms.page.scss'],
})
export class SendSmsPage implements OnInit {

  constructor(
    private sms: SMS
    ) { }

  ngOnInit() {
    // Send a text message using default options
  this.sms.send('416123456', 'Hello world!');
  }

}
