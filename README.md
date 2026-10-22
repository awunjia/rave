## Available Commands

| Command | Description |
|---|---|
| `make fresh` | Stops Rave's containers, rebuilds images without cache, starts infrastructure, and launches both apps. |
| `make start` | Starts infrastructure if needed and launches both apps. |
| `make build` | Builds Docker images without starting containers. |
| `make reset` | Deletes Rave's Compose-managed volumes, rebuilds images, and starts infrastructure and both apps. |
| `make stop` | Stops Rave's Docker services. |