---
title: Development Infrastructure
taxonomy:
    category: docs
---

Repositories are hosted on [GitHub](https://github.com/dfp-ch) (see below for a list).

Our applications (app-server, ai-server and docs-server) are hosted on Heroku, for the Digital Advisor we currently use SoulMachines.

Two JVM libraries (dddrive and fincast) are hosted on Maven Central (via Sonatype Nexus).

Development Tools: JVM Server side development (app-server, fincast, dddrive) is done in IntelliJ IDEA. UI development is done in Visual Studio Code. The AI server (node with Typescript) is developed in Visual Studio Code. Technical documentation is done in Visual Studio Code.

Issue tracking and project management is done in Trello.

## Github Repositories

#### [Application Server](https://github.com/dfp-ch/app-server) (https://github.com/dfp-ch/app-server)

This is the main application server which is hosted on Heroku. It also hosts the UI, which gets cloned from the UI repository on deployment.

Spring Boot application, written mostly in Java, with some Kotlin for DSLs.

#### [dddrive library](https://github.com/dfp-ch/dddrive) (https://github.com/dfp-ch/dddrive)

An application framework using DDD and some reactive principles. It is hosted on Maven Central. It is written in Java.

#### [fincast library](https://github.com/dfp-ch/fincast) (https://github.com/dfp-ch/fincast)

This is a JVM library for financial calculations, hosted on Maven Central. It is written in Kotlin.

#### [UI](https://github.com/dfp-ch/next-ui) (https://github.com/dfp-ch/next-ui)

Expert UI (which finally might also be used for end users).
Typescript, React, Tailwind CSS, Flowbite component, react-hook-forms, valtio.
It also includes the digital human from SoulMachines and/or Azure.

The UI is not hosted standalone, but integrated into the app-server on deployment.

#### [AI server](https://github.com/dfp-ch/ai-server) (https://github.com/dfp-ch/ai-server)

The Orchestration Server handles the communication between the digital human (on the UI) and the business logic on the backend (both LLM and application server).

#### [Technical documentation](https://github.com/dfp-ch/docs) (https://github.com/dfp-ch/docs)

Content repository for our markdown-based technical documentation.
This is not intendend for process documentation, this will be done in Teams, but for more durable documentation, like this file.

#### [CMS](https://github.com/dfp-ch/docs-grav) (https://github.com/dfp-ch/docs-grav)

Dockerfile for a [Grav CMS](https://getgrav.org/) instance, which is used as the engine for the technical documentation above.

## Trello Boards

* [App Server](https://trello.com/b/pqlVvcXH/dfp-app-server)
* [UI](https://trello.com/b/A9GHTlDO/dfp-ui)
* [Digital Advisor](https://trello.com/b/Qm2bYgsK/dfp-digital-advisor)
* [fincast](https://trello.com/b/Te6xkV3N/dfp-fincast)
* [dddrive](https://trello.com/b/TTqjWF7S/dfp-dddrive)

## Links

* [GitHub](https://github.com/dfp-ch)
* [Heroku](https://dashboard.heroku.com/teams/dfp-ch/apps)
* [Maven Central](https://central.sonatype.com/namespace/ch.dfp)
* [SoulMachines](https://studio.soulmachines.cloud/dashboard)
