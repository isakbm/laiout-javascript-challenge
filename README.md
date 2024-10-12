Avoid using any external libraries.
 
1. Fetches the challenge from /applicant/getFrontendChallenge. Note that the challenge contains a random secret that updates every minute.
2. Post your solution to /applicant/checkFrontendChallengeSolution before the random secret updates again.
 
> There is no limit on the number of attempts you can make.

One way to run code like this is with the command

`npx tsx main.ts`
