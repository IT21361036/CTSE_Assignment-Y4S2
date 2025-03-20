SLIIT | DEPARTMENT OF COMPUTER SCIENCE & SOFTWARE ENGINEERING | FACULTY OF
COMPUTING
Module - Current Trends in SoAware Engineering (SE4010) | 2025 | Semester 1
Cloud CompuNng Assignment
ObjecNve:
Design and implement a prototype of a secure, microservice-based applica8on component
using fundamental DevOps prac8ces and cloud capabili8es.
Assignment Overview:
Your group is tasked with crea8ng a prototype for a single, key component of a larger
microservice-based applica8on. This should be deployed on a public cloud service provider.
You have the op8on to choose from any cloud service provider of your choice. The final
deliverable should demonstrate basic DevOps prac8ces, and security considera8ons including
DevSecOps prac8ces, and cloud capabili8es.
Specific Tasks:
Design a Simple Microservice (LO1, LO3)
• Choose a core component of a larger applica8on idea (e.g., user authen8ca8on,
product catalog for e-commerce, etc.).
• Outline the func8onality and endpoints of this microservice.
• You can choose any programming language/ framework of your choice.
Implement Basic DevOps Prac8ces (LO1, LO2)
• The code should be hosted in the version controlling system. Make sure it’s a public
repository.
• Use CI/CD pipelines to automate the build and deployment process for the
microservice.
Containerize the Microservice using Docker (LO3, LO4)
• Your microservice should be containerized.
• Use any exis8ng container registry service to host your container image. The
applica8on deployment should consume the container image from the container
registry.
Deploy the Microservice (LO2, LO4)
• Use managed container orchestra8on services provided by your cloud service provider
to deploy the containerized microservice.
o You can use cloud specific services like ECS (Elas8c Container Service)/ Azure
Container Apps etc..
o You have the freedom to even use managed Kubernetes services provided by
your chosen cloud service provider.
• Ensure the microservice is accessible over the internet.
• Ensure that you can showcase how you have secured your applica8on.
Integrate Basic Security Measures (LO2, LO4)
• Implement basic security best prac8ces (like using IAM roles, security groups etc,,).
• Ensure the microservice handles data securely and follows principles of least privilege.
• Integrate managed SAST tools like SonarCloud or Snyk to enable DevSecOps prac8ces
to your microservice development. Use free versions here.
Deliverables:
Project Report (should only cover following components):
• Architecture diagram of the microservice.
• Descrip8on and ra8onale of the chosen microservice.
• Overview of the DevOps and security prac8ces implemented.
• Any challenges faced and how they were addressed.
Code Repository:
• Access to the version-controlled repository with all source code.
Demonstra8on (Limited to 10 minutes):
• A working prototype of the microservice deployed on chosen cloud service provider.
• Demonstra8on of the CI/CD process.
Assessment Criteria:
• Prac8cality and func8onality of the microservice. (10%)
• Effec8ve implementa8on of basic DevOps prac8ces and cloud compu8ng capabili8es.
(40%)
• Applica8on of security measures in the microservice including DevSecOps prac8ces.
(20%)
• Code quality and adherence to best prac8ces. (20%)
• Clarity of the project report and demonstra8on. (10%)
Notes:
• Focus on depth rather than breadth; a well-implemented single microservice is more
valuable than several poorly implemented ones.
• Document all design decisions and challenges encountered during the project.
• When using cloud service provider services always ensure you are within Free Tier. 
