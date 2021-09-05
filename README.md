# StudQ

![Sample FIR](StudQ_logo.png?raw=true "FIR")

## Inspiration

During the online classes, teachers find it hard to keep track of the order in which students join for project presentations or for viva or any events. On the other hand, students keep waiting for their turn for a long time. We want to improve the user experience for both the students and teachers so that they don't get drained and frustrated waiting for long hours. Our hack is synonymous with the real-life queue system where people have to get a token and wait for their turn in an orderly manner. 

## What it does

So here comes **StudQ** to the **rescue**. It is a chrome extension that can be used by the teacher in online meetings, where the order of students for interacting with the teacher/professor will be decided in an orderly manner based on the time when they enter the “code” word in the chat. .Teachers can check out who's next and students can look up their position in the queue through the website. On completion of interaction with a student, the teacher can remove the student from the queue, they can also control when to start and end the queue.


## How we built it

1.  JS, HTML, CSS - For the webpages and to access the Google meet chat
2. Firebase - To maintain the real time database
3. GoDaddy - To host the website


## Challenges we ran into

1. Figuring out how to connect firebase to chrome extension

2. Understanding the dynamics of HTML, CSS, Javascript to chrome extension was tricky

3. Finding out the css selector for chat elements

4. Connecting the firebase libraries to the chrome extension


## Accomplishments that we're proud of

1. Discovered what local storage is and used it to save passwords
2. Built our first chrome extension, developed a web application to interface the same and make the data collected publicly available


## What we learned
1. Develop a chrome extension and the different use cases
2. CRUD operations on the Realtime database provided by Firebase
3. Concepts of browser storage

## What's next for StudQ
1. For the next version of StudQ, we plan to obtain the email ids of the students in the chat rather than the code word and send an email notification to alert them of their turn
2.Voice support to answer queries such as “who is next”, “when is my turn” .
3. Approximate calculations on the time slot for a student based on previous trends 

## Video Demonstration

https://youtu.be/_BQlp4Z-X_U


