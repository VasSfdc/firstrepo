import { LightningElement, api } from 'lwc';

export default class FirstLWC extends LightningElement {
    @api recordId;
    message='new';
}