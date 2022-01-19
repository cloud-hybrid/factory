# Resource Naming Conventions #

- [Google Cloud Platform Best Practices for Enterprises](https://cloud.google.com/docs/enterprise/best-practices-for-enterprise-organizations)
- [AWS Tagging Strategies & White Paper](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf)
- [The Azure Platform's Naming Convention Guide](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming)

## General Resource Naming ##

| Naming component | Description                                                                                                                                                                                                    |
|:----------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       Type       | An abbreviation that represents the type of cloud resource or asset. The component is often used as a prefix or suffix in the name                                                                             |
|  Business-Unit   | Top-level division of the company that owns the subscription or workload the resource belongs to. In smaller organizations, this component might represent a single corporate top-level organizational element |
|       Name       | Name of the application, workload, or service that the resource is a part of                                                                                                                                   |
|   Environment    | The stage of the development lifecycle for the workload that the resource supports                                                                                                                             |

## Personal Naming Pattern ##

|      Key       |                                                Description                                                |                         Example(s)                          |
|:--------------:|:---------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------:|
| `Organization` |                                                    ...                                                    |                            *IBM*                            |
| `Environment`  |                                    VPC-Isolated Aliases or Common-Name                                    |        *Development*, *Staging*, *UAT*, *Production*        |
| `Application`  |                    The Associated Resources' Stack, Functional Purpose, or Common-Name                    |                       *Cloud-Factory*                       |
|   `Service`    |                            Established Service(s) either Consumed or Provided                             |                     *S3*, *EC2*, *CFN*                      |
|   `Resource`   |                        Provisioned, Referenced, or otherwise Aliased Resource Name                        |     ***EC2**-Log-Results*, *Release-Version-**Bucket***     |
|  `Identifier`  | Further Derived Key(s), Additional Identifier or Common-Name (Useful for Global Parameters or References) | *SSH-Public-Key*, *Default-AWS-Deployment-Region*, *VPC-ID* |
