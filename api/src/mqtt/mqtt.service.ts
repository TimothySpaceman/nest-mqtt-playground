import { Injectable } from '@nestjs/common';
import { MqttClient, connect } from 'mqtt';

@Injectable()
export class MqttService {
    public readonly mqtt: MqttClient;

    constructor() {
        this.mqtt = connect("mqtt://broker:1883", {
            clean: true,
            username: "user1",
            password: "1234",
        });

        this.mqtt.on('connect', () => {
            console.log('Connected to MQTT server');
        });

        this.mqtt.subscribe('/from-device', { qos: 1 });

        this.mqtt.on('message', function (topic, message) {
            console.log('New message received!');
            console.log(message.toString());
        });
    }
}