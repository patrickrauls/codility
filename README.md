# Working through the codility curriculum

### Day One: Iterations - Binary Gap

[Find my answer on codility here](https://app.codility.com/demo/results/trainingYY9V9T-6CE/)

It took me awhile to arrive at the approach I would take to solve this problem. At first, I considered iterating through the binary representation of the argument, and doing something like incrementing some variable for every zero until I found a one. While I assume I could have developed something pretty efficient that way, it was more accessible to my brain to take a different approach. A gap is a difference, the difference between here and there. Difference means subtraction. It turned out to be passably efficient, so I went with it.

I iterate through the binary representation of the number. When doing this, I really only care about times when the value in that iteration is 1. When it is, I'm mostly interested in how many times I've iterated, we'll call that i. Each time if I subtract from my current i my previous i that I've been holding in a variable we'll call lastHit, and subtract one from that, I have a binary gap. Now I have only to return the highest of those gaps.

I declare a binaryGap of 0 at the outset. Then I replace binaryGap in each iteration only if the gap I find in that iteration is higher than binaryGap. I can return binaryGap at the end for an efficient solution.
