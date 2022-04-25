import { LightningElement,track } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {
    
    //data binding
    fullname='zeroo to herooo'
    title="qwerty"

    Handler(event){
        this.title = event.target.value
    }

    //@track property
    @track address={
        city:"vizag",
        phone:989
    }
    trackhandler(event){
        this.address.city = event.target.value
        /*without track property
        this.address = {...this.address,"city":event.target.value}*/
    }

    //getter
    users=["sai",'minnu',"priya"]
    num1=10
    num2=20

    get firstUser(){
        return this.users[0].toUpperCase()
    }
    get sum(){
        return this.num1+this.num2
    }
}