# ---- Build stage ----
FROM golang:1.22-alpine AS build
WORKDIR /src

# Cache module downloads. (No external deps yet, but this keeps builds fast
# once dependencies are added.)
COPY go.mod ./
COPY go.sum* ./
RUN go mod download

COPY . .
# Static build so the binary runs in a scratch/distroless-style image.
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /out/server ./cmd/server

# ---- Runtime stage ----
FROM alpine:3.20 AS runtime
RUN adduser -D -u 10001 appuser
WORKDIR /app
COPY --from=build /out/server /app/server
USER appuser
EXPOSE 8080
ENV PORT=8080 APP_ENV=production
ENTRYPOINT ["/app/server"]
