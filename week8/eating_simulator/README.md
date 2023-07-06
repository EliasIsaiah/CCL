# Eating Simulator

## You're hungry. You're on a low sugar diet because your doctor told you you're pre-diabetic. In front of you are three dishes.
* Dish A: a turkey sandwich
* Dish B: a plate of fish sticks
* Dish C: a slice of carrot cake

each dish has a sugar gram count. you must choose the dish that has the lowest sugar content.

You select:
* Dish A -> Play audio: ding ding ding! you win. ✅
* Dish B -> Play audio: crying baby ❌
* Dish C -> Play audio: farm animals ❌

after the selection is made, display each dish's sugar content, and reveal a button that will load the next three meal options.

```javascript
turkeySandwich {
    id: "sandwich",
    name: "turkey sandwich",
    sugarContent: 30,
    image: "sandwich.PNG",
    audio: "win.mp3",
}
fishSticks {
    id: "fish",
    name: "fish sticks",
    sugarContent: 10,
    image: "fish_sticks.PNG"
    audio: "BabyCrying.mp3"
}
cake {
    id: "cake",
    name: "carrot cake",
    sugarContent: 30,
    image: "cake.PNG"
    audio: "Farm-Animals.mp3"
}
```