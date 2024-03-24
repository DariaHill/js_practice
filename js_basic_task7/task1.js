const phone = {
    brand: "Apple",
    model: "iphone 14pro",
    color: "Black",
    yourNumber: function(number){
        console.log(`${number}`);
    },

    sendMessage: function(message){
        console.log(`${message}`)
    }
}
phone.yourNumber("123-456-7890");
phone.sendMessage("Hello, how are you?");

const city = { 
    name: "Chernihiv",
    population: "35mln",
    country: "Ukraine",
    describe: function(){
        console.log(`Welcome to ${this.name}, population: ${this.population}.`)
    },
    getCityWeather: function(){
        console.log(`Fetching weather data for ${this.name}`)
    }
}
city.describe();
city.getCityWeather();

const group = {
    title: "Super",
    count: "5",
    goal: "chreerfull",
    mail: function(){
        console.log(`the best of the best ${this.title}`)
},
    advertising: function(){
        console.log(`Come to this ${this.title} concert`)
    }

}
group.mail();
group.advertising();