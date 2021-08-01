# GROO ASSIGNEMENT

## GOAL
We are simulating a small startup company.
You need to build the server side of a question asking platform.

In more details
Build a POC for a question-asking web server, supporting a REST API for the client side team to work with.
Starting with 2 types of questions: Poll & Trivia.
Poll - A question with no correct answer
Trivia - A question with 1 correct answer
In the future, our startup will probably implement additional question types.
Each question contains: a text and a list of answers. Trivia questions will also include the correct answer. (the question metadata)

Implement 3 APIs

Insert
* Input - The text and the list of answers (for trivia, also the correct answer)
* Output - The created question ID

Get
* Input -  The question ID
* Output - The question metadata

Vote
* Input - The question ID and the voted answer
* Output - Number of votes per answer﻿


No need to track user id or limit the number of votes.
You should make it work first but the design is important


## HOW TO RUN
- Download the folder and run npm start
- To get a question by ID: GET localhost:3000/questions/<insert_question_id>
- To post/add a question: POST localhost:3000/questions/, pass in the metadata (see schema below)
- To update a question: PUT localhost:3000/questions/<insert_question_id>, pass in the answer you vote for

 Question schema
 -------------------------

```
{
    questionType: String,
    question: String,
    answers: [
        {
            answer: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: false,
                default: false
            }, 
            votes: {
                type: Number,
                default: 0
            }
        }
    ]
}
```
