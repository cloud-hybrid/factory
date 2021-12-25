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

Luckily, this is where `@cloud-vault/factory` comes into play.