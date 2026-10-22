I have always called myself a "pseudo-techie". I have spent years around technology: running platforms, working with engineering teams, building reading apps for children, sitting in rooms where architecture diagrams were drawn on whiteboards. I could follow the conversation. I could ask decent questions. But I was not the person who wrote the code.

That has changed, at least a little. These days, alongside my role as Chief Academic Officer at Orchids — The International School, where I oversee academics across 120+ schools, I build real software myself with an AI coding assistant.

I want to write about what that has actually been like, because most of what I read on the subject is either breathless or dismissive, and my experience has been neither.

## What I have built

It helps to be concrete.

- A system that takes audio recordings of classes and turns them into teaching insights for teachers, scored against a rubric our subject experts wrote.
- A house-system and leaderboard module for schools, the kind of thing that makes inter-house competition visible and fun for students.
- Work on bringing several internal platforms together into one: admissions, recruitment and school operations had grown up as separate systems, and consolidating them is as much a thinking problem as a coding one.
- A daily puzzle app, built mostly because I love puzzles.
- This website.

None of these are toys. Some are meant for real people in real schools. That fact keeps me humble, and I will come back to it.

## Syntax was never the hard part

The biggest surprise was where the difficulty actually lives.

I assumed the hard part would be the code. It is not. The AI coding assistant writes code faster than I could ever learn to, and often better. What it cannot do is know what a principal needs to see on a Monday morning, or why a teacher would feel threatened by a particular word on a report, or which of three reasonable ways to model a school's timetable matches how schools actually run.

That is domain knowledge, and it turns out to be the scarce ingredient.

I have spent a long career in education. I know how academic years are structured, how assessments flow, what happens in a staff room when a new system is announced. When I describe a problem to the assistant, I am drawing on all of that. The quality of what comes back depends almost entirely on the quality of what I put in.

This has made me rethink something. For years the advice to people like me was "learn to code". I now think the more valuable thing is to understand your own field deeply enough to describe it precisely. The tools are getting better at the coding. They are not getting better at knowing your users.

## Most of the work is deciding

If I had to estimate where my time goes when I build something, very little of it is watching code appear. Most of it is writing clear specifications and making decisions.

What exactly should happen when a student moves between houses mid-year? Who is allowed to see which numbers? What does "done" mean for this feature? What do we deliberately leave out?

An AI coding assistant will happily build whatever you ask for. That is both its gift and its danger. If your thinking is fuzzy, it will produce fuzzy software very quickly. If you have not decided something, it will decide for you, and you may not notice until much later.

So I have become a much more careful writer of specs than I ever was as a manager. I write down the rules. I write down the edge cases. I write down what I am *not* building. It is the same discipline I learnt running a children's publishing house: say exactly what you mean, cut what does not serve the reader, and assume nothing will be understood that is not on the page.

## What changed with engineering teams

This is the part I think about most.

When a senior leader starts building software, there is an obvious risk. It can look like a vote of no confidence in the engineering team, or a shortcut around their processes, or simply an executive playing with expensive toys. I have tried hard to avoid all three, and I have not always got it right.

What I have found is that building things has given me far more respect for engineers, not less. I now see how much of their work is invisible: the handling of failures, the security, the testing, the thousand small decisions that make a system safe to run for years rather than for a demo. My prototypes rarely have that. Theirs must.

The most useful thing I can bring to an engineering conversation now is a working prototype. Not as a finished product, but as a conversation starter. Instead of a slide that says "we need a leaderboard for houses", I can show one. People can click on it, disagree with it, point out what I missed. A prototype settles questions that a document leaves open, and it often surfaces problems much earlier.

I have also had to learn when to hand off. There is a point in every project where it stops being an experiment and starts being something other people depend on. Past that point, it belongs with people whose job is to run it properly. Holding on too long is vanity.

And I try hard to be careful about where I ship. Building on my own machine is one thing. Pushing changes into a shared environment that others rely on is something else entirely. An AI coding assistant makes it very easy to move fast. It does not make it any less important to check, to ask, and to respect the systems and people around you.

## The risks I take seriously

I do not want to pretend this is all upside.

The code works, mostly, but I do not always understand every line of it. That is a real risk, and I manage it by keeping things small, reading what I can, testing what matters, and getting proper engineering eyes on anything important.

It is easy to confuse speed with progress. I can build three versions of something in an afternoon. That does not mean any of them is right.

And there is the quiet temptation to build instead of think. When making things becomes cheap, it is tempting to make things rather than have the harder conversation about whether they should exist at all.

## Still a pseudo-techie

So, am I a programmer now? No. I still think "pseudo-techie" is the right label, and I wear it with some pride.

What has changed is that the distance between an idea and a working thing has shrunk dramatically for people like me. Someone who understands a problem deeply can now get much closer to a solution on their own, and then bring something real to the people who will make it last.

For an educator, that feels familiar. The best teaching has never been about knowing all the answers. It has been about understanding the problem well enough to ask the right questions, and then doing the work. That turns out to be a decent description of building software too.
