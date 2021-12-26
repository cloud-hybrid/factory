# Construct Development Factory-Kit #

## Usage ##

### Setup ###

1. Define and create a new directory
    - `mkdir -p example-http-service && cd $_`
2. Clone cloud resource(s)
    - `git clone https://github.com/cloud-hybrid/lambda-concept-x-ray.git ./x-ray`
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

## Design Philosophy ##

> ***The Twelve-factor app [...] requires strict separation of config from code. Config varies substantially across deploys, code does not.***
> - [**III. Config**, *The 12-Factor Application*](https://12factor.net/config)

The design philosophy behind `cdfk` is simple:

- Configure strict, opinionated defaults
- Define once, deploy anywhere
- Provide development efficiencies
- Eliminate drift between deployable(s)

### Overview ###

At a high level, `cdfk` receives a set of repositories as *input* that get transformed into a *distribution*. The
distribution is composed of an opinionated structure that later fulfills deployment requirements. Through analysis of
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

`@cloud-technology/factory` will transform the `cloud-resource-1` directory the same in both examples
when the distribution gets compiled. The freedom of repository-based folder structuring is just one of the
abstractions `@cloud-technology/factory` will perform -- therefore limiting deployment and vcs requirements, or otherwise
development-related overhead.

***The motivation behind the aforementioned folder structure is related to CI-CD pipelines***.

Regardless of the pipeline implementation, the design pattern is always the same:
   - *Clone in a remote repository to an arbitrary ci environment*

Programmatic logic can then be easily abstracted according to repository-to-directory mapping(s).

---

## Local Development ##

In order to test changes to `@cloud-vault/factory` globally, ensure to run the `node Install.js` script located
at the repository's root *at least once*. Subsequent runs should be automatic (via `tsc`). To run the `tsc` compiler in 
`--watch` mode, execute the `npm run compile` command(s) (applicable to sub-packages `cli` & `cdfk`).
