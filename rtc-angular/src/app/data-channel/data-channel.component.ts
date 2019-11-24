import { Component, OnInit } from '@angular/core';

declare var DataChannel: any;
declare var io: any;

@Component({
  selector: 'app-data-channel',
  templateUrl: './data-channel.component.html',
  styleUrls: ['./data-channel.component.scss']
})

export class DataChannelComponent implements OnInit {
  channel: any;

  constructor() {
    // this.channel = new DataChannel('gabesz', {});
    this.channel = new DataChannel();
  }

  ngOnInit() {
    // console.log(this.channel);
    this.channelEvent();

    this.channel.openSignalingChannel = (config) => {
      console.log('openSignalingChannel: ', config);
    };
  }

  channelEvent() {
    this.channel.onopen = (userId) => {
      console.log('channel - onopen: ', userId);
    };
    this.channel.onmessage = (msg, userId) => {
      console.log('channel - onmessage: ', userId, msg);
    };
    this.channel.onleave = (userId) => {
      console.log('channel - onleave: ', userId);
    };
    this.channel.ondatachannel = (event) => {
      console.log('channel - ondatachannel: ', event);
    };

  }

  channelConnect() {
    console.log('channelConnect');
    this.channel.connect('gab-channel');
  }

  channelOpen() {
    console.log('channelOpen');
    this.channel.open('gab-channel');
  }

  channelSend() {
    console.log('channelSend');
    this.channel.send({name: 'gabesz'});
  }

}
