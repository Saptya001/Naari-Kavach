# NaariKavach Infrastructure Documentation

This directory contains the infrastructure-related files for the NaariKavach project. It includes configurations for Docker, Kubernetes, and CI/CD pipelines to facilitate the deployment and management of the application.

## Directory Structure

- **docker/**: Contains Dockerfiles for building the frontend, backend, and AI service applications.
- **k8s/**: Contains Kubernetes deployment configurations for the frontend, backend, and AI service, as well as ingress configurations for routing.
- **ci-cd/**: Contains GitHub Actions pipeline configurations for automating the build and deployment processes for the frontend, backend, and AI service.

## Usage

1. **Docker**: Use the Dockerfiles in the `docker/` directory to build container images for each service. This allows for consistent deployment across different environments.

2. **Kubernetes**: The YAML files in the `k8s/` directory can be used to deploy the services on a Kubernetes cluster. Ensure that your cluster is set up and configured before applying these configurations.

3. **CI/CD**: The configurations in the `ci-cd/` directory can be integrated with GitHub Actions to automate the deployment process. This ensures that changes to the codebase are automatically tested and deployed.

## Getting Started

To get started with the infrastructure setup, follow these steps:

1. Clone the repository.
2. Navigate to the `infra/` directory.
3. Follow the instructions in the respective subdirectories (`docker/`, `k8s/`, `ci-cd/`) for building, deploying, and automating your services.

## Contributing

If you would like to contribute to the infrastructure setup, please follow the project's contribution guidelines and ensure that your changes are well-documented.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.