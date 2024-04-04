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
There could be multiple advices for one scenario, in order to elaborate different solutions.
In order to address the feasability or optimisation of a scenario, an advice can define actions.

### Action (docPart)

An action is a concrete step that should / can be taken in order to address a concern or goal.

An action is proposed by a financial planner and can be accepted or rejected by the household.
Actions may be grouped into a strategies (TBD).

### Strategy (docPart)

A strategy (used as per the CFP terminology) is a subset of a financial plan, that is designed to adress a specific area (retirement planning, risk reduction, ...).

## Product (obj)

A generalised financial product, or rather a product with financial planning impact.

### Termsheet (property)

## Document (obj)
