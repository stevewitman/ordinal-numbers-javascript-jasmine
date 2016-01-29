var Source = require('../src.js');

describe("ordinal()", function() {

  it("returns '1st' when provided 1 as input", function() {
    expect(Source.ordinal(1)).toEqual("1st");
  }); 

  it("returns '2nd' when provided 2 as input", function() {
    expect(Source.ordinal(2)).toEqual("2nd");
  });

  it("returns '3rd' when provided 3 as input", function() {
    expect(Source.ordinal(3)).toEqual("3rd");
  });

  it("returns number + 'st' when number ends in 1", function() {
    expect(Source.ordinal(521)).toEqual("521st");
  }); 

  it("returns number + 'nd' when number ends in 2", function() {
    expect(Source.ordinal(422)).toEqual("422nd");
  });

  it("returns number + 'rd' when number ends in 3", function() {
    expect(Source.ordinal(23)).toEqual("23rd");
  });

  it("does not return n + 'st' when n ends in 11", function() {
    expect(Source.ordinal(511)).not.toEqual("511st");
  });

  it("does not return n + 'nd' when n ends in 12", function() {
    expect(Source.ordinal(12)).not.toEqual("12nd");
  });

  it("does not return n + 'rd' when n ends in 13", function() {
    expect(Source.ordinal(13)).not.toEqual("13rd");
  });

  it("returns n + 'th' for all other numbers", function() {
    expect(Source.ordinal(4)).toEqual("4th");
    expect(Source.ordinal(311)).toEqual("311th");
  });
});

describe("ordinal_up_to()", function() {

  it("returns a string with ordinal values for each number from 1 up to n", function() {
    expect(Source.ordinal_up_to(5)).toEqual("1st, 2nd, 3rd, 4th, 5th");
    // expect(Source.ordinal_up_to(7)).toEqual("1st, 2nd, 3rd, 4th, 5th, 6th, 7th");
  });

}); 

describe("ordinal_between()", function() {

  it("returns a string with ordinal values for each number from n1 up to n2", function() {
    expect(Source.ordinal_between(10, 14)).toEqual("10th, 11th, 12th, 13th, 14th");
    // expect(Source.ordinal_between(20, 24)).toEqual("20th, 21st, 22nd, 23rd, 24th");
  });

});



//  ordinal(n)
//
//   input  output
//     1    '1st'
//     2    '2nd'
//     3    '3rd'
//     4    '4th'
//     5    '5th'
//     6    '6th'
//     7    '7th'
//     8    '8th'
//     9    '9th'
//    10    '10th'
//    11    '11th'
//    12    '12th'
//    13    '13th'
//    14    '14th'
//    15    '15th'
//    16    '16th'
//    17    '17th'
//    18    '18th'
//    19    '19th'
//    20    '20th'
//    21    '21st'
//    22    '22nd'
//    23    '23rd'
//    24    '24th'
//    25    '25th'

//   111    '111th'
//   112    '112th'
//   113    '113th'

//   123    '123rd'










// var s=["th","st","nd","rd"], v=n%100;
// return n+(s[(v-20)%10]||s[v]||s[0]);







