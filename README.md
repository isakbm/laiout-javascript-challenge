Avoid using any external libraries.
 
1. Fetch the challenge from /applicant/getFrontendChallenge. Note that the challenge contains a random secret that updates every minute.
2. Post your solution to /applicant/checkFrontendChallengeSolution before the random secret updates again.
3. If you posted the correct answer to the checkFrontendChallengeSolution endpoint, you will receive a final secret  that you should add to the application form.
 
> There is no limit on the number of attempts you can make.

One way to run code like this is with the command

`npx tsx main.ts`
