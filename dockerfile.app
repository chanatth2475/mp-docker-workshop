# docker build -f dockerfile.app -t bill-app .
# docker run -p 3000:3000 --env-file .env -d bill-app
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install 

# Copy the rest of the app
COPY . .

# Expose the app port (optional, for documentation)
EXPOSE 3000

RUN npm run build
ENV host=db
ENV port=5432
# Run the app
CMD ["npm" , "run" , "prod"]
