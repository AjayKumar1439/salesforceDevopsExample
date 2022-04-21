trigger ContactCustomTriggerExample on Contact (after insert) {
    List<Account> accListToInsert = new List<Account>();
    for(Contact con : Trigger.New) {
        //check if account is null on contact
        if(con.AccountId == null ) {
            Account acc = new Account();
            //Add all required field on Account
            acc.Name = con.LastName;
            acc.Phone = con.Phone;
            accListToInsert.add(acc);
        }
    }
    if(!accListToInsert.isEmpty()){
    insert accListToInsert;
    }
} 