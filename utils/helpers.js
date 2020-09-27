import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesome, MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';
import {white} from './colors';
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
