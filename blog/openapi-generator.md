---
title : 'A Journey towards contributing to the open-source Project '
---
![ background image](https://uploads-ssl.webflow.com/62bd9427ec73a11840fe243a/62ecef1cc8eb8347eb911176_JAVA-Performance-Troubleshooting-CPU-and-Memory-Profiling.svg "JAVA Performance ")

---

This is the **[Openapi Generator](https://github.com/OpenAPITools/openapi-generator)**.

### Introduction

From the start of my career, I have been a consumer of the open-source community. It all started with using open-source tools and products. I am fascinated with the support I get from the community and the support an open-source community provides is much more than proprietary software. 
I have always wanted to be part of a group where I could provide a solution to a problem that can help consumers of software. And I feel a straightforward way to do that is to get involved in an open-source project and contribute by solving an issue or enhancing the project. 

<!--truncate-->

It all started with contributing to an open-source project - (OpenAPI-Generator). The customer is using OpenAPI-Generator to generate their application SDK’s. Since there were a lot of projects commits that happen every day, the probability of breakage was higher. We could find out the breakages in advance using our Continuous Integrated Jenkins jobs. Then we analyze the breakages, find out the generic solution, discuss the solution with the reviewers and then merge the code into the main project. At last, I got my contributor badge.

Now I would like to share my journey with all of you talking about the process of how we can contribute to an open-source project.



### OpenAPI Generator

OpenAPI generator is an open-source project which helps to generate API clients' libraries (SDK generation), server stubs, configuration, and documentation for a variety of programming languages and frameworks

Users need to provide an OpenAPI specification file to the generator which in turn generates the SDK for a particular programming language specified by a flag. The specification file is an open standard file that defines the architecture of how to connect to the server and how the SDK properties are modeled.

The SDK generated out of the OpenAPI generator will have the generated code which will take care of creating a web client, security, request creation, and its validation, sending the request via the created web client, and then response decoding and its validation. It also generates documentation and examples as mentioned in the spec file.​​​​​​​

### Using OpenAPI Generator

In one of the projects, we were using OpenAPI generator to generate SDKs, and those were used by the customers to connect to the server. We were supporting Python, Go, and Csharp SDKs. 

Since it is an open-source project, everyday people were contributing to different feature development and bug fixes, and the dynamics of the code changes very frequently. Since we were responsible for making releases every week, it was our job to ensure that there were no breakages in the code and if there is any fix them as soon as possible.

During the scope of the project, we as a team also contributed to the feature development and bug fixes. 

The bug fixes were like some of the changes were not tested properly for all the versions of SDK and we will be fixing it. Or some were like the recent changes which were introduced in the previous commits were failing in our use case because our use case was vast, and contributors would not test that many test cases.

The feature development was like optimizing the build time for SDK generation and adding certain features for certain frameworks which were not present previously.

![Using OpenAPI Generator](../static/img/blog/blog1.png)


### Process of raising an issue

The project has an initial template for raising an issue. It consists of the following sections/steps:

1. BUG Description: It should also include the programming language details.
2. A full/minimal spec to reproduce the issue.
3. The validation of the input using an OpenAPI validator.
4. Testing the latest master.
5. Searching the related issues/PR.
6. How to reproduce the issue.
7. Actual output vs expected output
8. Additional sponsorship: If you can contribute towards the fix.

Now from steps 1-7 we need to have a proper understanding of all the components of OpenAPI project which we discussed in previous sections. Users should know how to write a spec file and build the code in their local (We use a test VM to do it). They should also know the generation of different SDK and how to write a code snippet to reproduce the issue.

Now it is step 8, which really fascinates me because doing that helps me to realize my dream. I mean it is always like I was the consumer of open-source projects, but this helps me to contribute to the open-source community.

After the bug is raised in the forum, we need to tag the responsible contributors to investigate the issue and provide a solution if we are not sure about the solution. Each SDK has the owner responsible for the tag. Once they investigate the issue, they will provide the timeline of when the issue can be solved.

### Process of raising PR

The PR – Pull request is a mechanism through which we will be able to contribute to bug fixes or feature development. It is step #1 toward the code submission by us. When we want to raise a code to give a bug fix or feature development, we raise PR. 

To raise PR, we should fork the main repository of the project. Now this will be our local repository for making all the changes in the future as well. After that, we should pull all the latest changes and create a separate branch on top of the master branch. 

Then we should make the intended changes in the local branch and then build the code.

We should also generate new documents, test cases, and samples with respect to the new code. That is done automatically by running the pre-defined script present in the source code. If certain test cases are not present, we need to write them manually.

After all this process we should push the code changes to the forked repo. Automatically main repository detects a Pull request on the git hub and the user needs to raise it manually. Here as well users need to provide some information about the pre-defined template used for raising a PR.

After the PR is raised a continuous integration job will be run to test all the test cases which will sanitize the newly added code. This CI is integrated with the git-hub and all the test cases should be passed.

And as usual, we need to tag the core contributors and tell them to get it reviewed. If there are comments on the PR, we raised we need to resolve those review comments and answer them.

Once all the test cases are passed and we address the review comments the core members will merge the code and we will be ready to use the solution to which we contributed the project.



### Issues and PR Raised
I want to briefly discuss some of the interesting issues and PR raised:

#### Issues:
https://github.com/OpenAPITools/openapi-generator/issues/13115 - Due to changes made in the generator code there was a mismatch between the type of argument variable in go SDK. Raised the issues with proper examples and the core team gave a quick fix. (GoLang SDK)

https://github.com/OpenAPITools/openapi-generator/issues/12835 - With OAS 3.x we can define our content type and gain because of the generator code change there was a breakage on this feature. Given an initial solution for the above issue. (C-Sharp SDK)

https://github.com/OpenAPITools/openapi-generator/issues/10083 - Due to a design change, there was a breakage in the Python SDK while setting an attribute. We provided the solution, and it was accepted by the core team members. (Python SDK)

#### PRs:
https://github.com/OpenAPITools/openapi-generator/pull/12909 - Optimized the build time for JAVA SDK. (JAVA SDK)

https://github.com/OpenAPITools/openapi-generator/pull/12239 - Due to generator code changes the get item for a python dictionary was failing. We provided the solution, and it was accepted by the core team members. This issue was reported by many end users, and they appreciated our efforts for the quick fix. (Python SDK)

### Conclusion

Working and contributing to OpenAPI project helped me personally to learn many things about open-source projects and how they work independently. In this process, I was able to learn and contribute different programming languages and frameworks like a mustache (a templating engine), java, go, python, Csharp, etc. The core contributors were very approachable (using slack) and helpful.

Also, it helped me to meet the core contributors who show an insight into how and why they designed the framework in such a way. Also, while having technical discussions with multiple people we are open to different ideas.

The satisfaction of seeing a contributor badge is always a pleasure. Till now I was the consumer of the project, but now I can contribute and help the community to grow. When people acknowledge the help, we provided it provides me immense joy and satisfaction.

Finally, I want to thank and highlight the contributions of my teammates on the OpenAPI Generator raising the issues and PR:

1. **SureshGopal Venkatachalam**
2. **Meghana R**
3. **Savitha M R**