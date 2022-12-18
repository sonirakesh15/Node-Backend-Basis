Steps to run project :

1.  npm i
    2 npm start or npm run start

Steps to run test :

1.  npm run test

Explaination :

1. User.js in controller contains a printInfo method that is accepting two query params and checking whether person is eligible for appliying driving licence or not.

get request for 'http://localhost:3000/api/user/print?name=joe&age=30'

2. Test cases are written in test folder in user.test.js file. First two test cases will pass as they are written correctly. TO show the error in test cases, You need to un comment third test case which is written with error as expected output is wrong.

Thank you. Have a nice day 🙂
