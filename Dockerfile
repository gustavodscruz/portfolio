FROM node:22.12.0
WORKDIR /app
VOLUME ["/app/data"]
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["tail", "-f", "/dev/null"]


# FROM node:22.12.0
# WORKDIR /app
# COPY --from=builder /app/.next .next
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/node_modules ./node_modules
# EXPOSE 3000
# CMD ["npx", "next", "start"]