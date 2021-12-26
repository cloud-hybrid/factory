# Construct Development Factory-Kit #

## Design Philosophy ##

> ***The Twelve-factor app [...] requires strict separation of config from code. Config varies substantially across deploys, code does not.***
> - [**III. Config**, *The 12-Factor Application*](https://12factor.net/config)

The design philosophy behind `cdfk` is simple:
    
- Configure strict, opinionated defaults
- Define once, deploy anywhere
- Provide development efficiencies
- Eliminate drift between deployable(s)

### Overview ###

At a high level, `cdfk` receives a set of repositories as *input* that get transformed into a *distribution*. The distribution is composed of an opinionated structure that later
fulfills deployment requirements. Through analysis of repository layout(s) & dependencies, a series of constructs, or cloud resources, are dynamically
composed into a singular stack -- the stack becomes the deployable.

When lower level constructs -- in this context **repositories** -- become capable of implicitly defining
infrastructure-related requirements, a large portion of development overhead and maintenance can be eliminated.
However, rarely without overhead. 

`@cloud-vault/factory` aims to facilitate potential overhead.

### Opinionated Defaults ###

An ***opinionated default*** can be any additional or non-default attribute that assists defining a cloud
resource. For example, in Azure, GCP, and AWS, resources can have *Tags*. Through
key-value assignment, a subset of resources can all be attributed an **Environment** *key* with a `Development`
value.

While seemingly of little value, parsers or API scrappers can use these tags to filter through applicable
resources. Billing, security auditing, and patch-groups are all but some benefits administrators can
gain from assigning tag-related opinionated defaults.
