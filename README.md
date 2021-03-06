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

### Day Six: Time Complexity - Tape Equilibrium

[Find my answer on codility here](https://app.codility.com/demo/results/trainingRK9DQ3-T3T/)

I'm not super-impressed with the readability or concision of this answer, but I solve the problem with linear complexity, so I guess it's fine. Perhaps I'll improve on it later. The most accessible way I could think to handle this problem without nesting loops was to start with a few variables. An accumulator I start with the first element in the array, a decumulator I start as equal to the sum of the remaining elements, an equilibrium I start as the absolute value of the difference of the accumulator and decumulator, and a temporary variable I call difference. For arrays of only 2 elements I can simply return the equilibrium as I've already done that math. For longer arrays I need to loop through the remaining elements. As I iterate through the remainder of the array, I add the present element to the accumulator and subtract it from the decumulator. I plug the difference of those two in the variable difference, then reassign equilibrium to the lesser of difference and equilibrium. Return equilibrium at the end should give me the correct answer at linear complexity.

### Day Seven: Counting Elements - Permutation Check

[Find my answer on codility here](https://app.codility.com/demo/results/trainingEBFGEG-VXT/)

Thank you magic of the bitwise XOR. Here we have another variation on permutations. This time we're checking if an array is a permutation. As I mentioned before, the indices of an array are a permutation is you add one to each index. Therefore, checking if the elements of an array create a permutation is as straightforward as matching them against each index of the array, plus one. We do that with our friend bitwise XOR. It basically accumulates the elements in the variable we're setting it equal to, shedding the element and its match when that match is incorporated in the variable. Basically it does the work for us. We need only to adjust our return value to make sure we're returning 1 if the xor is zeroed out, and zero otherwise.

### Day Eight: Counting Elements - Frog River One

[Find my answer on codility here](https://app.codility.com/demo/results/training764WSY-2CJ/)

This one gave me a little more trouble than I'd care to admit. In the end I decided to go with a round about way of deduping the array by flipping the indices and elements and putting them in a new array with no overwriting when the array has already been populated at that index. Then I return the maximum value in the new array, provided there are no undefined values in the array, in which case I return -1 because the Frog can't make it across.

### Day Nine: Counting Elements - Missing Integer

[Find my answer on codility here](https://app.codility.com/demo/results/trainingJPPW87-YS7/)

Often these problems come down to figuring out what to ignore and what to take some action on. In this case the core of my answer is using a reduce to iterate through a sorted array, starting my accumulator at the smallest value my answer could have, 1, and incrementing the accumulator only when the element is equal to the accumulator. In the end I return the accumulator for a solution with linear time complexity.

### Day Ten: Counting Elements - Max Counters

[Find my answer on codility here](https://app.codility.com/demo/results/trainingNZBABJ-G9M/)

I took this problem pretty literally and set up actual counters the logged every occurrence of a particular integer. I also have a couple of variables I'll use to mark my highest counter `ceiling` as well as what my highest counter was at during the latest max counter operation `floor`. `floor` is useful during my loop only in terms of when I need to set it because the trigger of an element equal to `N + 1` has occurred. I also need to read it when I'm incrementing a counter in case that counter doesn't meet the floor. In that case I would set the counter equal to `floor + 1`. If I keep up with my changes in that way, I can set each element of the array to the Max of the floor and element at the end for passably efficient solution.

### Day Eleven: Prefix Sums - Passing Cars

[Find my answer on codility here](https://app.codility.com/demo/results/trainingYMGVGU-W85/)

A pattern I noticed is that, because the cars are repressented as `0`s and `1`s the sum of the entire array is equal to the amount of cars heading west. But in order for those cars to contribute to a pair they need to be preceeded by a car heading east. As such I only need to care about the subset of the array beginning with the first `0`. After that I can sum the array. As I step through the array I know each time I find a `0` I can add the sum to my total of `passingCars`, and each time I find a `1` I need to decrement my sum. In the end I need to cap my passing cars at 1 billion and return a `-1` in that case, or else return the value in `passingCars`.

### Day Twelve: Prefix Sums - Genomic Range Query

[Find my answer on codility here](https://app.codility.com/demo/results/trainingKUD6TP-25Q/)

This unit appears to be all about the efficiency that can be gained by totaling an array at the outset and executing operations afterward. I achieve this by first chronicling the change in nucleotide counts at each element in the array and store that in a variable called `genome`. After that I subtract the totals at the index indicated by `Q` from the totals at the index indicated by `P`. If there is an A I return 1, C, 2, and so forth.

### Day Thirteen: Prefix Sums - Minimum Average Two Slice

[Find my answer on codility here](https://app.codility.com/demo/results/trainingU52VY4-8QA/)

Start by considering what the definition of a slice is. In this case it is, at minimum, 2 elements on up to 10,000, max. But really anything larger than 3 elements can be divided in to multiple slices. If the slices are equal in average, the second slice is irrelevant to the question. If they are unequal in average, one slice is, by definition, greater in average and therefore irrelevant to the answer. With that established, I only need to care about slices of 2 or 3 elements. So I loop through the array checking the averages at each iteration of the element and its next 1 or 2 peers, returning the index only if the averages I find are smaller than any previous average I've found. It's not a particularly readable solution the way I've coded it, but I do achieve linear time complexity.

### Day Fourteen: Prefix Sums - Count Div

[Find my answer on codility here](https://app.codility.com/demo/results/trainingMYCNS3-ABQ/)

No loops necessary on this one. it can be done in constant time. The code isn't exactly self-documenting so let me walk you through it. Derive the lowest divisible integer in the range by subtracting the remainder of the first argument, `A` and the denominator, `K`, from `A`, then adding `K`, unless `A` is divisible by `K`, in which case `A` is obviously the lowest integer divisible by `K`. Now that we've found the lowest divisible integer, `lowest`, subtract it from the second argument, `B`. This gives you the range in which you can find divisible integers. Divide this by `K`, round down and add 1 to account for the `lowest` and you have your answer in constant time. 

### Day Fifteen: Sorting - Distinct

[Find my answer on codility here](https://app.codility.com/demo/results/trainingKBVZWM-SSV/)

Not much to this one. Use your preferred method of deduping an array and grab the length of that. I like using [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set). They only store unique values so it sort of does the work for me. I then return the size property of the set and I'm all done.

### Day Sixteen: Sorting - Max Product of Three

[Find my answer on codility](https://app.codility.com/demo/results/trainingWK89JG-C5H/)

I think I've seen this one before. Sort the array. Generally the highest product you can get from 3 elements in a sorted array will be from the last 3 elements. The exception would be when there is at least 1 positive number and at least 2 negative numbers. In that case the product of those 3 could be numbers could be larger than the product of the of the 3 last elements. In a sorted array, those 3 elements would be the first 2 elements and the last element. Therefore I can return the max of the product of the last 3 elements and the product of the last and first 2 elements.

### Day Seventeen: Sorting - Triangle

[Find my answer on codility](https://app.codility.com/demo/results/training7JMRE2-RVM/)

I start by ruling out some of the constraints as irrelevant, superfluous, or inevitable given the other constraints. First, the constraint that the index `P` is at least `0` and less than `Q`, and `Q` is less than `R`, and `R` is less than the length, `N`, of the given array. Any set of 3 valid, unique indices, satisfies this, given that the values at these indices will be treated the same--which they will. Therefore the constraint is irrelevant except to inform me that `P`, `Q`, and `R` must be unique, valid indices.
From here I like to sort the array. This makes it easier for me to rule out other constraints. When observing three elements in a sorted array, the sum of the later two elements will always be greater than the first. In other words `A[Q] + A[R] > A[P]` is inevitable. I needn't think about it. Because the array is sorted, I know that `A[Q]` is at least as big as `A[P]`. Now I can check if `A[P] + A[Q] > A[R]`, and `return 1` if it is true, knowing that the third constraint, that `A[P] + A[R] > A[Q]`, is superfluous as it is always true if the second constraint is true.
Because a triangular triplet would occur in adjacent elements before anywher else, as those numbers are closer together, I can place this conditional in a loop. Outside of the loop I `return 0`.

### Day Eighteen: Sorting - Number of Disc Intersections

[Find my answer on codility here](https://app.codility.com/demo/results/trainingNJV9XP-HHA/)

Spent a lot more time than I had to on this one because I mistyped a test. In the end I achieved linear complexity on this problem by cataloguing all the starts and ends of discs and keeping track of the `outstanding` discs, that is, discs that are still in contact with the number line at that index. There's a little equation I use, `n(n + 1) / 2` which allows me to derive how many intersections are added based on how many discs are `outstanding` and `start`ing at a given index. When I add these together, I'm able to find the `answer`. Because the prompt topps out at `10000000`, I suspect because at that size it becomes difficult to discern between a small `O(n^2)` and a large `O(n*log(n))`, not a problem at linear complexity, I simply add a conditional in the end that converts numbers above the limit to `-1`.

### Day Nineteen: Stacks and Queues - Brackets

[Find my answer on codility here](https://app.codility.com/demo/results/training2BSGWQ-VRJ/)

I'd like to think this is a pretty accessible approach. With such a limited set of possible characters, I plugged them all into a couple of arrays, one for `openers`, and one for `closers`. I also create a temporary variable to hold the index whenever a character in the string is `found` in the `openers` array. The last thing I create is my stack to hold the next closing bracket I `expect` to see. I then loop through the string taking three possible actions. If I find that the character is contained inside the `openers` array, I know the next closing bracket I `expect` to see must correspond to it. I push that corresponding closing bracket on to my `expect` stack. If the character is not an opening bracket it must be the final closing bracket in the `expect` stack in order for it to be properly nested. In that case I can remove the final closing bracket from the expects stack. If the character is neither an opening bracket nor the closing bracket I was `expect`ing, the I know the string is not properly nested and I can `return 0`. Finally, if after the loop there are still characters remaining in my `expect` stack, I know I didn't fully retreat from the nesting and I can `return 0`, otherwise, I `return 1`, to achieve my solution at linear complexity.

### Day Twenty: Stacks and Queues - Fish

[Find my answer on codility here](https://app.codility.com/demo/results/trainingY77SZH-EF4/)

Might take another pass at this one because I don't like doing loops inside of loops. But this particular case isn't so bad as it still ends up at linear complexity because of the way things get eliminated. Essentially I separate the fish into stacks, one for upstream and one for downstream. If it happens to be an upstream fish, I make it fight all the previous downstream fish and the loser gets popped off the stack. I then return the length of the two stacks.

### Day Twenty-one: Stacks and Queues - Nesting

[Find my answer on codility here](https://app.codility.com/demo/results/trainingNBHX3C-VK6/)

Straightforward enough. Make an empty `stack`. Loop through the string. If you come across a `'('`, `push` it onto the `stack`. Otherwise, as long as the `stack` isn't already empty, `pop` the last value off the `stack`. If the `stack` is already empty and you come across a character that is not a `'('`, you can `return 0` as you know the string `S` is improperly nested. In the end if there is anything left in the `stack`, `return 0` because it's improperly nested, otherwise, `return 1`.

### Day Twenty-two: Stacks and Queues - Stone Wall

[Find my answer on codility here](https://app.codility.com/demo/results/trainingE9BBMH-T99/)

Hold an accumulator of `stones` in a variable you'll return at the end. You'll also need an empty `queue`. Loop through the array `H`. If the `stone` is greater than the previous stone, increment `stones`. If the `stone` is less than the previous stone, pop it off the `queue` and continue popping off the end of the `queue` until you hit a stone that isn't larger than `stone`. If you completely deplete the `queue`, or if the final stone in the `queue` is less than `stone` increment `stones`. At the end of the iteration, push the `stone` on to the `queue`. `return stones` at the end and you should achieve the solution in linear time.

### Day Twenty-three: Leader - Equi Leader

[Find my answer on codility here](https://app.codility.com/demo/results/trainingWBU4TF-4XU/)

You'll need a few accumulators here. An array to hold the equi `leaders`, an object to hold the possible `candidates` for leader, and a number `seen`, set to `0`, that we'll increment each time we see a leader when looping through the array the second time. I also used a prefix sum I called `remaining`, as well as a variable `leader` which I will set to the leader when I find it. Loop through the array incrementing the value at the element property of `candidates`. Because we're not populating the object with all the properties beforehand, we'll need to set the value to `1` if it's `undefined`. We'll also check to see if the candidate we just incremented has reached the magic number of more than half the array. If it has, we set `leader` to that element. Now the count at `candidate[leader]` is our prefix sum. As we loop through the array again, we check if the element is equal to the `leader`. If it is, increment our `seen` counter and decrement our prefix sum `remaining`. Then, if more than half of the elements we've `seen` are `leader`s, and the `remaining` `leader`s make up more than half of the elements remaining in the array, we've happened upon an equi leader, so we push that onto our `leaders` array. `return leaders.length` for a solution at linear time complexity. 

### Day Twenty-four: Leader - Dominator

[Find my answer on codility here](https://app.codility.com/demo/results/trainingMD7JTJ-K6X/)

One way of going about this is to first find the `dominator` by counting up all the occurences of each integer in a forEach and also checking in that iteration if you've reached the threshold of more than half the length of the given array `A`. If you get there, plug it in to `dominator`. Outside the loop `return` the `indexOf` the `dominator`. That should get you the solution in linear time complexity.

### Day Twenty-five: Maximum Slice Problem - Max Sum Slice

[Find my answer on codility here](https://app.codility.com/demo/results/trainingW83NGW-52B/)

With these continuous slice problems it's basically always loop through the array and give the option of either adding the element to an existing max or min, or starting over with the element. This problem is no different. Create a couple of variables, one to hold the reigning `max` and the other to hold the current `slice`. In my case I started each as equal to the first element in the array. Loop through the array. Because I started with the first element, I start my loop at the second element as seen with the `i = 1` in my for loop statement. In the loop each `slice` has to either build on itself by adding the current element `A[i]` or start over by setting the slice equal to `A[i]`. Then I reassign `max` to equal the maximum of `max` and `slice`. `return max` for a solution in linear time complexity.

### Day Twenty-six: Maximum Slice Problem - Max Profit

[Find my answer on codility here](https://app.codility.com/demo/results/trainingQ8BDMX-QDY/)

This problem assumes you can sell instantly after buying, placing the minimum possible profit at 0. Set a variable `maxProfit` to `0`. Set a `buy` variable to the first element in array `A`. Now loop through the array, everything but the first variable as that's already included in `buy`. If you reassign `maxProfit` to the greater of itself and the current element `A[i]` minus `buy`, and afterward reassign `buy` to the minimum of the current element `A[i]` and `buy`, `maxProfit` will hold the highest possible profit after the loop is done.

### Day Twenty-seven: Maximum Slice Problem - Max Double Slice Sum

[Find my answer on codility here](https://app.codility.com/demo/results/training3RJWFZ-BY4/)

The only way I could think to do this is to create a couple of arrays, `prefixes` and `suffixes` the same length as our given array `A` and full of `0`s, and a variable `max` we'll return in the end. For now `max` will be equal to `0`, as a triplet can be made to include no elements. Now we need to do 3 loops, the first one will find the maximum sum possible at every `i` using the same method of the previous two problems, and plug it into our `prefixes`. Next we'll do the same but in reverse and plug the answers into our `suffixes`. Now here is where the magic happens. In our final loop we'll use a similar method to find the maximum combination of prefix and suffix, making sure that they are separated by an element, as that's how these triplets work.

### Day Twenty-eight: Prime and Composite Numbers - Count Factors

[Find my answer on codility here](https://app.codility.com/demo/results/trainingDPSVHV-J4B/)

When counting factors consider that every factor of a number `N` has a counterpart on the other side of the square root of `N`, unless that factor happens to be the square root of `N`, in which case its counterpart is itself. So for example, `36`'s factors include its square root, `6`, as well as four pairs of numbers that straddle `6`, `1` and `36`, `2` and `18`, `3` and `12`, and `4` and `9`. Knowing this fact allows us to achieve a more efficient algorithm. Start by finding the square root of `N`, we'll call it `sqrt`. If `sqrt % 1 === 0`, or in other words, if `sqrt` is an integer and not a floating point, we cant start our `factors` counter with a `1` in it, to account for `sqrt`. Otherwise it starts with `0`. Now run a for loop with `i === 1` (the smallest possible factor), and continue looping so long as `i < sqrt`. In our loop we make use of the modulus operator, which returns the remainder of dividing it's left operand by the right one. If it returns `0` it is a factor, and because we know each factor lower than `sqrt` has a counterpart, we can increment `factors` by `2`. `return factors` for a solution at square root time complexity.

### Day Twenty-nine: Prime and Composite Numbers - Min Perimeter Rectangle

[Find my answer on codility here](https://app.codility.com/demo/results/trainingSQ3FGD-5HB/)

[Also thought I'd solve it in java here](https://app.codility.com/demo/results/trainingV35UB8-6Q6/)

The smallest perimeter rectangles are squares. And we want to find the smallest perimeter. So we want to find the closest thing to a square we can get with only integers as sides. The most efficient way is to start from the closest integer in the square root, `i` and work `i` down to `1` in a while loop. `if` there is a remainder when dividing `N` by `i`, it is not a factor of the area `N` and therefore can not be multiplied with another integer to create the area. Decrement `i` in this case. `else`, you have found your first side. Add it to `N / i`, which is necessarily your other side, and multiply by `2` and you have found your solution in square root time complexity.

### Day Thirty: Prime and Composite Numbers - Peaks

[Find my answer on codility here](https://app.codility.com/demo/results/training7H85F5-BHM/)

### Day Thirty-one:

### Day Thirty-two:

### Day Thirty-three: