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
