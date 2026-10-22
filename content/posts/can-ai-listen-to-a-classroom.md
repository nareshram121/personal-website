Every school leader I know believes in classroom observation. A trained observer sits at the back of a room, watches a lesson unfold, takes notes, and later sits down with the teacher to talk about what went well and what could be better. Done properly, it is one of the most useful things a school can do for its teachers.

The trouble is that it does not scale. Across 120+ schools, there are far more lessons happening every day than there are people who could ever watch them. So observation becomes occasional. A teacher might be observed a handful of times in a year, and those few lessons end up standing in for everything else they do.

Over the past while, I have been building something to see whether that gap can be narrowed. The question I started with was simple: can an AI model listen to a classroom and say something useful about the teaching?

The honest answer, I have come to believe, is "partly, and that part is worth having".

## What we already had

The most important realisation came early, and it was not about technology at all.

Our school network already had good systems around classroom observation. There were dashboards showing how observations were going. There were processes for turning feedback into improvement plans. Academic leaders knew how to read the results and act on them. All of that machinery was built, tested and trusted.

What was missing was a scalable *input*. The pipes were there. There just was not enough water flowing through them, because human observation can only produce so much.

That reframed the whole project. I was not trying to build a new way of evaluating teachers. I was trying to feed an existing, well-understood process with more evidence, more often, without asking people to do impossible amounts of extra work.

## How it works

The setup is straightforward. Classes are audio-recorded. The recording is transcribed. Then an AI model reads the transcript and scores it against a rubric.

The rubric is the heart of it, and it was not written by me or by a machine. Subject-matter experts wrote it. It covers 21 subjects and around 120 parameters in total, because good teaching in a mathematics lesson does not sound the same as good teaching in a language lesson or a science practical.

We set one rule that shaped everything else: **a criterion only counts if you can hear it.**

That sounds obvious, but it rules out a lot. Eye contact, movement around the room, what is written on the board, whether a child at the back has quietly stopped paying attention: none of this is available in audio. A human observer would notice all of it. The AI cannot, and it should not pretend to. So any parameter that depended on seeing rather than hearing was either rewritten or dropped.

What remains is still rich. You can hear whether a teacher checks for understanding. You can hear the kinds of questions being asked, whether students get time to think, whether their answers are built upon or brushed aside, whether a concept is explained in more than one way.

Each parameter is rated from 1 to 5. The ratings are weighted and rolled into a score out of 10. And every score comes with two things attached: evidence quotes from the transcript that justify it, and two to four action points the teacher can actually work on.

The evidence matters enormously. A number on its own invites argument. A number with the exact moment in the lesson that produced it invites reflection.

## The mistake that taught me the most

The first version did not work this way.

Initially, I used free-text prompts for each subject. Roughly: here is a transcript of a lesson, please give feedback on the teaching. The output was often surprisingly good to read. It was fluent, sensible, sometimes even insightful.

It was also useless at scale.

Every report was shaped a little differently. One would focus on questioning, another on pacing, another on tone. You could not compare two teachers, or the same teacher across two months, or two schools against each other. You could not add any of it up. Nothing fed into a dashboard, because there was nothing consistent to feed.

Forcing the AI to work through a fixed, structured rubric changed that. The output became a little less lyrical and a great deal more useful. Once every lesson is scored on the same parameters in the same way, you can aggregate. You can spot that a whole subject team is strong on explanation but weak on checking understanding. You can see whether a training programme actually moved anything.

I think this lesson applies well beyond classrooms. Readable is not the same as usable. If you want AI output to inform decisions across an organisation, structure beats eloquence.

## Two steps, not one

Another design choice that turned out to matter: transcription and scoring are separate.

Transcription is done once per class. Scoring runs on top of the stored transcript and is cheap to repeat. That means when the experts improve the rubric, and they will, because no rubric is right the first time, we can simply re-score past lessons against the new version. We do not have to record anything again.

It also makes the system easier to inspect. If a score looks odd, you can go back and read exactly what was said.

## What it costs, and what it really costs

Running this comes to a few cents per class. I mention it because people often assume cost is the barrier with AI in schools. It is not.

The real constraint is trust.

A teacher who feels watched by a machine will not grow from the experience. They will perform for it, or resent it, or both. So how the results are shown matters at least as much as how they are produced.

## Who sees what

We were deliberate about this.

Teachers see their own results first. We call them "teaching insights", and they are framed for growth: here is what you did well, here is the evidence, here are a few things to try next. The teacher is the first audience, not the last.

Principals see coverage for their own school. Which classes have been recorded, how insights are trending, where support might be needed.

A central academic team sees patterns across schools. Not to rank individuals, but to understand where training should go and which practices are spreading.

These insights are never shown to parents. That is not a technical limitation. It is a line we chose.

## The limits, honestly

I want to be clear about what this is not.

Audio misses a lot. It misses the warmth of a smile, the child who needed a quiet word, the moment a teacher read the room and changed course without saying anything. Some of the best teaching I have ever seen was nearly silent.

An AI model also gets things wrong. It can misread sarcasm, mishear a student, or give too much credit to a well-phrased question that went nowhere.

So the role I see for this is narrow and, I hope, honest. It should inform coaching, not replace observers. It gives a coach and a teacher something concrete to talk about, drawn from many more lessons than anyone could sit through. The judgement, the conversation, the encouragement: those stay with people. Humans remain in the loop, and they should.

Can AI listen to a classroom? It can hear more than I expected and less than a good observer. Used as a source of evidence rather than a verdict, that turns out to be quite enough to be useful.
