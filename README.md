# Product Management Microservice

## SLIIT - Current Trends in Software Engineering (SE4010)
### Cloud Computing Assignment

## Overview
This project implements a Product Management microservice as part of a larger microservice-based application. The service provides comprehensive product management capabilities including CRUD operations, advanced filtering, and bulk operations.

## Using the Docker Image
Download the container image from Docker Hub:
```bash
docker pull saarakaizerr/ctse-assignment:v1.0
```
Run the Container
```
docker run -d -p 3000:3000 saarakaizerr/ctse-assignment:v1.0
```
-d: Runs in detached mode.

-p 3000:3000: Maps port 3000 on your machine to port 3000 in the container.

Access the service at http://localhost:3000.

Example Usage
```
curl http://localhost:3001
```

## Architecture
![Architecture Diagram](architecture-diagram.png)

## Features
- Complete CRUD operations for products
- Advanced filtering capabilities:
  - Price range filtering
  - Category filtering
  - Text search in name and description
  - Stock availability filtering
  - Tags filtering
  - Date range filtering
  - Active status filtering
- Pagination and sorting
- Bulk update operations
- Error handling middleware
- MongoDB integration
- Containerized with Docker
- CI/CD pipeline integration
- Security measures implementation

## Technical Stack
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Container**: Docker
- **CI/CD**: GitHub Actions
- **Cloud Provider**: [Your chosen cloud provider]
- **Security**: 
  - IAM roles
  - Security groups
  - SAST tools (SonarCloud/Snyk)

## API Endpoints

### Product Management

## Filter Options
- `category`: Filter by product category
- `minPrice` & `maxPrice`: Price range filtering
- `search`: Search in name and description
- `inStock`: Filter by stock availability
- `tags`: Filter by product tags
- `createdAfter` & `createdBefore`: Date range filtering
- `isActive`: Filter by active status
- `sortBy` & `sortOrder`: Sorting options
- `page` & `limit`: Pagination

## DevOps Practices
1. **Version Control**
   - GitHub repository
   - Branch protection rules
   - Commit conventions

2. **CI/CD Pipeline**
   - Automated testing
   - Build automation
   - Deployment automation

3. **Containerization**
   - Docker containerization
   - Container registry integration

4. **Cloud Deployment**
   - Managed container orchestration
   - Auto-scaling configuration
   - Load balancing

## Security Measures
1. **DevSecOps Integration**
   - SonarCloud/Snyk integration
   - Automated security scanning
   - Dependency vulnerability checking

2. **Access Control**
   - IAM roles and permissions
   - Security groups configuration
   - Principle of least privilege

3. **Data Security**
   - Input validation
   - Error handling
   - Secure data transmission

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Docker

# CTSE_Assignment-Y4S2
