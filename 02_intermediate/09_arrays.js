const marvel_heros = ["ironman", "spiderman", "doctor-strange"]
const dc_heros = ["batman", "superman", "wonder-women"]

// to concat two arrays
const all_heros = marvel_heros.concat(dc_heros) // merges the two arrays and returns a new array, it wont change the arrays it creates new one

// merging by using spread operator
const heros = [...marvel_heros, ...dc_heros]

const array_depth = [1,2,3,[4,5,6],[7,8,[9]]]
const flat_array = array_depth.flat(Infinity) // returns the depth array to flat

const score1 = 100
const score2 = 200
const score3 = 300

const elements = Array.of(score1, score2, score3) // make an array by using the elements

const chars = Array.from("tarun") // convert it to an array