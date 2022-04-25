import { LightningElement, track, wire, api } from 'lwc';
import getContactsRelatedToAccount from '@salesforce/apex/LwcController.getContactsRelatedToAccount';
import getOpportunityRelatedToAccount from '@salesforce/apex/LwcController.getOpportunityRelatedToAccount';

export default class AccountRelatedDatatable extends LightningElement {
    @api recordId;
    @track contacts;
    @track columns = [
        { label: 'First Name', fieldName: 'FirstName', type: 'text' },
        { label: 'Last Name', fieldName: 'LastName', type: 'text' },
        { label: 'Email', fieldName: 'Email'},
        { label: 'Title', fieldName: 'Title'}
    ];

    @track opportunity;
    @track columnsopp = [
        {label:'Name',fieldName:'Name', type:'text'},  
        {label:'Stage',fieldName:'StageName', type:'text'},  
        {label:'Amount',fieldName:'Amount', type:'currency'},
        {label:'Close Date',fieldName:'CloseDate'}
      ];

      @wire(getOpportunityRelatedToAccount,{accId: '$recordId'})
      WireOpportunityRecords({error,data}){
        if(data){
            this.opportunity = data;
            this.error = undefined;
        }else{
            this.error = error;
            this.opportunity = undefined;
        }
    }

    @wire(getContactsRelatedToAccount, {accId: '$recordId'}) 
    WireContactRecords({error, data}){
        if(data){
            this.contacts = data;
            this.error = undefined;
        }else{
            this.error = error;
            this.contacts = undefined;
        }
    }
}