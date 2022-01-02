# `cloud-factory` - Construct Utilities #

**`cloud-factory` is a commandline application that provides ci-cd capabilities,
code extensions, and overall utilities for cloud-related management and
development.**

In order to begin, open a console capable of running `node.js` (`node`), and issue the following
command:
   - `npx --yes cloud-factory@latest --help`

---

## Usage ##

### Setup ###

1. Define and create a new directory
    - `mkdir -p example-http-service && cd $_`
2. Clone cloud resource(s)
    - `git clone https://github.com/cloud-hybrid/lambda-concept-simple-response.git ./simple-response`
3. If applicable, define a `library` directory to be interfaced for re-use:
    2. `git clone https://github.com/cloud-hybrid/http-responses-lambda-layer.git ./library/http-responses`

Lastly, *define a `factory.json` file*:

```json
{
   "name": "test",
   "organization": "Cloud-Vault",
   "environment": "Development"
}
```

**Note**: acknowledge the git-clone target directories:
- `./simple-response`
- `./library/http-responses`

Arbitrary directories *that are **not** under `library`* are assumed to be deployable cloud resource(s).

Arbitrary directories *that are under `library`* are assumed to be deployable cloud resource-related ***dependencies***.

### Overwrites ###

***Note - The following section is under heavy, active development.***

There exist a few places to define overwrites for certain resource-related attributes ...

#### `package.json` ####

Individual repository's `package.json` can define a root-level key "`factory`", assigning an object
as its value:

```json
{
   "name": "cloud-technology-http-api-get-users",
   "...": "...",
   "factory": {
      "name": "get-users",
      "branch": "feature/get-user-configuration",
      "environment": "QA"
   }
}
```

For example, let the aforementioned JSON snippet represent a lambda function; `cloud-factory` will 
instead use `*/*/get-users` as the API-Gateway-V2 integration endpoint instead of the much longer,
undesired `cloud-technology-http-api-get-users` value.

#### `factory.json` (Repository Specific) ####

...

#### `factory.overwrites.json` ####

...

---

## Design Philosophy ##

> *Constructs are classes which define a “piece of system state”. Constructs can be composed 
> together to form higher-level building blocks which represent more complex state. Constructs 
> are often used to represent the desired state of cloud applications. For example, in the AWS 
> CDK, which is used to define the desired state for AWS infrastructure using CloudFormation, 
> the lowest-level construct represents a resource definition in a CloudFormation template. 
> These resources are composed to represent higher-level logical units of a cloud application, 
> etc.*

The design philosophies and motivations behind `cloud-factory` are simple:

- Eliminate drift between deployable(s) across environments
- Create an agnostic interface to generate and deploy distribution(s)
- Configure opinionated defaults with zero impact on development teams

### Overview ###

At a high level, `cloud-factory` receives a set of repositories as **input**, executes **directory translations** and potentially compile(s) code,
and **outputs** a *distribution*. The distribution is composed of an opinionated structure that later fulfills deployment requirements. Through analysis of
repository layout(s) & dependencies, a series of constructs, or cloud resources, are dynamically composed into a
singular stack -- the stack becomes the deployable.

When lower level constructs -- **repositories** -- become capable of implicitly defining
infrastructure-related requirements, a large portion of development overhead and maintenance can be eliminated.

### Opinionated Defaults ###

An ***opinionated default*** can be any additional or non-default attribute that assists defining a cloud resource. For
example, in Azure, GCP, and AWS, resources can have *Tags*. Through key-value assignment, a subset of resources can all
be attributed an **Environment** *key* with a `Development`
value.

While seemingly of little value, parsers or API scrappers can use these tags to filter through applicable resources.
Billing, security auditing, and patch-groups are all but some benefits administrators can gain from assigning
tag-related opinionated defaults.

### Packaging Structure ###

With the following example structure:

```
.
├── factory.json
│
├── library
│    └── shared-resource-1
│        ├── LICENSE
│        ├── README.md
│        ├── package.json
│        └── src
│            └── index.js
│
├── cloud-resource-1
│    ├── LICENSE
│    ├── README.md
│    ├── package.json
│    └── src
│        └── index.js
│
└── cloud-resource-2
     ├── LICENSE
     ├── README.md
     ├── package.json
     └── src
          └── index.js
```

`cloud-factory` takes note of the following directories:

```
.
├── factory.json
├── library
│    └── shared-resource-1
├── cloud-resource-1
└── cloud-resource-2
```

However, also take note that the following example's `cloud-resource-2` is *no different* compared to the first example:

```
.
├── ...
├── arbitrary-folder-name
│    └──cloud-resource-2
│        ├── LICENSE
│        ├── README.md
│        ├── package.json
│        └── src
│            └── index.js
```

`cloud-factory` will transform the `cloud-resource-2` directory using the same translations in both examples
when the distribution gets compiled:

```
.
├── cloud-resource-1
│    ├── LICENSE
│    ├── README.md
│    ├── package.json
│    └── src
│         └── index.js
│
├── arbitrary-folder-name
│    └── cloud-resource-2
│         ├── LICENSE
│         ├── README.md
│         ├── package.json
│         └── src
│              └── index.js
│
└── distribution
     ├── cloud-resource-1
     │    └── ...
     └── cloud-resource-2
          └── ...
```

The freedom of repository-based folder structuring is just one of the
abstractions `cloud-factory` will perform -- therefore limiting deployment and vcs requirements, or otherwise
development-related overhead.

Regardless of any automated or otherwise pipeline'd implementation (deployments can also be performed locally), the design pattern is always the same:
   - *Clone in a remote repository to an arbitrary ci environment*

Programmatic logic can then be easily abstracted according to repository-to-directory mapping(s).

