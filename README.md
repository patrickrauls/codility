# Working through the codility curriculum

### Day One: Iterations - Binary Gap

[Find my answer on codility here](https://app.codility.com/demo/results/training89B54Q-WYJ/)

It took me awhile to arrive at the approach I would take to solve this problem. At first, I considered iterating through the binary representation of the argument, and doing something like incrementing some variable for every zero until I found a one. While I assume I could have developed something more efficient that way, it was more accessible to my brain to do something where I held on to the indices of each one I found in some array, then returned the highest difference between two adjacent indices in the array, minus one. It turned out to be passably efficient, so I went with it. The next time I run through this problem, I'll try to get it to a more efficient solution.