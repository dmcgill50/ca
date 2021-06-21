/** This is our standard code assessment. 
 * Please take the time to complete it, and share it with us however you deem appropriate.

In the programming language of your choice, complete the following objective:

Given a string, count the number of unique vowels in each word, then remove all but the first and last
letters in each word. Place the number of unique values in between the remaining letters, then output
the full string. Leave any characters that are not alpha-numeric as they are.

Example: “The stray cat was cool.”
Becomes: “T1e s2y c1t w1s c1l.”

Treat this project as if it was code that you are going to deploy to a production environment.  
This exercise should take around an hour.   Thanks, and I look forward to getting to know you! 

Note: do not consider 'y' as a vowel for this excercise
*/

// Example as Class
export class Example {
  orig: string;
  expected: string;
  constructor(orig: string, expected: string) {
    this.orig = orig;
    this.expected = expected;
    console.log(`'Original: ${orig} Expected: ${expected}'`)
  }
}
