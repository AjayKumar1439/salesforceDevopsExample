trigger AccountRatingTrigger on Account (before insert, before update) {
    for(Account account : Trigger.New) {
    if (account.Industry != null &&
    (account.Industry == 'Technology' || account.Industry == 'Finance')){
    account.Rating = 'Hot';
      }
     }
    }