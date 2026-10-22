Most of us remember our school house. The colour of the badge, the name shouted across the field on sports day, the slightly irrational loyalty to people you barely knew simply because they wore the same colour. It's one of the oldest tools schools have for building belonging, and it still works.

Right now I'm working on something that tests whether it can work at a very different size. We're designing a single house system that can run across 120+ schools. It isn't finished. A first group of schools has signed up, and we're building, testing and adjusting as we go. I wanted to write down the thinking while it's still fresh, partly to clarify it for myself.

## Four houses, everywhere

In a single school, houses are local. They're often named after founders, or colours, or whatever someone decided decades ago. That's fine when the school is the whole world. It doesn't help much when you want a child in one city to feel part of something larger than their own building.

So we settled on four houses that will be the same in every participating school, each named after an Indian mountain range:

- **Nilgiris**, in indigo
- **Himalaya**, in ice blue
- **Aravalli**, in golden brown
- **Sahyadri**, in forest green

Each house has its own values and a motto. Mountain ranges felt right to me. They're old, they belong to the whole country rather than any one place, and each has its own character. A child doesn't need to have seen the Aravallis to feel something when they hear the name.

The point of keeping them identical across schools is simple. A Nilgiris student in one city shares an identity with a Nilgiris student in another, even if they never meet. That shared identity is the thing I'm most curious to watch develop. Belonging usually works at the scale of people you can see. I want to find out whether it can stretch further, and what helps it stretch.

## Why schools opt in

The obvious move in a network is to announce a new programme and roll it out everywhere. I chose not to do that here.

Schools opt in. Nobody is mandated. A first group has signed up, and others can join when they're ready.

Partly this is practical. A house system lives or dies on the energy of the people running it inside the school: the principal, the teachers who take charge of each house, the coordinator who keeps the points honest. If they don't want it, it becomes another set of forms. Children can tell the difference between a house competition that adults are excited about and one they're just administering.

Partly it's a belief about how change spreads in a network. In my experience, the schools that choose something early become its best advocates. Their teachers talk to other teachers. Their principals talk to other principals. A programme that grows by being wanted is slower at first but far sturdier than one that arrives by circular.

## Same house for life, fresh points every year

Two rules sit at the heart of the design, and they pull in different directions on purpose.

A student keeps their house for their entire time at school. Their identity is stable. A child who joins Sahyadri in a junior grade is still Sahyadri when they leave. That continuity matters. It's what lets the house become part of who they are rather than a label that changes every year.

Points, on the other hand, reset every year. Every house starts level. A house that had a poor year isn't carrying that weight forever, and a house that dominated last year has to earn it again. Stable identity, fresh competition.

## Rewarding the ones who turn up

The points structure is deliberately simple:

- 20 points for first place
- 15 for second
- 10 for third
- 5 for participation

That last line is the one I care about most.

In many house systems, points flow almost entirely to the children who are already gifted at something. The fastest runner, the best debater, the strongest singer. They win for their house again and again, and everyone else becomes an audience. I've seen how quickly a child who never places decides that the house competition isn't really for them.

Five points for participation is a small number, but it says something important. Showing up counts. Trying counts. A house with lots of children willing to have a go can compete with a house built around a few stars. I'd much rather design an incentive that nudges a shy child onto the stage than one that only celebrates the child who was always going to be there.

We're also including both team and individual events, and every win does two things at once. It recognises the individual student, by name, and it adds to their house. A child should be able to point to something they did. And they should feel that what they did lifted other people too.

## Three leaderboards, one record

This is the part where the pseudo-techie in me got quite excited.

We wanted leaderboards at three levels. Within a school, so children can see how their house is doing against the others down the corridor. Across the network, so a school can see how it compares. And a national house-versus-house ranking, so every Himalaya student everywhere can see how Himalaya is doing against Aravalli, Nilgiris and Sahyadri.

The temptation with something like this is to keep three separate scoreboards and update each of them. That's how errors creep in. Someone corrects a number in one place and forgets another, and soon nobody trusts any of them.

So instead, points are kept as an append-only ledger. Every award is a single entry: which student, which house, which school, which event, how many points. Entries are never edited. If a mistake is made, it's reversed with a new entry, and the original stays visible. Every leaderboard is simply a different way of adding up the same record.

I like this for two reasons. It makes the system very hard to quietly break. And it means every single point is auditable. If a parent or a child asks where their house's points came from, the answer is there, line by line. In a competition that children take seriously, fairness you can show is worth a lot.

## What comes next

The first phase is about getting the houses, the points and the leaderboards working well in the schools that have signed up. Later, we want to add event participation tracking and parent feedback, so we can understand not just who won but who took part, how often, and how families experience it.

There's a lot I don't know yet. I don't know how quickly a national house identity takes hold, or whether it needs more than a shared name and colour to feel real. I don't know which events will turn out to matter most to children. I'm fairly sure we'll get some things wrong and have to change them.

But the core idea feels right to me. Children want to belong to something. Schools have always known how to give them that inside their own walls. What I'm trying to find out is whether, with a bit of careful design, we can give a child in one corner of the country a reason to cheer for a child they've never met in another, just because they're both on the same mountain.
