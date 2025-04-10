console.log('hi!');

function sleepIn(weekday, vacation){
    if (weekday == true) {
      else if (vacation == true) {
        return true;
      }
      return false;
    } else {
      return true;
  }

  function monkeyTrouble(aSmile, bSmile){
    if ((aSmile == true && bSmile == false) || (aSmile == false && bSmile == true) {
          return false;
        }
    return true;
  }

  function sumDouble(a, b){
    if (a ==b) {
     return (a+b)*2; 
    } else {
     return a+b;
    }
  }

  function frontBack(str){
    if (str.length == 0 || str.length == 1) {
     return str; 
    }
    first = str[0];
    last = str[str.length-1];
    return last + str.substr(1, str.length-2) + first;
  }

  function intMax(a, b, c){
    return Math.max(a, b, c);
  }

  function arrayCount9(nums){
    count = 0;
    for (i = 0; i < nums.length; i++) {
     if (nums[i] == 9) {
       count++;
     }
    }
    return count;
  }

  function array667(nums){
    count = 0;
    for (i = 0; i < nums.length; i++) {
     if (nums[i] == 6 && (nums[i+1] == 6 || nums[i+1] == 7) {
      count++;
     }
    }
    return count;
  }

  function squirrelPlay(temp, isSummer){
    if (isSummer) {
      if (temp <= 100 && temp >= 60) {
        return true
      } else {
        return false
      }
    } else if (temp >= 60 && temp <= 90) {
      return true
    } else {
      return false
    }
  }

  function withoutDoubles(die1, die2, noDoubles){
    if (noDoubles && die1 == die2) {
      if (die1 == 6) {
        return 1 + die2;
      } else {
        return die1 + 1 + die2;
      }
    } else {
      return die1 + die2;
    }
  }

  function greenTicket(a, b, c){
    if (a == b && b == c) {
      return 20;
    } else if (a == b || b == c || a == c) {
      return 10;
    } else {
      return 0;
    }
  }

  function blackjack(a, b){
    if (a > 21 && b > 21) {
      return 0;
    } else if (a > 21) {
      return b;
    } else if (b > 21) {
      return a;
    } else {
      return Math.max(a, b);
    }
  }

  function makeChocolate(small, big, goal){
    maxBigKilos = big * 5;
    remainingKilos = goal - Math.min(goal, maxBigKilos); 
    if (small >= remainingKilos) {
      return remainingKilos;
    }  
    return -1;
  }







