# Initializing a TF Repository #

*Special Consideration & Usage when Interfacing a Privately-Controlled
Remote Backend w/Terraform*.

[[_TOF_]]

## Usage ##

### 1. Gather AWS API Credential(s) ###

1. Sign up for [an AWS account](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-set-up.html) if you don't have one yet.
1. Log in onto the console and create [a new IAM user](https://console.aws.amazon.com/iam/home#/home).
1. Select your newly created user to access its details. Navigate to **Security credentials > Create a new access key**.

**Note**: A new **Access Key ID** and **Secret Access Token** pair will be generated. Please take a note of them right away.

### 2. Set AWS Credentials as CI/CD variables in GitLab ###

In the GitLab project, go to **Settings > CI / CD**. Set the following as
[environment variables](https://docs.gitlab.com/ee/ci/variables/#add-a-cicd-variable-to-a-project)
(see table below):

- Access Key ID
- Secret Access Key

| Env. variable name      | Value                  |
|:------------------------|:-----------------------|
| `AWS_ACCESS_KEY_ID`     | CI-CD Account User's Access Key ID |
| `AWS_SECRET_ACCESS_KEY` | CI-CD Account User's Secret Access Token |

### 3. [...] *Additional Steps as Determined* ###

## FAQ ##

*Accessing TF State on Local Machine*

**Do not perform a `terraform init`**. While not breaking, the local machine relative to the user is going to
have a ***drift*** between what is on local and what is on the remote. Instead:

1. Run `source .initialize`.
2. Provide GitLab & project-related information.

**Note**: Running `.initialize` is only required the first time when cloning the repository for the first time.

*Additional Information about Terraform + GitLab*

There is more in GitLab documentation. See [Infrastructure as code with Terraform and GitLab](https://docs.gitlab.com/ee/user/infrastructure/)
