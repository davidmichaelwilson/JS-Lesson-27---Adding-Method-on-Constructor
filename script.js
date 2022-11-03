const hotel1 = {
	name: "Galactic Starcruiser",
	rooms: 100,
	stars: "⭐⭐⭐⭐",
	costPerNightForAdults: 8000,
	costPerNightForChildren: 4000
}

const hotel2 = {
	name: "Mos Eisley Superdeeelux",
	rooms: 22,
	stars: "⭐",
	costPerNightForAdults: 39,
	costPerNightForChildren: 59
}

function NewRepublicHolidayHotels(data) {
	this.name = data.name
	this.rooms = data.rooms
	this.stars = data.stars
	this.costPerNightForAdults = data.costPerNightForAdults
	this.costPerNightForChildren = data.costPerNightForChildren

  this.summarizeHotel = function(){
    const totalCost = ((this.costPerNightForAdults*2)+(this.costPerNightForChildren*2))
    console.log(`One night at the ${name} for two adults and two children will cost ${totalCost} galactic credits.`)
  }
}

const galacticStarcruiser = new NewRepublicHolidayHotels(hotel1)
const mosEisleySuperdeeelux = new NewRepublicHolidayHotels(hotel2)

galacticStarcruiser.summarizeHotel()
mosEisleySuperdeeelux.summarizeHotel()







// function NewRepublicHolidayHotels(data) {
// 	this.name = data.name
// 	this.rooms = data.rooms
// 	this.stars = data.stars
// 	this.costPerNightForAdults = data.costPerNightForAdults
// 	this.costPerNightForChildren = data.costPerNightForChildren

//   this.summarizeHotel = function() {
//     const totalPrice = this.costPerNightForAdults * 2 + this.costPerNightForChildren * 2
//     console.log(`One night at the ${this.name} for two adults and two children will cost ${totalPrice} galactic credits.`)
//   }
// }