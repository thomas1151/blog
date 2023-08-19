---
title: 'Amazon Web Services'
# image: '/assets/components/hello/face.png'
subtitle: 'A placement year working on mission critical software for one of the biggest tech companies in the world.'
summary: "Lead a project to design, develop and provision production-grade infrastructure for an ElasticSearch-based observability stack - over 3 million daily log entries in over 27 regions. Worked with the best team to implement features and fix bugs in some of RDS' mission critical software."
url: 'https://aws.amazon.com/rds/'
bgColor: "bg-amazon-orange"
borderColor: "bg-amazon-orange"
bgAccentColor: "bg-red-300"
coverImage: 'cover.png'

---

>  June 2020 - July 2021

## Introduction

Amazon Web Services is a leading cloud infrastructure provider with over 200 services and an estimated 45% share of the IaaS (Infrastructure as a Service) cloud computing market (in 2020, according to Gartner).

A foundational service of these offerings is AWS’ Relational Database Service (RDS), which allows customers to manage database instances of varying size and engine in 21 geographical regions around the world. With support for mainstream database engines such as MySQL and Postgres, AWS aims to be the central provider for all database infrastructures - either via integration with business’ existing solutions or through a total migration to the AWS cloud. Alongside the availability of de-facto existing engine types, AWS also has also created a custom database engine; Aurora, designed to be a cloud-first (and therefore cheaper and faster when deployed on AWS). Through compatibility with Postgres and MySQL, the intention is to create a new cloud-centric database engine for all relational database applications.

A core tenet (Leadership Principle) at Amazon is the concept of Earning Trust. With such a large percentage of global internet traffic relying on at least one Amazon Web Services offering, ensuring that adherence to high-availability SLAs (Service Level Agreements) for all services and features is crucial. The expectation of an AWS client, whether it be Netflix, HSBC, or Twitter, is access to a platform of always-on services with high-level supplementary support (in case something, either internally to AWS or externally goes wrong) at all times.

This environment presents many challenges to the teams responsible for software at Amazon. Ensuring software retains feature-competitiveness while fixing reported issues, responding to emergent outages and CVEs (Common Vulnerabilities and Exploits) without introducing regressions to the user experience becomes a perpetual balancing act.

Particularly in areas of failure, ensuring the impact to customer experience is managed (if mitigation is not immediate) becomes an ancillary challenge. When (not if) things go wrong, customers desire (and deserve) to know the cause, effect to their operations, and constant updates and ETCs for fixes and resolution.


## Me

Gaining the ability to analyse this continuing landscape is no straight-forward task. The decentralised project ownership layout (which dominates the development style in Amazon) ensures agility, but also provides teams with a scenario of constant reprioritization and ever changing failure-prone elements of both the software and administrative components.

The concept of instrumentation transcends the software industry; having some way of measuring the performance on a specific axis is how the world analyses, grows and develops. For most systems, dimensions such as direct output offer immediate resolution on the health of the system. And while that may also be true for software, there can be many errors and problems (such as adherence to system-level policies like running on only approved software and API routes) which cannot be mapped conveniently to direct outputs. This realm of system-level observability can only be achieved through the addition of logging software and routes, allowing for visibility to reach beyond the black-box outputs the user receives.

Instrumentation works by logging state-dependent information for each request made to the software. For a web based application, client side state-dependent information (such as the page load time and the pages visited by a user), rely on the entire server process to have completed successfully. Internal instrumentation can log information regarding the specific program flows of requests (controllers accessed, parameters passed, permissions granted) whether the request has been completed successfully or not. This insight into failed requests allows developers to immediately glean more information about a given ticket; rather than just relying on a vague message, a backtrace along with some key controller parameters could shave days from a root cause analysis.

Writing sufficient instrumentation for a tool that is over 10 years old in parts while also maintaining support for existing log-based workflows poses a real challenge. Without fully understanding the dependencies of the system, regressions in my team's software's interfaces to some of the most vital areas of the AWS project management infrastructure could creep in - leaving our team potentially blind to alarms and canaries.

The challenge of writing an instrumentation stack that gives this self-monitoring ability poses many threats, but also huge benefits. The ability to see below the black box of the software allows developers to glean more about how the system communicates with itself, providing greater scope for bug fixing and clearer integration paths for new features. This layer of self-monitoring - which allows for much larger visibility on the problems and workflows at large in a system - is the concept of Observability.

My placement project began with only this word - the project I delivered was the result of the effort to add detailed instrumentation to the OpsConsole while preserving existing log-based workflows. The project was to be non-invasive; changes to our logging format were permitted, but the routes the log data took (from our software to our log storage service) were fixed. This project had to be constructed in such a way that it could be added or removed without any detriment to the software it is analysing.

