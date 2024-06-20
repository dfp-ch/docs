---
title: Domain Model
taxonomy:
    category: docs
---

This document describes the domain model of the dfp application server, whose main elements are depicted below.

![domain model](domain%20model.png?resize=1000,400)

## Household (obj)

The household is the main entity of the domain model.

It consists of one or more people that are bound and / or affected by a common financial environment.

### Member (objPart)

A member is a person that is a member of the household.

There always is a primary member (partner 1), optionally a secondary member (partner 2), and potentially other dependents / children in the household.

### Holding (objPart)

A holding is a valuable or contract that is currently held (or committed to/by with a high certainty) by the household.

These are typically the things you have to state in your tax declaration.

### Goal (objPart)

A financially relevent goal of the household or its members.

Goals can be quite vague (f.ex. "optimise my retirement situation") or very specific (f.ex. "I want to buy a house in Weiningen in Q4 2024 for 1M CHF"). We model them both as goals, but with the distinction between
- Aspiration (vague)
- Objective (specific)

### Concern (objPart)

Financially relevant concerns of the household or its members.

Concerns can be explicitly stated or implicitly derived from the goals or the situation of the household.

### Scenario (objPart)

A scenario is one mutual exclusive path into the future of the household.
There is always one default scenario for a household.

Explicitly or implicitly, through goals, a household can define multiple scenarios (f.ex. "what happens if we move together").
These goals are characterised by being mutually exclusive to other goals, i.e. they are not subject to an optimisation.

A scenario can therefore define its own set of goals (and maybe concerns).

## Advice (doc)

An advice is the answer of a financial planner to a household scenario.

One advice targets exactly one scenario.
There could be multiple advices (versions) for one scenario, in order to elaborate different solutions.
In order to address the feasability or optimisation of a scenario, an advice can define strategies and actions.
Each advice has its own worflow (every version of advice for a specific scenario can be dismissid or elaborated separatly).

### Action (docPart)

An action is a concrete step that should / can be taken in order to address a concern or goal.

An action may be specific to a certain goal.
An action is proposed by a financial planner and can be accepted or rejected by the household.
Actions may be grouped into strategies (TBD).

### Strategy (docPart)

A strategy (used as per the CFP terminology) is a subset of a financial plan, that is designed to adress either a specific area (retirement planning, risk reduction, ...) and/or a goal (probably rather aspirations than objectives).

## Interplay between Goals and Strategies/Actions

### Aspiration (the Why)

Aspiration represents the broad, qualitative vision or overarching desires an individual has regarding their financial future.
It's about the fundamental reasons behind wanting to manage and improve one's financial situation.
Examples might include "achieving financial independence," "ensuring a comfortable retirement," or "providing for my family's future."
Aspirations are the motivational foundation upon which more concrete plans are built.

### Objective (the What)

Objective refers to specific, measurable goals that support and are inspired by the client's aspirations (which may or may not be explicitly stated).
Objectives are clear, quantifiable targets that serve as milestones on the path to realizing aspirations.
They include details such as amounts, timelines, and other criteria that allow for tracking progress.
For example, "save $1 million for retirement by age 65" or "purchase a home worth $400,000 in five years."

### Strategy (the How - Broad Approach)

Strategy outlines the broad approach or methodologies to be employed to achieve the objectives, thereby fulfilling the client's aspirations.
It includes the rationale for selecting certain paths over others and is informed by an understanding of the client's current financial situation, risk tolerance, time horizon, and other personal factors.
A strategy might involve "utilizing tax-advantaged accounts to maximize retirement savings" or "diversifying investments to balance growth and risk." 
It sets the direction for the specific actions to be taken.

### Actions (the How - Specific Steps)

Actions are the specific, actionable steps that need to be taken to implement the strategy.
These are the concrete tasks or decisions that the client, often with the advisor's guidance, needs to execute.
Actions turn the strategy into reality and are directly aimed at achieving the set objectives.
Following the strategy of utilizing tax-advantaged accounts, actions could include "contribute $19,500 annually to a 401(k) plan," "open a Roth IRA and contribute the maximum allowable amount," or "rebalance the investment portfolio annually to maintain the desired asset allocation."

In this framework:

Aspirations give rise to Objectives, which define what needs to be achieved in clear terms (but not every Aspiration needs to be detailed as Objectives, they might remain vague from a customer perspective).
Strategies provide a broad approach on how to achieve these goals (aspirations and objectives), considering the client's entire financial picture and personal preferences.
Actions break down the strategy into specific steps, detailing exactly what will be done to move towards the goals.

## Product (obj)

A generalised financial product, or rather a product with financial planning impact.

### Termsheet (property)

## Document (obj)

A fincial planning relevant document.
