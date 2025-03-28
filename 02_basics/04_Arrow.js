const user={
    username:"Dheeraj",
    Price:1000,

    WelecomeMessage:function(){
        console.log(`${this},Welcome to the website`)
       //console.log(this);
    }
}

user.WelecomeMessage()
user.username="Raju"
user.WelecomeMessage()
