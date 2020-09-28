
import {FLASHCARD_STORAGE_KEY} from './helpers.js'
import {AsyncStorage} from '@react-native-community/async-storage'
import {getAllCards} from './helpers.js'

// export function getAllDecks(){
// return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).
// then(decks => Object.values(JSON.parse(decks))).
// catch(err => console.log(err))
//
// }


export async function getAllDecks(){
  await AsyncStorage.setItem(FLASHCARD_STORAGE_KEY,JSON.stringify(getAllCards()) );
  return getAllCards();
}