## Observability and You: ElasticSearch and AWS infrastructure

The bulk of the work contained within my placement focussed on a tool called ElasticSearch (now OpenSearch), which is designed to handle large amounts of data and provide indexing, analysis tools, and visualization abilities to the data stored within. OpenSearch is a complex tool with a decentralised nodal data storage pattern which relies on concepts of indexing and sharding to provide retrieval speeds not possible with standard relational database tooling.

Using instrumentation to capture valuable state-based data would in theory provide the team with a greater resolution on the internal state of the software. However, without some way to interact with this data effectively, developers would be left with a harder problem than before; instead of having a few log entries to search for when diagnosing issues, they now would have those original log entries as well as new instrumentation-led entries - only increasing the needle in a haystack problem developers had already. OpenSearch was the answer to this. Providing unparalleled drill-down ability, developers could navigate from a high level metrics graph to individual log entries in less than 5 clicks.

The conclusion of this is a project that runs with live production data, serving over 12 million requests across 21 different regions, using infrastructure designed and development independently.

My project required me to design and develop new processes (such as the log transformation infrastructure) systems (such as the OpenSearch stack), services (the project as a whole) and product (a new observability tool for the team).

Without clear drive and ownership of this project, my tool would not be in use in production today. Ensuring I was equipped with the knowledge required to lead a project like this, I scheduled a weekly cross-team sync with other AWS engineers interested in observability. Although we did not actively work on the same projects,this group became a vital sounding board and oversight for the project.

Through my dedication to the project, I was determined to move to Dublin, Ireland, during the COVID-19 pandemic, so that I could have the opportunity to work alongside my peers. My professional commitment manifested as long work days, complex multi-team meetings, design and security reviews on a level not designated for interns. Indeed, access to production accounts is denied for interns - my ability to deploy my project into these environments shows my dedication and willingness to depend and work with those around me.

## Reflection

The techniques and skills developed over a 11 month placement at AWS are career-changing; seeing how a big tech company handles the issues of the day, whether that be privacy, scale, or cost, are the elements of the journey that will forever remain topics of great focus and intrigue. And even though I have peered into the abyss and seen that it is not the fine art I thought it would be, there still is a certain excitement about working at Amazon’s scale.

A misconception I had about this placement was my own ability; imposter syndrome loomed on the horizon, and the thought of working alongside those who keep the lights on at Amazon was a daunting prospect. But in reality, software engineering is software engineering; no more, no less. There are added complexities to this scale, but the challenges are the same.

The nature of the tech industry is such that there are always many groups racing to solve the same problem at once. In many instances, the problem may manifest itself as a context specific issue, but with greater abstraction, this diagnoses yields and incorrect result.

Computer Science is an industry lead by programming; logic, mathematics, and the realm of code-wranglers who make it all work together. And although the logic and mathematics of the AWS and RDS are worthy of consideration in any Computer Science context, the biggest skills that this year has produced are ones of a more qualitative nature: those surrounding communication and personal development.

In a world of abstraction, it is easy a software engineer to pull yourself out of reality, and into the context of the problem that is to be solved. Indeed, this has been only increasingly true over the past 18 months, as COVID-19 changed the way all of society hung together. As a placement student embarking on a journey into a experience that only a few years ago were that of dreams, being forced to navigate this alone, in a bedroom, in another country, could have been dizzying.

It is true that at times, it *was* dizzying - as a company of over 800,000, Amazon has a culture and corpora of projects and experience that is almost unrivalled. Navigating this landscape as a newcomer while alone is reminiscent of the lack of visibility that the team had on its own software: without understanding the internal workings of a system, it is impossible to truly integrate.

And so in an environment of unclear priorities, huge overlaps between projects, teams, and workflows, the only method to effectively navigate through was with the help of those versed in the landscape. My team and mentor were the sole reason for my high attainment, through their ability to give me what was needed (and no more), but most importantly, their willingness to allow for communication with them - communication is key to any successful endeavour, and that is perhaps the biggest takeaway of this time.

## Conclusion

I am grateful for so many people through the journey at AWS; Sheldon, Peter, Victor, Fabbio, Alex, my mentee Jack, the team, as well as my flatmates and friends; Conall, Lee, Méabh and Gina. The people made my year in Ireland and my time at Amazon is indistinguishable from my time in this beautiful country thanks to the love and generosity of these people.

Life is not about software projects or individual achievement, really. It’s about being part of something bigger - feeling the connections between you and others (software or otherwise). The feeling of being part of something bigger will never be beaten by my time in Ireland. It was an all encompassing year and the student writing this report is very different from the one who left 11 months ago.
