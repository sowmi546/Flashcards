
import {FLASHCARD_STORAGE_KEY} from './helpers.js'
import {AsyncStorage} from '@react-native-community/async-storage'
//import {getAllCards} from './helpers.js'

// export function getAllDecks(){
// return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).
// then(decks => Object.values(JSON.parse(decks))).
// catch(err => console.log(err))
//
// }


// export async function getAllDecks(){
//   try{
//
//   }
//   await AsyncStorage.setItem(FLASHCARD_STORAGE_KEY,JSON.stringify(getAllCards()) );
//   return getAllCards();
// }

export function getAllCards() {
  const cardsInfo = {
    "one" :{
      deckID : "one",
      title : 'React',
      questions: [
        {
          question : "react question1",
          answer : 'react answer1'
        },
        {
          question : "react question2",
          answer : 'react answer2'
        },
        {
          question : "react question3",
          answer : 'react answer3'
        }
      ]

    },
    "two" :{
      deckID : "two",
      title : 'Angular',
      questions: [
        {
          question : "angular question1",
          answer : 'angular answer1'
        },
        {
          question : "angular question2",
          answer : 'angular answer2'
        },
        {
          question : "angular question3",
          answer : 'angular answer3'
        }
      ]

    },
    "three" :{
      deckID : "three",
      title : 'Javascript',
      questions: [
        {
          question : "Javascript question1",
          answer : 'Javascript answer1'
        },
        {
          question : "Javascript question2",
          answer : 'Javascript answer2'
        },
        {
          question : "Javascript question3",
          answer : 'Javascript answer3'
        }
      ]

    },

  }
return cardsInfo;
}


export async function getAllDecks() {
  try {
    const results = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);

    if (results) {
      const data = JSON.parse(results);
      return data;
    } else {
      await AsyncStorage.setItem(
        FLASHCARD_STORAGE_KEY,
        JSON.stringify(getAllCards())
      );
      return getAllCards();
    }
  } catch (error) {
    // await AsyncStorage.setItem(
    //   FLASHCARD_STORAGE_KEY,
    //   JSON.stringify(getAllCards())
    // );
    return getAllCards();
  }
}
