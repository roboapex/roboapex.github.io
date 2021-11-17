---
title: Introduction
description: Introduction to the Robotics @APEX documentation system
slug: /docs
sidebar_position: 1
keywords:
  - start
  - intro
  - introduction
  - motivation
  - usage
  - robotics
  - documentation
---

## Motivation

This documentation was created mainly as a reference for students in the Robotics @APEX club for past work done by seniors of the club.

### Project Documentation

A documentation system in the club would allow peers and future generations of students to learn from example. Common robotics-related issues previously solved in a group may arise again for others and be troublesome to tackle again. Hence, documentation allows students to learn from each other as well. 

This website was made to rid the redundancy of a separate document by simply using GitHub to host teams' code in repositories which is sustainably accessible and would likely not get lost.

Competitions that the members of the club participate in entail programming robots using code. This code can then be uploaded to GitHub for others to comment and feedback. Using GitHub, the code itself would be a testament to the work done and persisted for years should future executive committees decide to move forward with the idea. Apart from code or text, students may also upload images, documents and data to GitHub.

Repositories containing the projects by members of the club may be found at https://github.com/roboapex/. 

Teams' repository names will be in the format of **competition code (by year)** followed by the **category**, followed by the **team name**, delimited with a hyphen, as seen in `competition-category-team`. For instance, `nrc2021-fe-hexacore` or `nrc2021-open-polysth`. This naming consistent naming convention also facilitates the parsing of team details in the project documentation site at https://roboapex.github.io/projects/, as the name describes the competition, year, category and team name in a single string.

Refer to the [Contributing](/docs/contributing) page to learn more about the conventions in the documentation.

### Article Documentation

Members of the club, specifically the training or competition committee, would write articles, such as tutorials detailing "How to PID with Arduino", to be uploaded onto the documentation site https://roboapex.github.io/. The website sources articles from the GitHub repository at https://github.com/roboapex/roboapex.github.io in the `/docs` directory and is built with Docusaurus and React. Even without knowledge of React, the majority of the site can still be maintained simply using Markdown. Markdown is the language used to write the articles and is relatively simple to learn. Upon updating the content in that repository, the website would be automatically updated with new content.

Refer to the [Contributing](/docs/contributing) page to learn more about the conventions in the documentation.

### Peer-feedback

With the COVID-19 virus becoming endemic when writing this article, online eCCA may arise without warning. Hence, students may not effectively communicate with peers, especially from outside their teams, during these times. The hindrance caused limits the amount of constructive peer critique and feedback given to teams and the full potential of teams in a club as teams can only see their project from their perspective. The feedback provided by peers may allow students to realise improvements in their project design and make changes.

GitHub Teams allows for the grouping of organisation members into their respective competition and categories. Teams will be named and nested according to `Competition (By Year)`/`Category` (`/` denotes a nest). For instance, `nrc2021/nrc2021-open`.

By using GitHub Discussions, peers can feedback directly on code and general factors in a forum-like environment. Additionally, the use of GitHub Teams allows for discrete groups and competition categories to discuss topics separately. For example, for a project-based competition, students may give feedback to other groups' ideas.

### Version Control

Losing files due to damage to digital systems is an unlikely yet inevitable occurrence, especially for students who may not entirely know how to keep their data or devices safe. Students may lose digital progress like software or code should their local computers fault or get lost. If the unfortunate occurs, students may perform worse in competitions due to having to restart work or rush work at the last minute.

A significant feature that Git offers is version control, allowing for tracking of file history and changes, reverting, branching and merging files. Should code be accidentally lost, keeping a copy on GitHub would prove helpful as repositories can easily be recloned or redownloaded.

## Usage

### Categorisation

Documents on this site are categorised by systems, such as *Lego* or *Arduino*. Although these categories are not necessarily disjoint sets, they serve a good purpose during system-specific training sessions, which are generally the method of training in the club.
