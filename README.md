# Working through the codility curriculum

### Day One: Iterations - Binary Gap

[Find my answer on codility here](https://app.codility.com/demo/results/trainingYY9V9T-6CE/)

It took me awhile to arrive at the approach I would take to solve this problem. At first, I considered iterating through the binary representation of the argument, and doing something like incrementing some variable for every zero until I found a one. While I assume I could have developed something pretty efficient that way, it was more accessible to my brain to take a different approach. A gap is a difference, the difference between here and there. Difference means subtraction. It turned out to be passably efficient, so I went with it.

I iterate through the binary representation of the number. When doing this, I really only care about times when the value in that iteration is 1. When it is, I'm mostly interested in how many times I've iterated, we'll call that i. Each time if I subtract from my current i my previous i that I've been holding in a variable we'll call lastHit, and subtract one from that, I have a binary gap. Now I have only to return the highest of those gaps.

I declare a binaryGap of 0 at the outset. Then I replace binaryGap in each iteration only if the gap I find in that iteration is higher than binaryGap. I can return binaryGap at the end for an efficient solution.

### Day Two: Arrays - Cyclic Rotations

[Find my answer on codility here](https://app.codility.com/demo/results/trainingNFFAXM-EXF/)

I'm sure there's a more concise way of answering this, but this is what I got. To rotate an array clockwise, iterate through the array. Subtract the amount of rotation, we'll call that the offset, from the current index. Obviously this presents a problem. At the beginning of the array you get negative indices which result in undefined values being added the array you are returning. To address this you can add the length of the array to your calculation and then take the modulus of the array's length like so:

(index - offset + array.length) % array.length

This saves you from ever getting a negative index and wraps the end of the array around to the front.

### Day Three: Arrays - Odd Occurrences In Array

[Find my answer on codility here](https://app.codility.com/demo/results/trainingDP7ANZ-NXG/)

So this one's a doozy. This problem is all about finding the odd element out. In other words, eliminating every element in an array that has a matched pair. I'm essentially crossing out elements when I find its pair. Whenever I cross things out, I love using the [bitwise exclusive OR operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#(Bitwise_XOR)). There's a lot to be said about [bitwise operators in general](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators). I'll just leave it at the fact that these operators convert their operands into their binary representations and then operate on those representations, returning the result in the original base representation.

Essentially the operator allows me to keep a running tab of everything that doesn't have a match, and, provided there is only one of those, which the prompt guarantees me there will be, I return that result in the end. I'll unpack this a bit more in a later post.

### Day Four: Time Complexity - Frog Jump

[Find my answer on codility here](https://app.codility.com/demo/results/trainingUCPUTY-BHE/)

Not much to this one. The premise of the lessons for this unit seem to amount to finding ways to minimize the amount of loops you do in addressing these problems. For the frog jump problem it was immediately apparent to me that no loops would be necessary. I could simply divide the difference between point X and Y by the distance D the frog jumps. I would then return the result rounded up to the nearest integer. It seemed to check out fine.

### Day Five: Time Complexity - Permutation Missing Element

[Find my answer on codility here](https://app.codility.com/demo/results/trainingNHFY3Z-G7W/)

I use our beloved bitwise XOR again on this problem. That's becuase this problem is variation on the odd occurrences in an array problem. Consider that being held in the array is a permutation starting from 1 to n + 1, but missing one number. Because every array has a built in permutation known as its indices, I can consider those indices (each index plus one as it is zero indexed but our permutation starts from one) as the matches to the integers. I end up with one odd occurrence, the index (plus one) that is missing a matching integer that would complete the permutation.