/* You are supposed to use this code to obtain a final secret that you should add
 * to the application form.
 *
 * This code is bug riddled on purpose, your task is to fix bugs
 * and obtain the final secret.
 *
 * It helps to be familiar with fetch, json, and javascript!
 *
 * You are expected to use TypeScript / JavaScript.
 *
 * INSTRUCTIONS:
 *
 *    Avoid using any external libraries.
 *
 *    You should create code that
 *
 *    1. Fetches the challenge from /applicant/getFrontendChallenge
 *       Note that the challenge contains a random secret that updates every minute.
 *
 *    2. Post your solution to /applicant/checkFrontendChallengeSolution
 *       before the random secret updates again.
 *
 *    There is no limit on the number of attempts you can make.
 *
 * Your perseverance and problem solving ability will be tested.
 *
 * During the interview process you may be asked to present your solution.
 *
 * Best of luck!
 */
async function main() {
  const baseURL = "https://dev.laiout.app/api";
  const url = baseURL + "/applicant/getFrontendChallenge";

  // NOTE: this is just a semi broken starting point, fix it
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // TODO... should we add a body?
  });

  const data = await res.json(); //... hope this is safe

  console.log("DATA:", JSON.stringify(data)); // ... parsing data can be tricky

  // TODO: send solution to the checkFrontendChallengeSolution endpoint adn receive the final secret
}

main();
