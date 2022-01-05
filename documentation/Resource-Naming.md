## Resource Naming Conventions ##

- [Google Cloud Platform Best Practices for Enterprises](https://cloud.google.com/docs/enterprise/best-practices-for-enterprise-organizations)
- [AWS Tagging Strategies & White Paper](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf)
- [The Azure Platform's Naming Convention Guide](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming)

### General Resource Naming ###

Naming component |  Description
|:---------------:|:--------------|
| Type          | An abbreviation that represents the type of cloud resource or asset. The component is often used as a prefix or suffix in the name
| Business-Unit | Top-level division of the company that owns the subscription or workload the resource belongs to. In smaller organizations, this component might represent a single corporate top-level organizational element
| Name          | Name of the application, workload, or service that the resource is a part of
| Environment   | The stage of the development lifecycle for the workload that the resource supports

---

|  Key  |  Description | Example(s) |
|:---------------:|:---:|:---:|
| `Business-Unit` | AWS-related parameters & the Account Owner's Functional Units, Departments, Applications, etc., etc. | *AWS*, *[Company-Name]*, *[Contractor]* |
| `Prefix` | Subject-Naming Prefix - *Optional* | N/A | 
| `Environment` | VPC-Isolated Deployment Aliases | *Development*, *Staging*, *UAT*, *Pre*, *Production* |
| `Category` | Abstract Representation of AWS, Cloud, or other Logical Services, Resources, Parameter(s) | *Database*, *Storage*, *Compute*, *Networking*, *CI-CD*, *Management* |
| `Service` | Established Service(s) either Consumed or Provided | *PostgreSQL*, *S3*, *DocumentDB*, *EC2*, *CFN*, *Lambda* |
| `Resource` | Provisioned, Referenced, or otherwise Aliased Resource Name | `CI-Lambda-Stack`, `Unit-Regression-Results`, `Release-Version-Bucket`, `CMS-EC2-AMI` |
| `Identifier` | Further Derived Key-Name or Abstraction | `Resource-ID`, `Output-Variables`, `JWT-Secret-Token-Hash`, `SSH-Public-Key`, `Default-AWS-Deployment-Region`, `VPC-ID` |
| `Extenteded-Name` | Dot-Product Associations | `...` |
