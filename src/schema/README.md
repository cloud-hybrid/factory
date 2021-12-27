Schema-Store JSON [Catalog API](https://www.schemastore.org/api/json/catalog.json)
Cloudformation [Schema Definition](https://github.com/aws-cloudformation/cloudformation-cli/blob/master/src/rpdk/core/data/schema/provider.definition.schema.v1.json)

- https://raw.githubusercontent.com/awslabs/goformation/v5.2.11/schema/cloudformation.schema.json
- https://github.com/awslabs/goformation

https://github.com/json-schema-org/json-schema-spec/tree/draft-next/meta

CFN Official https://github.com/aws-cloudformation/cloudformation-resource-schema

## Overview ##

- Extension of https://schemastore.org's JSON definition & https://json-schema.org
    - `prompt` key defines an object
- Core: https://json-schema.org/draft/2020-12/json-schema-core.html

`format`s: https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.7.3

```json
{
    "prompt": {
        "$": "Resource Name",
        "required": true,
        "default": null,
        "description": "...",
        "configuration": "./file.json",
        "debug": true
    }
}
```

## Core ##

https://json-schema.org/draft/2020-12/meta/core

## Standard ##

https://json-schema.org/draft/2020-12/meta/applicator

## Meta-Definitions ##

https://json-schema.org/draft/2020-12/json-schema-core.html#example-meta-schema

```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/meta/general-use-example",
    "$dynamicAnchor": "meta",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://json-schema.org/draft/2020-12/vocab/applicator": true,
        "https://json-schema.org/draft/2020-12/vocab/validation": true,
        "https://example.com/vocab/example-vocab": true
    },
    "allOf": [
        {
            "$ref": "https://json-schema.org/draft/2020-12/meta/core"
        },
        {
            "$ref": "https://json-schema.org/draft/2020-12/meta/applicator"
        },
        {
            "$ref": "https://json-schema.org/draft/2020-12/meta/validation"
        },
        {
            "$ref": "https://example.com/meta/example-vocab",
            ],
            "patternProperties": {
                "^unevaluated": false
            },
            "properties": {
                "localKeyword": {
                    "$comment": "Not in vocabulary, but validated if used",
                    "type": "string"
                }
            }
        }
```

## Simple Example ##

This example provides a typical minimum you are likely to see in JSON Schema. It contains:

- `$id` keyword
- `$schema` keyword
- `title` annotation keyword
- `type` instance data model
- `properties` validation keyword
    - `description` annotation keyword.
- `type` instance data model (see above).
- `minimum` validation keyword on the age key.

```json
{
    "$id": "https://example.com/person.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Person",
    "type": "object",
    "properties": {
        "firstName": {
            "type": "string",
            "description": "The person's first name."
        },
        "lastName": {
            "type": "string",
            "description": "The person's last name."
        },
        "age": {
            "description": "Age in years which must be equal to or greater than zero.",
            "type": "integer",
            "minimum": 0
        }
    }
}
```

**Data**

```json
{
    "firstName": "John",
    "lastName": "Doe",
    "age": 21
}
```