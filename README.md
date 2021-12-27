# Construct Factory - `@cloud-vault/factory` #

> *Constructs are classes which define a “piece of system state”. Constructs can be composed together to form higher-level building blocks which represent more complex state. Constructs are often used to represent the desired state of cloud applications. For example, in the AWS CDK, which is used to define the desired state for AWS infrastructure using CloudFormation, the lowest-level construct represents a resource definition in a CloudFormation template. These resources are composed to represent higher-level logical units of a cloud application, etc.*

---

## Design Philosophy ##

> ***The Twelve-factor app [...] requires strict separation of config from code. Config varies substantially across deploys, code does not.***
> - [**III. Config**](https://12factor.net/config), *The 12-Factor Application*

The design philosophies and motivations behind `@cloud-vault/factory` are simple:

- Provide development-lifecycle efficiencies
- Generate human readable, *universally unique identifiers*
- Eliminate drift between deployable(s) across environments
- Create an agnostic interface to generate and deploy distribution(s)
- Configure opinionated defaults with zero impact on development teams

### Overview ###

At a high level, `@cloud-vault/factory` receives a set of repositories as **input**, executes **directory translations** and potentially compile(s) code,
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

`@cloud-technology/factory` takes note of the following directories:

```
.
├── factory.json
├── library
│    └── shared-resource-1
├── cloud-resource-1
└── cloud-resource-2
```

However, also take note that the following example is *no different* compared to the first example:

```
.
├── arbitrary-folder-name
│    └──cloud-resource-1
│        ├── LICENSE
│        ├── README.md
│        ├── package.json
│        └── src
│            └── index.js
```

`@cloud-technology/factory` will transform the `cloud-resource-1` directory using the same translations in both examples
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
abstractions `@cloud-technology/factory` will perform -- therefore limiting deployment and vcs requirements, or otherwise
development-related overhead.

Regardless of any automated or otherwise pipeline'd implementation (deployments can also be performed locally), the design pattern is always the same:
   - *Clone in a remote repository to an arbitrary ci environment*

Programmatic logic can then be easily abstracted according to repository-to-directory mapping(s).

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

**Note**: awknowledge the git-clone target directories:
- `./simple-response`
- `./library/http-responses`

Arbitrary directories *that are **not** under `library`* are assumed to be deployable cloud resource(s).

Arbitrary directories *that are under `library`* are assumed to be the deployable cloud resource-related ***dependencies***.

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

For example, let the aforementioned JSON snippet represent a lambda function; `@cloud-vault/factory` will 
instead use `*/*/get-users` as the API-Gateway-V2 integration endpoint instead of the much longer,
undesired `cloud-technology-http-api-get-users` value.

#### `factory.json` (Repository Specific) ####

...

#### `factory.overwrites.json` ####

...

---

## Local Development ##

In order to test changes to `@cloud-vault/factory` globally, ensure to run the `node Install.js` script located
at the repository's root prior to executing `factory cdfk deploy`. The goal is to ensure of `npx`, or otherwise *global*
cli usage, and because `@cloud-vault/factory` needs to be compiled, the global installation candidate needs to reflect what's
local during development. 

To run the `tsc` compiler in `--watch` mode, execute the `npm run compile` command(s) (applicable to sub-packages `cli` & `cdfk`).

---

## Environment Variable(s) ##

### Applicable Types of Environment Configuration File(s) ###

`@cloud-vault` will override in the following order (highest defined variable overrides lower):

| Hierarchy Priority | Filename                 | Environment          | `.gitignore`             | Notes                                                        |
| ------------------ | ------------------------ | -------------------- | ------------------------ | ------------------------------------------------------------ |
| 1st (*Highest*)    | `.env.development.local` | Development          | **`true`**               | Local overrides of environment-specific settings.            |
| 1st                | `.env.test.local`        | Test                 | **`true`**               | Local overrides of environment-specific settings.            |
| 1st                | `.env.production.local`  | Production           | **`true`**               | Local overrides of environment-specific settings.            |
| 2nd                | `.env.local`             | Anywhere             | **`true`**               | Local overrides. Loaded in all environments *except* `test`. |
| 3rd                | `.env.development`       | Development          | **`false`**              | Shared environment-specific settings                         |
| 3rd                | `.env.test`              | Test                 | **`false`**              | Shared environment-specific settings                         |
| 3rd                | `.env.production`        | Production           | **`false`**              | Shared environment-specific settings                         |
| Last               | `.env`                   | All Environments     | ([Depends](#committing)) | N/A                                                          |

#### Committing ####

Credentials should only be accessible on the machines that need access to them. Never commit sensitive information to a repository.

You can use the `-t` or `--template` flag on the dotenv cli to create a template of your `.env` file.

```shell
$ dotenv -t .env
```

A template will be created in your working directory named `{FINAME}.template`. So in the above example, it would create a `.env.template` file.

The template will contain all the environment variables in your `.env` file but with their values set to the variable names.

```shell
### --> .env

S3_BUCKET=YOURS3BUCKET
SECRET_KEY=YOURSECRETKEYGOESHERE
```

Would become

```shell
# --> .env.template

S3_BUCKET=S3_BUCKET
SECRET_KEY=SECRET_KEY
```

Personally, I prefer to commit the `.env` file with development-only settings. This makes it easy for other developers to get started on the project without compromising credentials for other environments. If you follow this advice, make
sure that all the credentials for your development environment are different from your other deployments and that the development credentials do not have access to any confidential data.
